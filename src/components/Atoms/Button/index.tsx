import React from "react";

type Props = {
  type: "button" | "submit" | "reset";
  title: string;
  disable?: boolean;
  onclick?: () => void;
};

const Button = (props: Props) => {
  return (
    <button
      className={`${
        props.disable ? "bg-blue-300 text-black" : "bg-blue-700 text-white"
      } w-full py-3 rounded-md font-bold`}
      type={props.type}
      onClick={props.onclick}
      disabled={props.disable}
    >
      {props.title}
    </button>
  );
};

export default Button;
