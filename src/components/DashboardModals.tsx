import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { Colors } from 'theme/Colors'
import { getTheme } from 'theme/themes'
import newPotatoImage from 'assets/potatoes/SUPER_HOT.svg'
import React, { useState } from 'react'
import ReactModal from 'react-modal'
import styled from '@emotion/styled'

const Modal = styled(ReactModal)`
    background-color: ${getTheme().background};
    color: ${getTheme().foreground};
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    font-weight: bold;
    border: solid 1px black;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 375px;
    height: 500px;
`

const Test = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const PotatoIcon = styled.img`
    width: 50%;
    height: auto;
`

const SubmitButton = styled.div`
    width: 35%;
    margin-bottom: 10%;
`

const CopyBox = styled.div`
    background-color: ${Colors.LightGray};
    border: solid 1px black;
    border-radius: 999px;
    font-weight: 1;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const CopyButton = styled.div`
    // width: 20%;
`

const OrContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Line = styled.hr`
    width: 30%;
`

ReactModal.setAppElement('body')

type inputProps = {
    modalName: string
    openText: string
}

export const DashboardModal = (values: inputProps) => {
    const { modalName, openText } = values

    const [showModal, setShowModal] = useState(true) //change to default to false

    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const createPotatoModal = () => {
        return (
            <Test>
                <PotatoIcon src={newPotatoImage} />
                <div>Congrats, you’ve created a charitato!</div>
                <div>Now it's time to send it</div>
                <CopyBox>
                    https://rec.charito.org/rec/id?q=...
                    <CopyButton>
                        <Button
                            buttonType={ButtonTypes.Primary}
                            buttonSize={ButtonSizes.Small}
                            text={'Copy'}
                            onClickHandler={(e: React.MouseEvent) => {
                                handleCloseModal()
                            }}
                        />    
                    </CopyButton>    
                </CopyBox>

                <OrContainer>
                    <Line/>
                    OR
                    <Line/>
                </OrContainer>

                <SubmitButton>
                    <Button
                        buttonType={ButtonTypes.Primary}
                        buttonSize={ButtonSizes.Small}
                        text={'Friends'}
                        onClickHandler={(e: React.MouseEvent) => {
                            handleCloseModal()
                        }}
                    />
                </SubmitButton>
            </Test>
        )
    }

    const SelectModal = (modalName: string) => {
        if (modalName === 'createPotatoModal') {
            return createPotatoModal()
        } else {
            return <div>Error: Modal not found</div>
        }
    }

    return (
        <div>
            <Button
                buttonType={ButtonTypes.Primary}
                buttonSize={ButtonSizes.Small}
                text={openText}
                onClickHandler={(e: React.MouseEvent) => {
                    handleOpenModal()
                }}
            />
            <Modal isOpen={showModal} contentLabel={modalName}>
                {SelectModal(modalName)}
            </Modal>
        </div>
    )
}
