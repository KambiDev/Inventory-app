export function registerValidate(req, res, next) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Campos incompletos",
    });
  }

  const cleanUsername = username.trim();
  const cleanEmail = email.trim();
  const cleanPassword = password.trim();

  req.body.username = cleanUsername;
  req.body.email = cleanEmail;
  req.body.password = cleanPassword;

  next();
}
