export const reasonForRemittance = {
  fields: [
    {
      id: "pot",
      label: "Reason for Remittance",
      value: 2,
      mandatory: true,
      options: [
        {
          id: 1,
          title: "Self Accomodation",
          subPurposeCode: 0,
        },
        {
          id: 2,
          title: "Family accomodation",
          subPurposeCode: 0,
        },
        {
          id: 3,
          title: "Visa fee",
          subPurposeCode: 0,
        },
        {
          id: 4,
          title: "Travel agent payment",
          subPurposeCode: 0,
        },
        {
          id: 5,
          title: "Consultant or Employment Bureau",
          subPurposeCode: 0,
        },
        {
          id: 6,
          title: "Other",
          subPurposeCode: 1,
        },
      ],
      type: "select",

      subPurposes: [
        [
          {
            id: "browser_doc",
            label: "Browse File",
            type: "file",
            value: true,
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
            id: "declaratrion",
            label: "I confirm to declaration",
            type: "checkbox",
            value: true,
          },
        ],

        [
          {
            id: "test",
            label: "Other purpose",
            placeholder: "Enter purpose of remittance",
            type: "text",
          },
          {
            id: "browser_doc",
            label: "Browse File",
            type: "file",
            value: true,
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
            id: "declaratrion",
            label: "I confirm to declaration",
            type: "checkbox",
            value: true,
          },
        ],
      ],
    },
  ],
};
