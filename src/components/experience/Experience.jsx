import React from "react";
import "./experience.css";
import { ReactComponent as WorkIcon } from "../../assets/work.svg";
import isrlIcon from "../../assets/isrl-logo.jpg";
import gdscIcon from "../../assets/gdsc-logo.png";
import velocityIcon from "../../assets/velocity-logo.png";
import ibmIcon from "../../assets/ibm-logo.png";
import ecellIcon from "../../assets/ecell-logo.PNG";
import kutnitiIcon from "../../assets/bricsKutniti.svg";
import beanbyteIcon from "../../assets/beanbyte-logo.jpeg";


import { ReactComponent as SchoolIcon } from "../../assets/school.svg";
import timelineElements from "./timelineElements";
import { FaCircle } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Experience() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div id="experience">
      <div className="title mt-20">
        <div className="flex justify-center text-gray-400 font-semibold">
          My Work
        </div>
        <div className="mb-10 flex justify-center text-blue-400 font-semibold">
          Experience
        </div>
      </div>
      <VerticalTimeline>
    
            <VerticalTimelineElement
              className="text-white"
              key={timelineElements[0].key}
              date={timelineElements[0].date}
              dateClassName="date text-white"
              iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
              icon={<img src={ibmIcon} className="w-13 flex lg:mt-4 mt-4" alt="IBM Logo" />}
            >
            
              <div className=" text-[30px] font-semibold text-white">
                {timelineElements[0].title}
              </div>
              <div className=" text-xl text-gray-500 font-semibold mb-2">
                {timelineElements[0].location}
              </div>

              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[0].descriptionLine1}</div>
              </div>
              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[0].descriptionLine2}</div>
              </div>
              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[0].descriptionLine3}</div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="text-white"
              key={timelineElements[1].key}
              date={timelineElements[1].date}
              dateClassName="date text-white"
              iconStyle={{ background: 'rgb(18, 113, 190)', color: '#fff' }}
              icon={<img src={beanbyteIcon} className="lg:w-10 w-7 ml-1 mt-1 flex lg:ml-2.5 lg:mt-2.5" alt="ISRL Logo" />}
            >
            
              <div className=" text-[30px] font-semibold text-white">
                {timelineElements[1].title}
              </div>
              <div className=" text-xl text-gray-500 font-semibold mb-2">
                {timelineElements[1].location}
              </div>

              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[1].descriptionLine1}</div>
              </div>
              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[1].descriptionLine2}</div>
              </div>
              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[1].descriptionLine3}</div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="text-white"
              key={timelineElements[2].key}
              date={timelineElements[2].date}
              dateClassName="date text-white"
              iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
              icon={<img src={kutnitiIcon} className="h-11 flex lg:mt-3 mt-1" alt="ISRL Logo" />}
            >
            
              <div className=" text-[30px] font-semibold text-white">
                {timelineElements[2].title}
              </div>
              <div className=" text-xl text-gray-500 font-semibold mb-2">
                {timelineElements[2].location}
              </div>

              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[2].descriptionLine1}</div>
              </div>
              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[2].descriptionLine2}</div>
              </div>
              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[2].descriptionLine3}</div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="text-white"
              key={timelineElements[3].key}
              date={timelineElements[3].date}
              dateClassName="date text-white"
              iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
              icon={<img src={isrlIcon} className="lg:w-10 w-7 ml-1 mt-1 flex lg:ml-2.5 lg:mt-2.5" alt="ISRL Logo" />}
            >
            
              <div className=" text-[30px] font-semibold text-white">
                {timelineElements[3].title}
              </div>
              <div className=" text-xl text-gray-500 font-semibold mb-2">
                {timelineElements[3].location}
              </div>

              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[3].descriptionLine1}</div>
              </div>
              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[3].descriptionLine2}</div>
              </div>
              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[3].descriptionLine3}</div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="text-white"
              key={timelineElements[4].key}
              date={timelineElements[4].date}
              dateClassName="date text-white"
              iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
              icon={<img src={gdscIcon} className="lg:w-10 flex lg:ml-2.5 lg:mt-4 mt-3 ml-1.5 w-7" alt="ISRL Logo" />}
              >
            
              <div className=" text-[30px] font-semibold text-white">
                {timelineElements[4].title}
              </div>
              <div className=" text-xl text-gray-500 font-semibold mb-2">
                {timelineElements[4].location}
              </div>

              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[4].descriptionLine1}</div>
              </div>
              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[4].descriptionLine2}</div>
              </div>
              <div className="flex">
                <div className="mt-1 mr-2">
                  <FaCircle className="w-2" />
                </div>
                <div>{timelineElements[4].descriptionLine3}</div>
              </div>
            </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
