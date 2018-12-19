import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';

import {} from './../actions/index';

import Sample from './sample/Sample';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Sample} />
                    </div>
                </BrowserRouter>
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