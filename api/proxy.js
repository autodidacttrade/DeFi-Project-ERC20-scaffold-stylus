// api/[...path].js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const path = req.query.path.join("/"); // captura balances, price, mint
  const url = `http://161.132.55.153:3000/${path}`;

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: req.headers,
      body: req.method === "POST" ? JSON.stringify(req.body) : undefined
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


