import React from "react";

const Btn = ({ text }) => {
  return (
    <a href="#" className="btn bg-primary text-white btn-black-hover px-10 py-4 rounded-full">
      {text}
    </a>
  );
};

export default Btn;
