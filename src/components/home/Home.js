import React from 'react';
import './Home.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getCatImages} from './../../actions/index';

class Sample extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div id="home">
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCatImages}, dispatch);
}

function mapStateToProps(state){
    return {
        cat: state.cat
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);