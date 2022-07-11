import React, { useReducer, createContext, useContext } from "react";

const initialState = {
  fields: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_STATE": {
      return {
        ...state,
        [payload.key]: payload.value,
      };
    }
    case "RESET_STATE": {
      return initialState;
    }
    default: {
      throw new Error("Didn't dispatch a message");
    }
  }
};

const PurposeContext = createContext(initialState);

const PurposeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPurposeData = (key, newValue) => {
    dispatch({
      type: "SET_STATE",
      payload: {
        key,
        value: newValue,
      },
    });
  };

  const updatePurposeData = (key, newValue) => {
    dispatch({
      type: "UPDATE_STATE",
      payload: {
        key,
        value: newValue,
      },
    });
  };

  const resetPurposeData = () => {
    dispatch({
      type: "RESET_STATE",
    });
  };

  const handleChange = (id, event, parentID) => {
    const newElements = { ...state };
    newElements.fields.forEach((field) => {
      if (id === field.id) {
        switch (field.type) {
          case "checkbox":
            field["value"] = event.target.checked;
            break;
          case "select":
            field["value"] = event.target.value;
            if (field.options[event.target.value - 1].subPurposeCode >= 0) {
              field.subPurposeList =
                field.subPurposes[
                  field.options[event.target.value - 1].subPurposeCode
                ];
            }
            break;

          default:
            field["value"] = event.target.value;
            break;
        }
      } else if (parentID === field.id) {
        const tempSubPurposes = getSubPurposes(field);

        tempSubPurposes.forEach((subfield) => {
          if (subfield.id === id) {
            switch (subfield.type) {
              case "checkbox":
                subfield["value"] = event.target.checked;
                break;
              default:
                subfield["value"] = event.target.value;
                break;
            }
          }
        });
        field.subPurposeList = tempSubPurposes;
      }
      setPurposeData("fields", newElements.fields);
    });
  };

  const handleTextChanges = (id, event) => {
    handleChange(id, event);
    console.log("Custom handleChange");
  };

  const getSubPurposes = (field, i) => {
    let subPurposeList = [];
    if (field.subPurposeList && field.subPurposeList[field.value - 1]) {
      subPurposeList = field.subPurposeList;
    } else {
      subPurposeList =
        field.subPurposes[field.options[field.value - 1].subPurposeCode];
    }

    return subPurposeList;
  };

  const getFieldValues = (fields) => {
    const values = fields.reduce((acc, value, index) => {
      acc[value.id] = getValue(value);
      if (value.subPurposes && value.subPurposes.length > 0) {
        const subList = getSubPurposes(value);
        const subListValue = getFieldValues(subList);
        acc = { ...acc, ...subListValue };
      }
      return acc;
    }, {});
    return values;
  };

  const getValue = (field) => {
    switch (field.type) {
      case "select":
        return field.options[field.value - 1].title;
      default:
        return field.value;
    }
  };

  const valueProvider = {
    purposeState: state,
    purposeDispatch: dispatch,
    actions: {
      setPurposeData,
      updatePurposeData,
      resetPurposeData,
    },
    handleChange,
    customOnChange: {
      handleTextChanges,
    },
    getFieldValues,
  };

  return (
    <PurposeContext.Provider value={valueProvider}>
      {children}
    </PurposeContext.Provider>
  );
};

const usePurpose = () => {
  const context = useContext(PurposeContext);
  if (context === undefined) {
    throw new Error("usePurpose must be within the PurposeProvider");
  }
  return context;
};

export { PurposeProvider, usePurpose };
