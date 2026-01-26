import prisma from "@/lib/prisma";
import ShopOne from "./pageone";

export default async function ShopPage() {
  let products:any = [];

  try {
    products = await prisma.product.findMany();
  } catch (error) {
    console.error("Failed to fetch products", error);
  }

  return <ShopOne products={products} />;
}
