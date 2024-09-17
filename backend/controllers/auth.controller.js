// const { PrismaClient } = require("@prisma/client");
const { hashPassword, comparePassword } = require("../utils/hash");
const { generateToken } = require("../utils/jwt");
const { registerSchema, loginSchema } = require("../schemas/auth.schema");
const { ZodError } = require("zod");
const prisma = require("../config/db");

const register = async (req, res) => {
  try {
    const { fullname, email, password } = registerSchema.parse(req.body);
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        fullname,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ fullname, email, password,  hashedPassword });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    // const user = await prisma.user.findUnique({ where: { email } });

    // if (!user || !(await comparePassword(password, user.password))) {
    //   return res.status(401).json({ error: "Invalid credentials" });
    // }

    // const token = generateToken(user.id);

    const resp = await prisma.user.findUnique({ where: { email } });
    if (!resp || !(await comparePassword(password, resp.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    

    res.status(200).json({ email, password });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

module.exports = { register, login };
