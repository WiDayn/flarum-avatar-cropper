import Modal from 'flarum/common/components/Modal';

export default class ModalWeight extends Modal {
  // True by default, dictates whether the modal can be dismissed by clicking on the background or in the top right corner.
  static isDismissible = true;

  className() {
    // Custom CSS classes to apply to the modal
    return 'custom-modal-class';
  }

  title() {
    // Content to show in the modal's title bar
    return <p>Custom Modal</p>;
  }

  content() {
    // Content to show in the modal's body
    return <p>Hello World!</p>;
  }

  onsubmit() {
    // If your modal contains a form, you can add form processing logic here.
  }
}
