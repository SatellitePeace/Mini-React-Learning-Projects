import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Questions({ title, info }) {
  const [showQuestion, setShowQuestion] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowQuestion(!showQuestion)}>
          {showQuestion ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showQuestion && <p>{info}</p>}
    </article>
  );
}
