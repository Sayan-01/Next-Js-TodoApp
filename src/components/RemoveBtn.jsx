import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";



const RemoveBtn = async ({id}) => {
  const router = useRouter()
  const remove = async () => {
    await fetch(`http://localhost:3000/api/topics/${id}`, { cache: "no-store", method: "DELETE" });
    router.refresh()
  };
  return (
    <button onClick={remove} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
