export function categoryValidate(req, res, next) {
  const { name, description } = req.body;

  if (typeof name !== "string" || typeof description !== "string") {
    return res.status(400).json({ message: "Datos invalidos." });
  }

  const cleanName = name.trim();
  const cleanDescription = description.trim();

  if (!cleanName || !cleanDescription) {
    return res.status(400).json({ message: "Campos incompletos." });
  }

  req.body.name = cleanName;
  req.body.description = cleanDescription;

  next();
}
