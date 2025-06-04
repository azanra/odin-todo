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
      uniqueText: false,
    },
    headerContainer: {
      parentElement: "#projectContainer",
      newElement: "div",
      elementAttribute: {
        class: "headerContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
      uniqueText: false,
    },
    headerProject: {
      parentElement: "#headerContainer",
      newElement: "h1",
      elementAttribute: {
        class: "headerProject",
      },
      uniqueParent: true,
      uniqueElement: false,
      uniqueText: true,
    },
    detailContainer: {
      parentElement: "#projectContainer",
      newElement: "div",
      elementAttribute: {
        class: "detailContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
      uniqueText: false,
    },
    detailBtn: {
      parentElement: "#detailContainer",
      newElement: "button",
      elementAttribute: {
        type: "button",
        class: "detailBtn",
      },
      textContent: "Detail",
      uniqueParent: true,
      uniqueElement: true,
      uniqueText: false,
    },
  },
  todoCard: {
    todoContainer: {
      parentElement: "#projectContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
      uniqueText: false,
    },
    todoHeaderContainer: {
      parentElement: "#todoContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoHeaderContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
      uniqueText: false,
    },
  },
};
