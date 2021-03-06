import React, { useState } from "react";

const Accordion = ({ heading, content, tipo }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <div>
        <div
          className={ ( tipo ?  "text-lg " : "text-4xl ") + "font-bold text-white  p-5 tab-label flex justify-between flex-center"}
          onClick={() => setIsActive(!isActive)}
        >
          <h3 className="text-white">{heading}</h3>
          <span>{isActive ? "-" : "+"}</span>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </>
  );
};

export default Accordion;
