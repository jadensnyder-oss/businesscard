/**
 * POST /api/leads — saves lead payloads for the RLC demo.
 * Configure LEADS_WEBHOOK_URL (e.g. Zapier/Make “Webhooks” → Google Sheets).
 * Optional: set LEADS_SECRET and send header x-lead-secret matching it.
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secret = process.env.LEADS_SECRET;
  if (secret && req.headers['x-lead-secret'] !== secret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const firstName = String(body.firstName || '').trim();
  const lastName = String(body.lastName || '').trim();
  const fullName = String(body.fullName || `${firstName} ${lastName}`).trim();
  const email = String(body.email || '').trim();
  const company = String(body.company || '').trim();
  const partner = String(body.partner || '').trim();
  const role = String(body.role || '').trim();
  const phone = String(body.phone || '').trim();
  const notes = String(body.notes || '').trim();
  const source = String(body.source || 'rokt-rlc-demo').trim();

  if (!fullName || !email) {
    return res.status(400).json({ error: 'fullName (or firstName+lastName) and email are required' });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const payload = {
    firstName,
    lastName,
    fullName,
    email,
    company,
    partner,
    role,
    phone,
    notes,
    source,
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.LEADS_WEBHOOK_URL;
  if (webhook) {
    try {
      const r = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        const t = await r.text().catch(() => '');
        console.error('LEADS_WEBHOOK_URL failed', r.status, t);
        return res.status(502).json({ error: 'Lead service unavailable' });
      }
    } catch (e) {
      console.error(e);
      return res.status(502).json({ error: 'Lead service error' });
    }
  } else if (process.env.NODE_ENV === 'production') {
    console.warn('LEADS_WEBHOOK_URL not set — lead logged to console only');
  }

  if (!webhook) {
    console.log('[lead]', JSON.stringify(payload));
  }

  return res.status(200).json({ ok: true });
}
