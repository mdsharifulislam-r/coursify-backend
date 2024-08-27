import React from "react";
import SearchBar from "./SearchBar";

export default function TopSecton() {
  return (
    <div className="flex  relative justify-between z-[1] place-items-center">
      <h1>Showing 1-9 Of 62 Courses</h1>
      <div>
        <SearchBar/>
      </div>
    </div>
  );
}
