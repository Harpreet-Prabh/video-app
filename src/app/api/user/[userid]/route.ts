import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest, { params }) => {
  const { searchParams } = new URL(request.url);
  const sortby = searchParams.getAll("sortby");
  const username = searchParams.has("username");
  console.log(params, sortby);
  if (!username) {
    return NextResponse.json(
      { message: " user name is required" },
      { status: 400 }
    );
  }
  return NextResponse.json({ params, sortby, username });
};

export const DELETE = (request: NextRequest) => {
  return NextResponse.json({ message: "DELETE user here" }, { status: 200 });
};

export const PUT = async (request: NextRequest) => {
  const data = await request.json();
  return NextResponse.json(
    { message: "PUT user here", updated: data },
    { status: 200 }
  );
};

export const PATCH = async (request: NextRequest) => {
  const data = await request.json();
  return NextResponse.json(
    { message: "PATCH user here", updated: data },
    { status: 200 }
  );
};
