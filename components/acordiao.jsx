import React, { useEffect, useState, useReducer } from "react";

function Acordiao({ nome, objeto, tipo }) {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <>
      <div class="tabs">
        <div class="tab ">
          <input type="checkbox" class="aaa" id="chck1" checked={isOpen} />
          {tipo != 1 ? (
            <label
              class="tab-label flex justify-between flex-center"
              for="chck1"         onClick={() => setIsOpen(!isOpen)}

            >
              <h1 className="text-white font-bold pl-9 text-3xl pt-5">
                {nome}
              </h1>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                fill="none"
                color="#e5e7ebFF"
                viewBox="0 0 50 50"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
          ) : (
            <div>            
              
              <label
            class="tab-label flex justify-between flex-center"
            for="chck1"  onClick={() => setIsOpen(!isOpen)}
          >
            <h6 className="text-white  text-center font-bold pl-2">
              Produtos
            </h6>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              color="#e5e7ebFF"
              viewBox="0 0 50 50"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </label> </div>
          )}
              <div style={{  maxHeight:  isOpen ?"100vh" : "0vh"}} class="tab-content">{objeto}</div>
        </div>
      </div>
    </>
  );
}

export default Acordiao;
