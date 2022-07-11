import React, { useState } from "react";
import PurposeForm from "./PurposeForm";
import DropDown from "./components/controls/DropDown";
import { educationAbroad } from "./formObject";
import { reasonForRemittance } from "./formObjectSub";

export default function App() {
  const [value, setValue] = useState(1);
  const options = [
    {
      id: 1,
      title: "Employment Abroad",
      object: educationAbroad,
    },
    {
      id: 2,
      title: "Reason for Remittance",
      object: reasonForRemittance,
    },
  ];

  return (
    <>
      {" "}
      <DropDown
        id="app-type"
        label="Select Type"
        value={value}
        options={options}
        onChange={(e) => setValue(e.target.value)}
      />
      <PurposeForm purposeTransfer={options[value - 1]} />
    </>
  );
}
