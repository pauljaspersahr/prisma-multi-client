import prisma_client from "./prisma.client";

async function main() {
  const users = [
    {
      email: "user1@example.com",
    },
    {
      email: "user2@example.com",
    },
    {
      email: "user3@example.com",
    },
  ];

  for (const userData of users) {
    await prisma_client.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userData,
    });
  }

  console.log("Database has been seeded with upsert.");
}

main()
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma_client.$disconnect();
  });
