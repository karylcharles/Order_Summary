import React, { Component } from 'react';
import './OrderSummary.scss';
import hero from './images/illustration-hero.svg';
import musicIcon from './images/icon-music.svg';

class OrderSummary extends Component{
    render(){
        return(
            <div className="OrderSummary">
                <div className='OrderSummary-imgContainer'>
                    <img src={hero} alt="dancing to music"/>
                </div>
                <div className='OrderSummary-content'>
                    <h2 className='OrderSummary-content__title'>Order Summary</h2>
                    <p className='OrderSummary-content__subtext'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                    <div className='OrderSummary-content__purchase'>
                        <div className='OrderSummary-content__purchase-text'>
                            <img src={musicIcon} alt='music icon'/>
                            <div className='OrderSummary-content__purchase-text__year'>
                                <span className='OrderSummary-content__purchase-text__year-span-1'>Annual Plan</span>
                                <span className='OrderSummary-content__purchase-text__year-span-2'>$59.99/year</span>
                            </div>
                        </div>
                        <div className='OrderSummary-content__purchase-link'>
                            <a href='#'>Change</a>
                        </div>
                    </div>
                    <button className='OrderSummary-content__btn'>Proceed to Payment</button>
                    <div className='OrderSummary-content__link'>
                        <a href='#'>Cancel Order</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderSummary;