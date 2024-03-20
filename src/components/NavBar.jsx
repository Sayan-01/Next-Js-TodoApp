import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className=" flex mx-3 mb-2 mt-6 px-10 py-8 justify-between bor text-white items-center w-[70vmin] rounded-lg bg-zinc-800">
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
