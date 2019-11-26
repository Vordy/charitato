import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { getTheme } from 'theme/themes'
import newPotatoImage from 'assets/potatoes/FRESH.svg'
import React, { useState } from 'react'
import ReactModal from 'react-modal'
import styled from '@emotion/styled'

const Modal = styled(ReactModal)`
    background-color: ${getTheme().background};
    color: ${getTheme().foreground};
    border: solid 1px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
                <img src={newPotatoImage} />

                <Button
                    buttonType={ButtonTypes.Primary}
                    buttonSize={ButtonSizes.Small}
                    text={'Cancel'}
                    onClickHandler={(e: React.MouseEvent) => {
                        handleCloseModal()
                    }}
                />
            </Modal>
        </div>
    )
}
