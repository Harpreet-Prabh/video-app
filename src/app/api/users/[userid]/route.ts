import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest, { params }) => {
  const { searchParams } = new URL(request.url);
  const sortby = searchParams.getAll("sortby");
  const category = searchParams.has("category");
  console.log(params, sortby);
  if (!category) {
    return NextResponse.json(
      { message: " category is required" },
      { status: 400 }
    );
  }
  return NextResponse.json({ params, sortby, category });
};
