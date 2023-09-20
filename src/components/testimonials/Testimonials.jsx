import React from "react";
import "./testimonials.css";
import { ReactComponent as WorkIcon } from "../../assets/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Testimonials() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
            className="text-black"
              key={element.key}
              date={element.date}
              dateClassName="date text-white"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title text-black">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle text-black">
                {element.location}
              </h5>
              <p id="description text-black ">{element.description}</p>
              {showButton && (
                <a
                  className={`button text-black ${
                    isWorkIcon ? "workButton " : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Testimonials;



