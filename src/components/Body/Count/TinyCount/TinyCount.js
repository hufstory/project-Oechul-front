import React, {Component} from 'react';
import './tiny_count.scss';

class tiny_count extends Component{

    render() {

        return(
            <div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}


export default tiny_count;


