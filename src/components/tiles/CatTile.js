import React from 'react';
import './CatTile.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {} from './../../actions/index';


class CatTile extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div onClick={this.props.clickListener} className="cattile" style={{border: this.props.favorite ? '5px solid green' : '1px solid black'}}>
                <img src={this.props.image} alt="" />
                <p>{this.props.fact}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(CatTile);