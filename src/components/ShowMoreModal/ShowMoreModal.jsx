import Modal from "react-modal";

Modal.setAppElement("#root");

const ShowMoreModal = ({ item, isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Show more"
      //   overlayClassName={styles.overlay}
    >
      <p></p>
      <button></button>
    </Modal>
  );
};
