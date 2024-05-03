import React from "react";

type Props = {};

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-start">
      <h3>sidebar</h3>
      <ul className="">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </div>
  );
}
