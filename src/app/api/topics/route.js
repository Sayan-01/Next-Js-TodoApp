import expMongo from "@/libs/mongoDb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Task from "../../../../models/topic";

export const GET = async () => {
  await expMongo();
  let datas = await Task.find();
  return NextResponse.json({ datas });
};

export const POST = async (req) => {
  await expMongo();
  let { task, description } = await req.json(); //express a jemon req.body hoy temon ate just req ar maddhome body  e pass hoy
  const newTask = new Task({ task, description });
  await newTask.save();
  return NextResponse.json({ task, description });
};
