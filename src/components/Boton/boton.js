import { useState } from "react";

export default function Button(props) {
  
    function handleClick() {
      props.onClick();
    }
  
    return (
      <button onClick={handleClick}>
        {props.children}
      </button>
    );
  }