import React from "react";

type btnProps = {
  title: string;
  className: string;
  style:any
};

function Button(props: btnProps) {
  const { title, className , style } = props;

  return (
    <>
      <button style={style} className={className}>{title}</button>
    </>
  );
}

export default Button;
