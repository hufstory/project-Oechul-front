import React, {Component} from 'react';
import styled from 'styled-components'

const FooterComponent = styled.footer`
    color: white;
    background-color: black;
    text-align: center;
    height: 100px;
    padding: 10px;

    a {
        text-decoration: none;
        color: ${props => props.theme.Blue200}
        &:hover {
            color: white;
        }
    }
`

class Footer extends Component {
    render() {
        return (
            <FooterComponent id="footer">
                <div>
                Footer
                </div>
                <a href="https://www.facebook.com/storyhufs/"> hufstory facebook </a>
                |
                <a href="https://www.facebook.com/storyhufs/"> hufstory facebook </a>
                |
                <a href="https://www.facebook.com/storyhufs/"> hufstory facebook </a>
                <p> Copyright © hufstory </p>

            </FooterComponent>
        );
    }
}

export default Footer;