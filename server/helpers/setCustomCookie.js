const setCustomCookie = (res, name, value, option = {}) => {
  const defaultOptions = {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 69 * 60 * 1000,
  };
  const finalOptions = { ...defaultOptions, ...options };
  res.cookie(name, value, finalOptions);
};

module.exports = setCustomCookie;
