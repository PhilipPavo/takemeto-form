import React, { Component } from 'react';
import {Navbar, NavbarGroup, NavbarHeading} from '@blueprintjs/core';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navbar className={'pt-fixed-top'}>
                    <NavbarGroup>
                        <NavbarHeading>Takemeto</NavbarHeading>
                    </NavbarGroup>

                    <NavbarGroup align="right">
                        <a href={'#'}>Есть вопросы по заказу?</a>
                    </NavbarGroup>
                </Navbar>
            </div>
        );
    }
}

export default Header;