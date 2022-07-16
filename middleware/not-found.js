const notFoundMiddleware = (req, res) =>
  res.status(404).send("<h1>Route does not exist</h1>");

export default notFoundMiddleware;
