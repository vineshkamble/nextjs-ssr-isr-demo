export default function handler(req, res) {
  // res.setHeader("cache-control", "max-age=3600")
  res
    .status(200)
    .send({
      query: req.query,
      method: req.method,
      body: req.body,
      headers: req.headers,
      randomNum: Math.floor((Math.random()*100) + 1)
    });
}
