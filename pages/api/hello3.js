export default function handler(req, res) {
  res
    .status(200)
    .send({
      query: req.query,
      method: req.method,
      body: req.body,
      headers: req.headers,
      randomNum: Math.floor((Math.random()*100) + 1),
      message: "Hello from pages/api/hello3.js"
    });
}
