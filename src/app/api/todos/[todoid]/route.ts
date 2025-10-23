import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { todoid: string } }
) => {
  const { searchParams } = new URL(request.url);
  const query = searchParams.getAll("query");
  const { todoid } = params;
  const res = await fetch(`https://api.freeapi.app/api/v1/todos/${todoid}`);
  const resData = await res.json();
  console.log(params, query);
  return NextResponse.json(resData, { status: 200 });
};

export const DELETE = (
  request: NextRequest,
  { params }: { params: { todoid: string } }
) => {
  const { todoid } = params;
  console.log("Deleting todo with ID:", todoid);
  return NextResponse.json(
    { message: `DELETE todo with ID: ${todoid}` },
    { status: 200 }
  );
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { todoid: string } }
) => {
  const data = await request.json();
  const { todoid } = params;
  const res = await fetch(`https://api.freeapi.app/api/v1/todos/${todoid}`, {
    method: "PUT",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: '{"description":"A new description for the todo","title":"A new title for the todo"}',
  });
  const resData = await res.json();
  console.log(resData);

  return NextResponse.json(
    { message: `PUT todo with ID: ${todoid}`, received: resData },
    { status: 200 }
  );
};
