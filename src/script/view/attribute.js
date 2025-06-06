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
    todoBodyContainer: {
      parentElement: "#todoContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoBodyContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    todoInfoContainer: {
      parentElement: "#todoBodyContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoInfoContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    todoDueDateContainer: {
      parentElement: "#todoInfoContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoDueDateContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    todoDueDate: {
      parentElement: "#todoDueDateContainer",
      newElement: "p",
      elementAttribute: {
        class: "todoDueDate",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    todoPriorityContainer: {
      parentElement: "#todoInfoContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoPriorityContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    todoPriority: {
      parentElement: "#todoPriorityContainer",
      newElement: "p",
      elementAttribute: {
        class: "todoPriority",
      },
      dataText: "priority",
      uniqueParent: true,
      uniqueElement: true,
    },
    todoChecklistContainer: {
      parentElement: "#todoInfoContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoChecklistContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    todoChecklist: {
      parentElement: "#todoChecklistContainer",
      newElement: "input",
      elementAttribute: {
        type: "checkbox",
        class: "todoChecklist",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
  },
};
