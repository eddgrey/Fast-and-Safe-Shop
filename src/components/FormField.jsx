/* eslint-disable react/prop-types */
import React from "react";

const FormField = ({
  id,
  label,
  type,
  size,
  refInput,
  theme = "dark",
  showError,
}) => {
  const rowForm = "flex flex-col w-full mb-8 justify-between";
  const labelForm = "mb-1 w-1/4 text-sm uppercase tracking-wide";
  const inputForm = "input-dark pl-2  w-3/4 ";

  const width = size === "medium" ? "w-5/12" : "w-full";
  const display = showError ? "inline" : "hidden";
  const inputBorder = showError ? "border-b-2 border-red-700" : "";

  return size === "small" ? (
    <div className={rowForm}>
      <label htmlFor={id} className={labelForm}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`${inputForm} ${inputBorder} `}
        ref={refInput}
      />
      <em className={` text-red-500 font-semibold text-lg ${display} `}>
        * Obligatorio
      </em>
    </div>
  ) : (
    <div className={`flex flex-col ${width} mb-12`}>
      <label htmlFor={id} className="mb-2 text-sm uppercase tracking-wider">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`py-1 pl-1 w-full input-${theme}`}
        ref={refInput}
      />
      {/* <em className=" text-red-500 font-semibold text-lg ">* Obligatorio</em> */}
    </div>
  );
};

export default FormField;
