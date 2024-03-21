import expMongo from "@/libs/mongoDb";
import { NextResponse } from "next/server";
import Task from "../../../../../models/topic";

export const GET = async (req, { params }) => {
  await expMongo();
  let { id } = params;
  const fulllisting = await Task.findById(id);
  return NextResponse.json({ fulllisting });
};

export const PUT = async (req, { params }) => {
  await expMongo();
  let { id } = await params;
  let filter = {_id: id}
  const {newTask, newDescription} = await req.json();
  let result = await Task.findOneAndUpdate(filter, { task: newTask, description: newDescription });

  return NextResponse.json({result}); 
};

export const DELETE = async (req, { params }) => {
  await expMongo();
  let id = params.id;
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" });
};


