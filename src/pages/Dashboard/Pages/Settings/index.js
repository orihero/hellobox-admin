import React from 'react'
import { IconContainerr } from '../Patners/Addnew/style'
import {
    Container,
    SettingContainer,
    IconContainer,
    IconBox,
    Input,
} from "./style"

function SettingsPage() {
    return (
        <Container>
            <SettingContainer>
                <IconContainerr>
                    <IconBox><i class='bx bxl-facebook'></i></IconBox>
                    <Input placeholder="facebook" />
                </IconContainerr>
                <IconContainerr>
                    <IconBox><i class='bx bxl-instagram-alt'></i></IconBox>
                    <Input placeholder="instagram" />
                </IconContainerr>
                <IconContainerr>
                    <IconBox><i class='bx bxl-telegram' ></i></IconBox>
                    <Input placeholder="telegram" />
                </IconContainerr>
                <IconContainerr>
                    <IconBox><i class='bx bxl-facebook'></i></IconBox>
                    <Input placeholder="gmail" />
                </IconContainerr>
                <IconContainerr>
                    <IconBox><i class='bx bxs-phone'></i></IconBox>
                    <Input placeholder="phone" />
                </IconContainerr>
                <IconContainerr>
                    <IconBox><i class='bx bx-globe'></i></IconBox>
                    <Input placeholder="url:" />
                </IconContainerr>
                <IconContainerr>
                    <IconBox><i class='bx bxs-phone-call'></i></IconBox>
                    <Input placeholder="call" />
                </IconContainerr>
            </SettingContainer>
        </Container>
    )
}

export default SettingsPage
