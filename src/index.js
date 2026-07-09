// kcc-runner-api · Express HTTP wrapper around kcc-runner-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'kcc-runner', version: '1.0.0' }));

app.post('/openOne', async (req, res) => {
  try {
    const { openOne } = await import('@ai-native-solutions/kcc-runner-sdk');
    const out = typeof openOne === 'function' ? await openOne(req.body) : { error: 'openOne not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/ensureJobsSchema', async (req, res) => {
  try {
    const { ensureJobsSchema } = await import('@ai-native-solutions/kcc-runner-sdk');
    const out = typeof ensureJobsSchema === 'function' ? await ensureJobsSchema(req.body) : { error: 'ensureJobsSchema not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/tx', async (req, res) => {
  try {
    const { tx } = await import('@ai-native-solutions/kcc-runner-sdk');
    const out = typeof tx === 'function' ? await tx(req.body) : { error: 'tx not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/get', async (req, res) => {
  try {
    const { get } = await import('@ai-native-solutions/kcc-runner-sdk');
    const out = typeof get === 'function' ? await get(req.body) : { error: 'get not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/getAll', async (req, res) => {
  try {
    const { getAll } = await import('@ai-native-solutions/kcc-runner-sdk');
    const out = typeof getAll === 'function' ? await getAll(req.body) : { error: 'getAll not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/put', async (req, res) => {
  try {
    const { put } = await import('@ai-native-solutions/kcc-runner-sdk');
    const out = typeof put === 'function' ? await put(req.body) : { error: 'put not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('kcc-runner-api listening on :' + PORT));
