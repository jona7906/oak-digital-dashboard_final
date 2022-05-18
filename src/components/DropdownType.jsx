import React from "react";
import ReactDOM from "react-dom";

const DropdownType = () => {
  return (
    <select>
      <option value="status">By status</option>
      <option value="type">By type</option>
      <option value="hostname">By hostname</option>
      <option value="reponsetime">By reponse time</option>
    </select>
  );
}
//DropdownMenu!
export default DropdownType;
