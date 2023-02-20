import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate relative">
      <div className="w-full px-4 md:max-w-[60%] lg:max-w-[40%] absolute z-30">
        {props.children}
      </div>
    </div>
  );
};

export default AuthLayout;
