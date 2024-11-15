import { PrismaClient as UserClient } from "@prisma-user/client";
import { PrismaClient as ProductClient } from "@prisma-product/client";

const user_prisma_client = new UserClient();
const product_prisma_client = new ProductClient();

export { user_prisma_client, product_prisma_client };
