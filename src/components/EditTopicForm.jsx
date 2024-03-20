"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTopicForm = ({id, task, description}) => {
  const [newTask, setNewTask] = useState(task);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();
  const addTask = async () => {
    // console.log(task, description);
    let res = await fetch(`/api/topics/${id}`, {
      cache: "no-store",
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ newTask, newDescription }),
    });
    router.push("/");
    router.refresh();
  };
  const handlesub = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className=" font-bold text-xl">Add Topic</h1>
      <form
        className="w-[70vmin] "
        onSubmit={handlesub}
      >
        <input
          className="w-[100%] h-10 rounded-md px-4 outline-none my-4"
          type="text"
          placeholder="Topicc Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          className="w-[100%] h-10 rounded-md px-4 outline-none mb-4"
          type="text"
          placeholder="Topic Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />

        <button
          type="submit"
          onClick={addTask}
          className="w-[40%] text-white bg-zinc-800 h-10 rounded-md px-4 outline-none mb-4"
        >
          Edit Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
