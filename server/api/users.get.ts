import prisma_client from "~/prisma/prisma.client";

export default defineEventHandler(async () => {
  const users = await prisma_client.user.findMany();
  return { users };
});
