import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {} from './../../actions/index';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="App">
            hi from App
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

function mapStateToProps(state){
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);