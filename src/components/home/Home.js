import React from 'react';
import './Home.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getCatImages, getCatFacts, createCatTiles, toggleFavoriteTile} from './../../actions/index';
import CatTile from './../tiles/CatTile'

class Sample extends React.Component {
    constructor() {
        super();
        this.state = {
            alphaSortMode: 'default',
            viewFilter: 'all',
            viewAmount: 'all',
            domCatTiles: [],
            showSingleCount: 0,
        }

        this.changeAlphaSortMode = this.changeAlphaSortMode.bind(this);
        this.changeViewFilter = this.changeViewFilter.bind(this);
        this.arrangeCatTiles = this.arrangeCatTiles.bind(this);
        this.changeViewAmount = this.changeViewAmount.bind(this);
    }
    componentDidMount() {
        const that = this;
        this.props.getCatImages().then(() => {
            this.props.getCatFacts().then(() => {
                that.props.createCatTiles()
                that.arrangeCatTiles()
            })
        })
    }
    toggleFavoriteTile(id) {
        this.props.toggleFavoriteTile(id)
        this.arrangeCatTiles()
    }
    arrangeCatTiles() {
        const that = this;
        let result = this.props.cat.catTiles;
        if (this.state.viewFilter === "favorites") {
            result = result.filter(elem => elem.favorite)
        }
        switch (this.state.alphaSortMode) {
            case 'default':
                this.setState({
                    domCatTiles: result.map((elem, idx) => {
                        return (
                            <CatTile 
                                id={elem.id}
                                favorite={elem.favorite}
                                clickListener={() => {that.toggleFavoriteTile(elem.id)}}
                                image={elem.image}
                                fact={elem.fact}
                                key={idx} />
                        )
                    })
                })
                break;
            case 'az':
                const azSortedCatTiles = result.sort((a,b) => {
                    const aLastWord = a.fact.split(" ").splice(-1)[0]
                    const bLastWord = b.fact.split(" ").splice(-1)[0]
                    if (aLastWord > bLastWord) return 1;
                    if (aLastWord < bLastWord) return -1;
                    return 0
                })
                this.setState({
                    domCatTiles: azSortedCatTiles.map((elem, idx) => {
                        return (
                            <CatTile 
                                id={elem.id}
                                favorite={elem.favorite}
                                clickListener={() => {that.toggleFavoriteTile(elem.id)}}
                                image={elem.image}
                                fact={elem.fact}
                                key={idx} />
                        )
                    })
                })
                break;
            case 'za':
                const zaSortedCatTiles = result.sort((a,b) => {
                    const aLastWord = a.fact.split(" ").splice(-1)[0]
                    const bLastWord = b.fact.split(" ").splice(-1)[0]
                    if (aLastWord > bLastWord) return -1;
                    if (aLastWord < bLastWord) return 1;
                    return 0
                })
                this.setState({
                    domCatTiles: zaSortedCatTiles.map((elem, idx) => {
                        return (
                            <CatTile 
                                id={elem.id}
                                favorite={elem.favorite}
                                clickListener={() => {that.toggleFavoriteTile(elem.id)}}
                                image={elem.image}
                                fact={elem.fact}
                                key={idx} />
                        )
                    })
                })
                break;
            default:
                break;
        }
    }
    changeAlphaSortMode(e) {
        this.setState({
            alphaSortMode: e.target.value
        }, () => {
            this.arrangeCatTiles()
        })
    }
    changeViewFilter(e) {
        this.setState({
            viewFilter: e.target.value
        }, () => {
            this.arrangeCatTiles()
        })
    }
    changeViewAmount(e) {
        this.setState({
            viewAmount: e.target.value
        })
    }
    render() {
        return (
            <div className="home">
                <div className="home-options">
                    <select id="home-options-alphasort" value={this.state.alphaSortMode} onChange={this.changeAlphaSortMode}>
                        <option value="" disabled>Sort By</option>
                        <option value="default">None</option>
                        <option value="az">A to Z</option>
                        <option value="za">Z to A</option>
                    </select>
                    <select id="home-options-viewfilter" value={this.state.viewFilter} onChange={this.changeViewFilter}>
                        <option value="" disabled>View</option>
                        <option value="all">All</option>
                        <option value="favorites">Favorites</option>
                    </select>
                    <select id="home-options-viewAmount" value={this.state.viewAmount} onChange={this.changeViewAmount}>
                        <option value="" disabled>Amount</option>
                        <option value="all">All</option>
                        <option value="1">One</option>
                    </select>
                </div>
                <div className="home-controls" style={{display: this.state.viewAmount === "all" ? "none" : "block"}}>
                    <button>Prev</button>
                    <button>Next</button>
                </div>
                <div className="home-cats">
                    {this.state.domCatTiles}
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCatImages, getCatFacts, createCatTiles, toggleFavoriteTile}, dispatch);
}

function mapStateToProps(state){
    return {
        cat: state.cat
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);