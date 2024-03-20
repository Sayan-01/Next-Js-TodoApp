import React from "react";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

let domain = process.env.DOMAIN;
async function getTask() {
  try {
    const datas = await fetch(`${domain}/api/topics`, { cache: "no-store" });
    if (!datas.ok) {
      throw new Error("Faild to Fetch");
    }
    return datas.json();
  } catch (e) {
    console.log("error sayan", e);
  }
}

const TopicsList = async () => {
  const { datas } = await getTask();
  return (
    <>
      {datas.map((task) => (
        <div
          key={task._id}
          className="flex my-2 px-5 py-4 justify-between text-black items-center w-[100%] rounded-lg bor"
        >
          <div>
            <h1 className=" font-bold text-2xl">{task.task}</h1>
            <div>{task.description}</div>
          </div>
          <div className="flex gap-3">
            <RemoveBtn
              id={task._id}
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
