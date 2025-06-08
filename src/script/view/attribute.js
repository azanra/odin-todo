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
      newElement: "h2",
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
    todoDetailContainer: {
      parentElement: "#todoContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoDetailContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    todoDetailBtn: {
      parentElement: "#todoDetailContainer",
      newElement: "button",
      elementAttribute: {
        class: "todoDetailBtn",
      },
      textContent: "Detail",
      uniqueParent: true,
      uniqueElement: true,
    },
  },
  todoDetail: {
    todoDetailedInfoContainer: {
      parentElement: "#todoContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoDetailedInfoContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    todoDetailedDescContainer: {
      parentElement: "#todoDetailedInfoContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoDetailedDescContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    todoDetailedDescLabel: {
      parentElement: "#todoDetailedDescContainer",
      newElement: "label",
      elementAttribute: {
        class: "todoDetailedDescLabel",
      },
      textContent: "Description ",
      uniqueParent: true,
      uniqueElement: true,
    },
    todoDetailedDesc: {
      parentElement: "#todoDetailedDescContainer",
      newElement: "textarea",
      elementAttribute: {
        class: "todoDetailedDesc",
      },
      dataText: "description",
      uniqueParent: true,
      uniqueElement: true,
    },
    todoNoteContainer: {
      parentElement: "#todoDetailedInfoContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoNoteContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    todoNoteLabel: {
      parentElement: "#todoNoteContainer",
      newElement: "label",
      elementAttribute: {
        class: "todoNoteLabel",
      },
      textContent: "Note ",
      uniqueParent: true,
      uniqueElement: true,
    },
    todoNote: {
      parentElement: "#todoNoteContainer",
      newElement: "textarea",
      elementAttribute: {
        type: "text",
        class: "todoNote",
      },
      dataText: "note",
      uniqueParent: true,
      uniqueElement: true,
    },
    todoBtnContainer: {
      parentElement: "#todoDetailedInfoContainer",
      newElement: "div",
      elementAttribute: {
        class: "todoBtnContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    todoHideBtn: {
      parentElement: "#todoBtnContainer",
      newElement: "button",
      elementAttribute: {
        type: "button",
        class: "todoHideBtn",
      },
      textContent: "Hide",
      uniqueParent: true,
      uniqueElement: true,
    },
    todoDeleteBtn: {
      parentElement: "#todoBtnContainer",
      newElement: "button",
      elementAttribute: {
        type: "button",
        class: "todoDeleteBtn",
      },
      textContent: "Delete",
      uniqueParent: true,
      uniqueElement: true,
    },
  },
  todoSelectProject: {
    todoSelectProjectOption: {
      parentElement: "#projectSelect",
      newElement: "option",
      elementAttribute: {
        value: "",
      },
      dataText: "name",
      uniqueParent: false,
      uniqueElement: true,
    },
  },
};
