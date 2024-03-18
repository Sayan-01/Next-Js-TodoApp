"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async () => {
    console.log(task, description);
    let res = await fetch("http://localhost:3000/api/topics", { cache: "no-store", method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify({ task, description }) });
  };
  const handlesub = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className=" font-bold text-xl">Add Topic</h1>
      <form
        className="w-[60%]"
        onSubmit={handlesub}
      >
        <input
          className="w-[100%] h-10 rounded-md px-4 outline-none my-4"
          type="text"
          placeholder="Topicc Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className="w-[100%] h-10 rounded-md px-4 outline-none mb-4"
          type="text"
          placeholder="Topic Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          onClick={addTask}
          className="w-[40%] text-white bg-zinc-800 h-10 rounded-md px-4 outline-none mb-4"
        >
          Add Topic
        </button>
      </form>
    </>
  );
};

export default page;
