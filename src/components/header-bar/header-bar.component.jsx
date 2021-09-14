import React from 'react';

import {
    HeaderBarContainer,
    LogoContainer,
    ImageContainer,
    StyleDiv,
    ButtonsContainer,
    ThemeButtonContainer,
    ThemeButton,
    UserIconContainer,
    UserIcon
} from './header-bar.styles';

const HeaderBar = () => {

    return (
        <HeaderBarContainer>
            <LogoContainer>
                <ImageContainer />
                <StyleDiv />
            </LogoContainer>
            <ButtonsContainer>
                <ThemeButtonContainer>
                     <ThemeButton/>
                </ThemeButtonContainer>
                <UserIconContainer>
                    <UserIcon/>
                </UserIconContainer>
            </ButtonsContainer>
        </HeaderBarContainer>
    );

}

export default HeaderBar;