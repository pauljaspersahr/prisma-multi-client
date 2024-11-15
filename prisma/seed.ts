import { user_prisma_client, product_prisma_client } from "./prisma.client";

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
    await user_prisma_client.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userData,
    });
  }

  const products = [
    {
      name: "Product A",
    },
    {
      name: "Product B",
    },
    {
      name: "Product C",
    },
  ];

  for (const productData of products) {
    await product_prisma_client.product.upsert({
      where: { name: productData.name },
      update: {},
      create: productData,
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
    await user_prisma_client.$disconnect();
    await product_prisma_client.$disconnect();
  });
