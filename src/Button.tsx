import React, { FC } from "react";

// type ButtonPropsType = {
//     title:string
// }
// export  const Button: React.FC<ButtonPropsType> = ({title}) => {
//   return (
//     <button>{title}</button>
//   )
// }

type ButtonPropsType = {
  title: string;
  OnClickHandler: () => void;
  isDisabled?: boolean;
};
export const Button: FC<ButtonPropsType> = ({
  title,
  OnClickHandler,
  isDisabled,
}) => {
  return (
    <button disabled={isDisabled} onClick={OnClickHandler}>
      {title}
    </button>
  );
};
