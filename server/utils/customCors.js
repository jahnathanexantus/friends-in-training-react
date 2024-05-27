const costumCors = (req, res, next) => {
  // these are examples , when it is time to implament then real url will be placed
  const allowedOrigins = ["http:/example1.com", "http:/example2.com"];
  const origin = req.header.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.sendStatus(204);
  } else {
    next();
  }
};

module.exports = costumCors;
