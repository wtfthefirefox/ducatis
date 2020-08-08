import React from 'react';
import {connect} from 'react-redux';
import {changeActiveSlide} from '../../actions';

import './description.scss';

const Description = ({activeSlide, items, changeActiveSlide}) => {
    
    const {Displacement, DryWeight, HorsePower, Safety, SeatHeight, Torque, srcImg} = items[activeSlide];

    let colorList = items.map((item, i) => {
        let defaultName = 'color__item color__';
        let strClass = `${defaultName}${item.color}`; 
            
        if (items[activeSlide] === item) {
            return <li className={`${strClass} color__active`} key={i} onClick={() => changeActiveSlide(i)}/>
        }
        if (i !== 0 || i === items.length - 1) {
            return <li className={`${strClass} color__active-left`} key={i} onClick={() => changeActiveSlide(i)}/>
        }

        return <li className={strClass} key={i} onClick={() => changeActiveSlide(i)}/>
    });
    
    return (
        <div className="description">
            <div className="description__img-wrapper">
                <img className="description__img" src={require(`${srcImg}`)} alt="motor-bike"/>
            </div>   
            <ul className="description__list-info">
                <li className="description__item">
                    <span className="description__item-tittle">Displacement</span>
                    <span className="description__item-value">{Displacement}</span>
                </li>
                <li className="description__item">
                    <span className="description__item-tittle">Horse Power</span>
                    <span className="description__item-value">{HorsePower}</span>
                </li>
                <li className="description__item">
                    <span className="description__item-tittle">Torque</span>
                    <span className="description__item-value">{Torque}</span>
                </li>
                <li className="description__item">
                    <span className="description__item-tittle">Dry Weight</span>
                    <span className="description__item-value">{DryWeight}</span>
                </li>
                <li className="description__item">
                    <span className="description__item-tittle">Seat Height</span>
                    <span className="description__item-value">{SeatHeight}</span>
                </li>
                <li className="description__item">
                    <span className="description__item-tittle">Safety</span>
                    <span className="description__item-value">{Safety}</span>
                </li>
            </ul>
            <ul className="description__list-color">
                {colorList}
            </ul>
            <div className="description__italianno">
                <span className="italianno__item lead-first">Fresh vibes.</span>
                <span className="italianno__item lead-second">Sporty soul.</span>
            </div>
        </div>
    )
}

const mapStateToProps = ({items, activeSlide, loading}) => {
    return {
        items,
        activeSlide,
        loading
    }
}

const mapDispatchToProps = {
    changeActiveSlide
}

export default connect(mapStateToProps, mapDispatchToProps)(Description);