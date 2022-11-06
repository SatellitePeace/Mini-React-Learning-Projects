import React from "react";
import { useState } from "react";
import testimonies from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaQuoteLeft,
} from "react-icons/fa";

export default function Testimonies() {
  // use states
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = testimonies[index];
  //   buttons functions
  // error
  const checkIndex = (number) => {
    if (number > testimonies.length - 1) {
      return 0;
    }
    if (number < 0) {
      return testimonies.length - 1;
    }
    return number;
  };
  //   nextbtn
  const nextTestimony = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  //   prevbtn
  const prevTestimony = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  //   random testimony
  const randomTestimony = () => {
    let randomIndex = Math.floor(Math.random() * testimonies.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    return setIndex(checkIndex(randomIndex));
  };
  return (
    <main>
      <div className="review container">
        <section>
          <figure className="img-container">
            <img src={image} alt={name} className="person-img" />
          </figure>
          <article>
            <p className="info">
              <FaQuoteLeft /> <span>{text}</span> <FaQuoteRight />
            </p>
            <div className="details">
              <h3 className="author">{name}</h3>
              <h4 className="job">{job}</h4>
            </div>
            <div>
              <button className="prev-btn" onClick={prevTestimony}>
                <FaChevronLeft />
              </button>
              <button className="next-btn" onClick={nextTestimony}>
                <FaChevronRight />
              </button>
            </div>
            <button className="random-btn" onClick={randomTestimony}>
              random
            </button>
          </article>
        </section>
      </div>
    </main>
  );
}
