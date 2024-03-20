import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

async function getTask(id) {
  let domain = process.env.DOMAIN;
  let datas = await fetch(`${domain}/api/topics/${id}`, { cache: "no-store" });
  datas = await datas.json();
  return datas;
}

const EditTopic = async({params}) => {
  const {id} = params
  const {fulllisting} = await getTask(id)
  const {task, description} = fulllisting
  return (
    <>
      <EditTopicForm
        id={id}
        task={task}
        description={description}
      />
    </>
  );
};

export default EditTopic;
