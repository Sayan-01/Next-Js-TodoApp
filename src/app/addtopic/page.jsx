import React from "react";

const page = () => {
  return (
    <>
    <h1>Add Topic</h1>
      <form>
        <input
          type="text"
          placeholder="Topicc Title"
        />
        <input
          type="text"
          placeholder="Topic Description"
        />

        <button>Add Topic</button>
      </form>
    </>
  );
};

export default page;
