// import { Prisma } from "@/app/generated/prisma/client"
// import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaClient } from "@prisma/client/extension";
// import 'dotenv/config'

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// })

// const prisma = new PrismaClient({
//   adapter,
// });

// const categoryData: Prisma.CategoryCreateInput[] = [
//   {
//     name: "Electronics",
//     products: {
//       create: [
//         {
//           name: "HP-Leptop",
//           price: 80000,
//           description: "This is leptop",
//         },
//       ],
//     },
//   },
//   {
//     name: "Fashion",
//     products: {
//       create: [
//         {
//           name: "Clothibg",
//           price: 2000,
//           description: "This is clothing",
//         },
//       ],
//     },
//   },
// ];

// export async function main() {
//   for (const c of categoryData) {
//     await prisma.category.create({ data: c });
//   }
// }

// main()
//   .then(() => console.log("Seed completed"))
//   .catch((e) => console.error(e))
//   .finally(async () => await prisma.$disconnect());

// export default main;
