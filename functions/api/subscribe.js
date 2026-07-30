export async function onRequestPost(context) {
  const { request, env } = context;

  let email;
  try {
    const body = await request.json();
    email = body.email;
  } catch {
    return Response.json({ error: 'Corps de requête invalide' }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Email invalide' }, { status: 400 });
  }

  const apiKey = env.BREVO_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Configuration serveur manquante' }, { status: 500 });
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
    return Response.json(
      { error: 'Brevo contacts error', brevoStatus: contactRes.status, brevoDetail },
      { status: 502 }
    );
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
    return Response.json(
      { error: 'Brevo SMTP error', brevoStatus: smtpRes.status, brevoDetail },
      { status: 502 }
    );
  }

  return Response.json({ success: true });
}
