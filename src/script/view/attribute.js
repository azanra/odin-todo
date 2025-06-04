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
    headerProject: {
      parentElement: "#headerContainer",
      newElement: "h1",
      elementAttribute: {
        class: "headerProject",
      },
      dataText: "name",
      uniqueParent: true,
      uniqueElement: false,
    },
    detailContainer: {
      parentElement: "#projectContainer",
      newElement: "div",
      elementAttribute: {
        class: "detailContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
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
    },
    todoHeaderContainer: {
      parentElement: "#todoContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoHeaderContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    todoHeader: {
      parentElement: "#todoHeaderContainer",
      newElement: "h1",
      elementAttribute: {
        class: "todoHeader",
      },
      dataText: "title",
      uniqueParent: true,
      uniqueElement: true,
    },
  },
};
