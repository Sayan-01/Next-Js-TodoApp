import expMongo from "@/libs/mongoDb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Task from "../../../../models/topic";

export const GET = async () => {
  await expMongo();
  let datas = await Task.find();
  return NextResponse.json({ datas });
};
