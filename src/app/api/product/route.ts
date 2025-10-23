import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  return NextResponse.json(
    { message: "POST products here", received: data },
    { status: 201 }
  );
};
