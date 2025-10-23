import { NextRequest, NextResponse } from "next/server";

export const GET = (
  request: NextRequest,
  { params }: { params: { productid: string } }
) => {
  const { searchParams } = new URL(request.url);
  const sortby = searchParams.getAll("sortby");
  const productname = searchParams.has("productname");
  console.log(params, sortby);
  if (!productname) {
    return NextResponse.json(
      { message: " product name is required" },
      { status: 400 }
    );
  }
  return NextResponse.json({ params, sortby, productname });
};

export const DELETE = (request: NextRequest) => {
  return NextResponse.json(
    { message: "DELETE products here" },
    { status: 200 }
  );
};

export const PUT = async (request: NextRequest) => {
  const data = await request.json();
  return NextResponse.json(
    { message: "PUT products here", updated: data },
    { status: 200 }
  );
};

export const PATCH = async (request: NextRequest) => {
  const data = await request.json();
  return NextResponse.json(
    { message: "PATCH products here", updated: data },
    { status: 200 }
  );
};
