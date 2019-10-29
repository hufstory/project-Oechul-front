import React, {Component} from 'react';
<<<<<<< HEAD
import style from './Footer.scss';
=======
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
>>>>>>> woongbi

class Footer extends Component {
    render() {
        return (
<<<<<<< HEAD
            <footer className="footer-container">
                <div>
                    Footer
=======
            <FooterComponent id="footer">
                <div>
                Footer
>>>>>>> woongbi
                </div>
                <a href="https://www.facebook.com/storyhufs/"> hufstory facebook </a>
                |
                <a href="https://www.facebook.com/storyhufs/"> hufstory facebook </a>
                |
                <a href="https://www.facebook.com/storyhufs/"> hufstory facebook </a>
                <p> Copyright © hufstory </p>
<<<<<<< HEAD
            </footer>
=======
            </FooterComponent>
>>>>>>> woongbi
        );
    }
}

export default Footer;