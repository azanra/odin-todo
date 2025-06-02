export const initialData = {
  todo: {
    1: {
      id: 1,
      title: "Finish homework",
      description: "Math homework page 210, number one to five",
      priority: "High",
      note: "Finish it ASAP",
      checked: false,
      isOpen: false,
    },
    2: {
      id: 2,
      title: "Clean dish",
      description: "Clean all leftover dish from yesterday",
      priority: "Medium",
      note: "",
      checked: false,
      isOpen: false,
    },
    3: {
      id: 3,
      title: "Laundry",
      description: "Insert all the clothes into washing machine",
      priority: "low",
      note: "Use proper detergent",
      checked: false,
      isOpen: false,
    },
  },
  project: {
    4: {
      id: 4,
      name: "default",
      list: [1, 2],
    },
    5: {
      id: 5,
      name: "home",
      list: [3],
    },
  },
};
