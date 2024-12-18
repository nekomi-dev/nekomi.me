const DefaultPreset = {
  toast: {
    root: "toast",
    message: "toast__message",
    container: "toast__container",
    content: "toast__content",
    icon: "toast__icon",
    text: "toast__text",
    summary: "toast__summary",
    detail: "toast__detail",
    buttonContainer: "toast__buttonContainer",
    button: "toast__buttonContainer-button",
    closeButton: "toast__buttonContainer-closeButton",
    buttonIcon: "toast__buttonContainer-buttonIcon",
    transition: {
      name: "slideRight-fade",
    },
  },
  button: {
    root: "prime__button",
    icon: "prime__button_icon",
    label: "prime__button_label",
  },
  image: {
    mask: "dialogImg",
    toolbar: "dialogImg__toolbar",
    rotaterightbutton: "dialogImg__action",
    rotateleftbutton: "dialogImg__action",
    zoomoutbutton: "dialogImg__action",
    zoominbutton: "dialogImg__action",
    closebutton: "dialogImg__action",
    previewcontainer: "dialogImg__img-container",
    preview: "dialogImg__img",
    button: "dialogImg__button",
  },
  paginator: {
    root: "paginator",
    pages: "paginator__pages",
    firstpagebutton: "paginator__button",
    previouspagebutton: "paginator__button",
    nextpagebutton: "paginator__button",
    lastpagebutton: "paginator__button",
    pagebutton: ({ context }) => ({
      class: [
        "paginator__pages-item",
        {
          "paginator__pages-item--active": context.active,
        },
      ],
    }),
  },
  multiselect: {
    root: "multiselect",
    trigger: "multiselect__trigger",
    panel: "multiselect__panel",
    header: "multiselect__header",
    filtercontainer: "multiselect__filter-container",
    closebutton: "multiselect__close-button",
    filterinput: "multiselect__filter-input",
    item: "multiselect__item",
    list: "multiselect__list",
  },
};
export default DefaultPreset;
