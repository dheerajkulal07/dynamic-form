import React from "react";
import CommonCheckbox from "./controls/CommonCheckbox";
import InputField from "./controls/InputField";
import DropDown from "./controls/DropDown";
import FileUploader from "./controls/FileUploader";
import { usePurpose } from "../context/PurposeContext";

const Element = (props) => {
  const {
    field: {
      type,
      id,
      label,
      placeholder,
      value,
      options,
      mandatory,
      onchange,
    },
    parentID,
  } = props;
  const {
    purposeState,
    actions: { setPurposeData },
    handleChange,
    customOnChange,
  } = usePurpose();

  switch (type) {
    case "text":
      return (
        <InputField
          id={id}
          label={mandatory ? label : `${label} (Optional)`}
          placeholder={placeholder}
          value={value ?? ""}
          onChange={(e) => {
            onchange
              ? customOnChange[onchange](id, e, parentID)
              : handleChange(id, e, parentID);
          }}
          style={{ width: "100%" }}
        />
      );
    case "select":
      return (
        <DropDown
          id={id}
          label={mandatory ? label : `${label} (Optional)`}
          placeholder={placeholder}
          value={value}
          options={options}
          onChange={(e) => handleChange(id, e, parentID)}
          style={{ width: "100%" }}
        />
      );
    case "checkbox":
      return (
        <CommonCheckbox
          id={id}
          label={label}
          checked={value}
          onChange={(e) => handleChange(id, e, parentID)}
        />
      );
    case "file":
      return (
        <FileUploader
          type="file"
          accept=".pdf,.tiff,.jpeg,.doc"
          onChange={handleChange}
        />
      );

    default:
      return null;
  }
};

export default Element;
