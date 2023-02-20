import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { ClosedEye, SeeOutlinedIcon } from "../../../assets";

type Props = {
  isPlaceholder?: string;
  name?: string;
  classname?: string;
  inpuClassName?: string;
  types?: HTMLInputTypeAttribute;
  useEyes?: boolean;
  eyesActive?: boolean;
  values?: string | number;
  onchange?: (text: ChangeEvent<HTMLInputElement>) => void;
  dropdownElement?: JSX.Element;
  inputStyle?: "disable" | "danger" | "primary";
  onHide?: () => void;
  maxlength?: number;
  oninput?: (e: any) => void;
  disable?: boolean;
};

const InputFiled = (props: Props) => {
  return (
    <div className="w-full flex items-center box-border relative">
      <input
        type={props.types}
        className={`${props.inpuClassName} border w-full border-[#828282] p-2 rounded-lg outline-none placeholder:text-[#ABAAAA]`}
        placeholder={props.isPlaceholder}
        value={props.values}
        name={props.name}
        onChange={props.onchange}
        maxLength={props.maxlength}
        onInput={props.oninput}
        disabled={props.disable}
        required
      />
      {props.useEyes && (
        <button className="absolute right-3 cursor-pointer" disabled>
          {props.eyesActive ? (
            <SeeOutlinedIcon
              className={"ml-2 text-[24px] outline-none text-black"}
              onClick={props.onHide}
            />
          ) : (
            <ClosedEye
              className={"ml-2 text-[24px] outline-none text-black"}
              onClick={props.onHide}
            />
          )}
        </button>
      )}
    </div>
  );
};

export default InputFiled;
