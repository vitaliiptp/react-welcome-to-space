import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-container grid-container">
      <div className="flex-container--home">
        <div className="flex-container--home_text">
          <h1 className="text-accent fs-600 ff-sans-cond uppercase letter-spacing-1">
            You are fascinated by the
            <span className="d-block fs-900 ff-serif text-white">Space</span>
          </h1>

                    <p  className="text-accent fs-500 ff-sans-cond letter-spacing-3">
                    “I've loved the stars too fondly to be fearful of the night.”
                    ― Galileo
                    </p>
                </div>
                <div className="">
                    <Link to="/solar-system" style={{ textDecoration: "none" }}>
                        <a className="large-button uppercase ff-serif text-dark bg-white">Start</a>
                    </Link>
                </div>
            </div>
        </div>
        <div className="">
          <Link to="/solar-system" style={{ textDecoration: "none" }}>
            <a className="large-button uppercase ff-serif text-dark bg-white">
              Start
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
