import React from 'react';
import './Sample.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {sampleAction} from './../../actions/index';

class Sample extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div>
                Hello World
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({sampleAction}, dispatch);
}

function mapStateToProps(state){
    return {
        sample: state.sample
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);