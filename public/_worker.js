export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/subscribe') {
      return handleSubscribe(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

async function handleSubscribe(request, env) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed', fn: 'reached' }, 405);
  }

  let email;
  try {
    const body = await request.json();
    email = body.email;
  } catch {
    return json({ error: 'Corps de requête invalide' }, 400);
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Email invalide' }, 400);
  }

  const apiKey = env.BREVO_API_KEY;
  if (!apiKey) {
    return json({ error: 'Configuration serveur manquante' }, 500);
  }

  const headers = {
    'api-key': apiKey,
    'Content-Type': 'application/json',
  };

  const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, listIds: [3], updateEnabled: true }),
  });

  if (!contactRes.ok && contactRes.status !== 204) {
    const brevoDetail = await contactRes.text().catch(() => '(no body)');
    return json({ error: 'Brevo contacts error', brevoStatus: contactRes.status, brevoDetail }, 502);
  }

  const smtpRes = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      to: [{ email }],
      subject: 'Bienvenue sur TrouveTonFatBike !',
      htmlContent:
        "<h1>Merci pour ton inscription !</h1><p>Tu recevras bientôt nos meilleurs guides et bons plans fatbike.</p><a href='https://trouvetonfatbike.com'>Visiter le site</a>",
      sender: { name: 'TrouveTonFatBike', email: 'contact@trouvetonfatbike.com' },
    }),
  });

  if (!smtpRes.ok) {
    const brevoDetail = await smtpRes.text().catch(() => '(no body)');
    return json({ error: 'Brevo SMTP error', brevoStatus: smtpRes.status, brevoDetail }, 502);
  }

  return json({ success: true }, 200);
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
