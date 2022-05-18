import React from "react";
import ReactDOM from "react-dom";

const DropdownTime = () => {
  return (
    <select>
      <option selected value="twentyfourhours">Last 24 hours</option>
      <option value="sevendays">Last 7 days</option>
      <option value="fourteendays">Last 14 days</option>
      <option value="thirtydays">Last 30 days</option>
      <option value="threemonths">Last 3 months</option>
      <option value="sixmonths">Last 6 months</option>
      <option value="year">Last year</option>
    </select>
  );
}
//DropdownMenu!
export default DropdownTime;
