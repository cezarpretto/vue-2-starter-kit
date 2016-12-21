const ModalService = {
  show(modalId) {
    $(`#${modalId}`).modal('show');
  },

  hide(modalId) {
    $(`#${modalId}`).modal('hide');
  }
};

export default ModalService;
