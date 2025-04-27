import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();

    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ mes: "auth error" }, { status: 401 });
    }

    const { payload } = await verifyJWT(token);
    const findUser = await User.findOne({ _id: payload._id });

    // take body
    const body = await request.json();

    // create Product model with body
    const productModel = await new Product({
      title: body.title,
      subtitle: body.subtitle,
    });
    await productModel.save();

    return NextResponse.json(
      { mes: "Product added successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ mes: error.message }, { status: 500 });
  }
}
