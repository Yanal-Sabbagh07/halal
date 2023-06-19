import User from "@/models/User";
// import connectToMongoDB from "@/utils/db";
import { connectToMongoDB } from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  await connectToMongoDB();

  const { name, email, password, confirm } = await request.json();

  if (request.method === "POST") {
    const hashedPassword = await bcrypt.hash(password, 5);
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    } else {
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        confirm,
      });

      try {
        await newUser.save();
        return NextResponse.json(
          { message: "User has been created" },
          {
            status: 201,
          }
        );
      } catch (err: any) {
        return NextResponse.json(err.message, {
          status: 500,
        });
      }
    }
  }
};
