import React from "react";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

async function getTask() {
  let datas = await fetch("http://localhost:3000/api/topics", { cache: "no-store" });
  datas = await datas.json();
  return datas;
}

const TopicsList = async() => {
  let tasks = await getTask();
  return (
    <>
      <div className="flex my-2 px-5 py-4 justify-between text-black items-center w-[100%] rounded-lg bor">
        <div>
          <h1 className=" font-bold text-2xl">{tasks.datas[0].task}</h1>
          <div>{tasks.datas[0].description}</div>
        </div>
        <div className="flex gap-3">
          <RemoveBtn size={24} />
          <Link href={`/edittopic/s`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopicsList;
