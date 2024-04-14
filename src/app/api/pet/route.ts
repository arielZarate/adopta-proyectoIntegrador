import { NextResponse } from "next/server";
import DB from "@/libs/DB";
import { Pet } from "@/interfaces/IPet";

export function GET(req: Request, res: NextResponse<Pet>) {
  try {
    DB();
    //  const notes = await prisma.note.findMany();
    return NextResponse.json("get pet");
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export const POST = async (req: Request) => {
  let body = await req.json();
  console.log(body);
  return NextResponse.json("post  pet");
};
