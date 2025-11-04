export default async function handler(req, res) {
  try {
    const url = `http://161.132.55.153:3000${req.url.replace("/api", "")}`;

    const options = {
      method: req.method,
      headers: { ...req.headers }
    };

    if (req.method === "POST") {
      options.body = JSON.stringify(req.body);
      options.headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(url, options);
    const data = await response.text();
    res.status(response.status).send(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Proxy failed" });
  }
}

