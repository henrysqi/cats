import React from 'react';
import './Home.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getCatImages, getCatFacts, createCatTiles} from './../../actions/index';
import CatTile from './../tiles/CatTile'

class Sample extends React.Component {
    constructor() {
        super();
        this.state = {
            alphaSortMode: 'none',
            viewFilter: 'default',
            domCatTiles: []
        }

        this.changeAlphaSortMode = this.changeAlphaSortMode.bind(this);
        this.changeViewFilter = this.changeViewFilter.bind(this);
        this.renderCatTiles = this.renderCatTiles.bind(this);
    }
    componentDidMount() {
        const that = this;
        this.props.getCatImages().then(() => {
            this.props.getCatFacts().then(() => {
                this.renderCatTiles()
            })
        })
    }
    renderCatTiles() {
        this.props.createCatTiles()
        this.props.cat.catTiles
        this.setState({
            domCatTiles: this.props.cat.catTiles.map((elem, idx) => {
                return (
                    <CatTile image={elem.image} fact={elem.fact}/>
                )
            })
        })
    }
    changeAlphaSortMode(e) {
        this.setState({
            alphaSortMode: e.target.value
        })
    }
    changeViewFilter(e) {
        this.setState({
            viewFilter: e.target.value
        })
    }
    render() {
        return (
            <div className="home">
                <div className="home-options">
                    <select id="home-options-alphasort" value={this.state.alphaSortMode} onChange={this.changeAlphaSortMode}>
                        <option value="" disabled>Sort By</option>
                        <option value="none">None</option>
                        <option value="az">A to Z</option>
                        <option value="za">Z to A</option>
                    </select>
                    <select id="home-options-viewfilter" value={this.state.viewFilter} onChange={this.changeViewFilter}>
                        <option value="" disabled>View</option>
                        <option value="all">All</option>
                        <option value="favorites">Favorites</option>
                    </select>
                </div>
                <div className="home-cats">
                    {this.state.domCatTiles}
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCatImages, getCatFacts, createCatTiles}, dispatch);
}

function mapStateToProps(state){
    return {
        cat: state.cat
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);