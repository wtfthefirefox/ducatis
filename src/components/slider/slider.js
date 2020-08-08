import React, { Component } from 'react';
import Description from '../description';
import {connect} from 'react-redux';
import {loadItems} from '../../actions';
import {prevSlide, nextSlide} from '../../actions';
import WithService from '../hoc';

import './slider.scss';

class Slider extends Component {

    componentDidMount() {
        const {service, loadItems} = this.props;
        service.getItems()
            .then(res => loadItems(res));
    }

    render() {

        if (this.props.loading) {
            return <div>Loading...</div>
        }

        const {prevSlide, nextSlide, items, activeSlide} = this.props;

        return (
            <div className="wrapper">
                <img src={require('./monster.svg')} alt="monster" className="monster-img"/>
                <span className="number">{items[activeSlide].number}</span>
                <div className="btn__wrapper">
                    <button type="button" className="btn btn-prev" onClick={() => prevSlide(2)}/>
                    <button type="button" className="btn btn-next" onClick={() => nextSlide(2)}/>
                </div>
                <Description/>
            </div>
        )
    }
}

const mapStateToProps = ({items, activeSlide, loading}) => {
    return {
        items,
        activeSlide,
        loading
    }
}

const mapDispatchToProps = {
    prevSlide, 
    nextSlide,
    loadItems
};

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(Slider));