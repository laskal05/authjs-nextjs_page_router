import { handlers } from "@/auth";
import { NextApiHandler } from "next";

const APINextAuth: NextApiHandler = async (req, res) => {
  const { GET, POST } = handlers;

  switch (req.method) {
    case 'GET': {
      return GET(req as any);
    }
    case 'POST': {
      return POST(req as any);
    }
    default: {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
};

export default APINextAuth;

export const runtime = "edge" // optional
