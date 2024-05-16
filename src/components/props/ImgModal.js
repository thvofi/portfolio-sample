import React, { useState } from "react";
import Modal from "../Modal";

export default function ImgModal(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <img src={props.img} className="df-img" onClick={openModal}/>
            {modalOpen && (
                <Modal onClose={closeModal}>
                    <img src={props.img} className="modal-img" />
                </Modal>
            )}
        </div>
    );
}
