const logout = (req, res) => {
  req.session.destroy();
  res.cookie("cookie", {
    maxAge: 0,
    httpOnly: false,
    path: "/",
  });
  res.status(202).send({ message: "Logged out." });
};

module.exports = { logout };
