import React, { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
import styled from '@emotion/styled'

const Modal = styled(ReactModal)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 600px;
`

ReactModal.setAppElement('body')

export const CreatePotatoInterface = () => {
    const [showModal, setShowModal] = useState(true) //change to default to false

    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false) 
    }

    return (
        <div>
            <button onClick={handleOpenModal}>Trigger Modal</button>
            <Modal isOpen={showModal} contentLabel="Minimal Modal Example">
                <button onClick={handleCloseModal}>Close Modal</button>
            </Modal>
        </div>
    )
}
