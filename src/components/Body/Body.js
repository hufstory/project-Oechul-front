import React, {Component} from 'react';

import Main from './Main';
import Count from './Count';
import Intro from './Intro';
// import './Body.scss';

class Body extends Component {
    render() {
        return (
            <>
                <Main/>
                <Count/>
                <br/>
                <Intro/>
            </>
        );
    }
}

export default Body;