import data from "../db";
import Review from "./Review";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const previous = () => {
    index ? setIndex(index - 1) : setIndex(data.length - 1);
  };
  const next = () => {
    index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const randomReview = () => {
    const randIndex = Math.floor(Math.random() * data.length);
    randIndex !== index ? setIndex(randIndex) : randomReview();
  };

  useEffect(() => {
    const interval = setInterval(() => randomReview(), 3000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section className="container">
      <Review key={data[index].id} {...data[index]} />
      <div className="btn-container">
        <span className="previous" onClick={previous}>
          <FaChevronLeft />
        </span>
        <span className="next" onClick={next}>
          <FaChevronRight />
        </span>
        <button onClick={randomReview} className="surprise-btn">
          Surprise Me!
        </button>
      </div>
    </section>
  );
};

export default Reviews;
