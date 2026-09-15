export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ok:false});
  const event = req.body || {};
  console.log('[solomon-intent]', JSON.stringify({ ...event, ua: req.headers['user-agent'] || null }));
  res.status(204).end();
}
