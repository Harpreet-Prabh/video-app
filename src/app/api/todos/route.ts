import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const res = await fetch("https://api.freeapi.app/api/v1/todos");
  const resData = await res.json();
  console.log(resData);
  return NextResponse.json(resData, { status: 200 });
};

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  try {
    const res = await fetch("https://api.freeapi.app/api/v1/todos", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();

    console.log(resData, res);
    return NextResponse.json(
      { message: "POST todos here", received: resData },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating todo", error: error },
      { status: 500 }
    );
  }
};
