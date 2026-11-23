import type { APIRoute } from 'astro';

export const prerender = false;

const json = (data: object, status: number) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

export const GET: APIRoute = () => json({ error: 'Method not allowed' }, 405);

const WELCOME = `
<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#141414;line-height:1.6">
  <div style="height:8px;background:repeating-linear-gradient(-45deg,#FF5A1F 0 10px,#161616 10px 20px);border-radius:4px"></div>
  <h1 style="color:#161616">Ta checklist « Fatbike 100 % légal »</h1>
  <p>Merci de ton inscription ! Comme promis, voici les 10 points à vérifier avant d'acheter un fatbike électrique en France :</p>
  <p style="text-align:center;margin:28px 0">
    <a href="https://trouvetonfatbike.com/checklist-fatbike-legal/" style="background:#FF5A1F;color:#fff;padding:14px 26px;border-radius:999px;text-decoration:none;font-weight:bold">Ouvrir ma checklist</a>
  </p>
  <p>Tu as déjà un fatbike ? Teste-le en 30 secondes avec le simulateur :
    <a href="https://trouvetonfatbike.com/simulateur-fatbike-legal/" style="color:#D9430F">Mon fatbike est-il légal ?</a></p>
  <p>À bientôt sur les chemins,<br>Vanessa, TrouveTonFatbike</p>
  <p style="font-size:12px;color:#6B746E">Tu reçois cet email parce que tu t'es inscrit(e) sur trouvetonfatbike.com. Un lien de désinscription figure dans chacun de nos envois.</p>
</div>`;

export const POST: APIRoute = async ({ request, locals }) => {
  const apiKey = (locals as any).runtime?.env?.BREVO_API_KEY;
  if (!apiKey) return json({ error: 'Configuration serveur manquante' }, 500);

  let email = '';
  try { email = String((await request.json()).email ?? '').trim(); } catch { return json({ error: 'Requête invalide' }, 400); }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'Email invalide' }, 400);

  const headers = { 'api-key': apiKey, 'Content-Type': 'application/json' };
  const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST', headers,
    body: JSON.stringify({ email, listIds: [3], updateEnabled: true }),
  });
  if (!contactRes.ok && contactRes.status !== 204) {
    let detail = '';
    try { const e = await contactRes.json() as any; detail = `${contactRes.status} ${e.code ?? ''} ${e.message ?? ''}`.trim(); } catch { detail = String(contactRes.status); }
    // 400 (et non 502) : Cloudflare remplace les réponses 502 par sa propre page d'erreur
    return json({ error: 'Inscription impossible, réessaie dans quelques minutes.', detail }, 400);
  }

  await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST', headers,
    body: JSON.stringify({
      to: [{ email }],
      subject: 'Ta checklist « Fatbike 100 % légal » 🚲',
      htmlContent: WELCOME,
      sender: { name: 'Vanessa de TrouveTonFatbike', email: 'contact@trouvetonfatbike.com' },
    }),
  });

  return json({ success: true }, 200);
};
