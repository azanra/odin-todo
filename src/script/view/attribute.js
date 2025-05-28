export const attribute = {
  projectCard: {
    projectContainer: {
      parentElement: ".projectSection",
      newElement: "div",
      elementAttribute: {
        class: "projectContainer",
      },
      uniqueParent: false,
      uniqueElement: true,
    },
    headerContainer: {
      parentElement: "#projectContainer",
      newElement: "div",
      elementAttribute: {
        class: "headerContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
  },
};
