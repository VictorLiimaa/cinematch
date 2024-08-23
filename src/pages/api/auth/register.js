import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
      }

    // Verificar se o email já está cadastrado
    const existingUser = await prisma.manualUser.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Este e-mail já está cadastrado." });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar um novo usuário
    const user = await prisma.manualUser.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json(user);
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
