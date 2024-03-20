import React from "react";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

async function getTask() {
  let datas = await fetch("http://localhost:3000/api/topics", { cache: "no-store" });
  datas = await datas.json();
  return datas;
}

const TopicsList = async () => {
  let { datas } = await getTask();
  return (
    <>
      {datas.map((task) => (
        <div
          id={task._id}
          className="flex my-2 px-5 py-4 justify-between text-black items-center w-[100%] rounded-lg bor"
        >
          <div>
            <h1 className=" font-bold text-2xl">{task.task}</h1>
            <div>{task.description}</div>
          </div>
          <div className="flex gap-3">
            <RemoveBtn
              id={task._id}
              size={24}
            />
            <Link href={`/edittopic/${task._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
