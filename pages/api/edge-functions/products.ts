import { mockProducts } from "lib/mocks/products";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const products = async (req: NextRequest) => {
  return NextResponse.json(mockProducts);
};

export default products;
