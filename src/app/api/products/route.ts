import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
  return NextResponse.json({ message: "GET products here" }, { status: 200 });
};
