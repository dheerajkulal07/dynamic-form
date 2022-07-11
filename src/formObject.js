export const educationAbroad = {
  fields: [
    {
      id: "pot",
      label: "Purpose of Transfer",
      value: 2,
      mandatory: true,
      options: [
        {
          id: 1,
          title: "Medical Treatment Abroad",
        },
        {
          id: 2,
          title: "Education",
        },
      ],
      type: "select",
    },
    {
      id: "usage",
      label: "Final usage of funds by receiver",
      value: 2,
      mandatory: true,
      options: [
        {
          id: 1,
          title: "Accommodation",
        },
        {
          id: 2,
          title: "Travel",
        },
      ],
      type: "select",
    },
    {
      id: "usage",
      label: "Country where Ultimate receiver is provided",
      value: 2,
      mandatory: true,
      options: [
        {
          id: 1,
          title: "USA",
        },
        {
          id: 2,
          title: "CANADA",
        },
      ],
      type: "select",
    },
    {
      id: "sname",
      label: "Student Name",
      mandatory: true,
      placeholder: "Enter name",
      type: "text",
      onchange: "handleTextChanges",
    },
    {
      id: "sid",
      label: "Student ID",
      placeholder: "Enter Student ID",
      type: "text",
    },
    {
      id: "driving_license",
      label: "I confirm to have driving license.",
      type: "checkbox",
      value: true,
    },
    {
      id: "driving_license",
      label: "I confirm to have driving license.",
      type: "file",
      value: true,
    },
  ],
};
