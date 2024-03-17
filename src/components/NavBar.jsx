import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className=" flex mx-3 my-2 px-10 py-8 justify-between bor text-white items-center w-[60%] rounded-lg bg-zinc-800">
        <Link
          className="font-bold"
          href={"/"}
        >
          Sayan.
        </Link>
        <Link
          className=" bg-white p-2 rounded-md text-black"
          href={"/addtopic"}
        >
          Add Topic
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
