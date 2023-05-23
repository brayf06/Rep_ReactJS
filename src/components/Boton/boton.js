import { useState } from "react";

export default function Button(props) {
  
    return (
      <button className="btn btn-outline-secondary rounded-0" > {props.children} </button>
    );
  }