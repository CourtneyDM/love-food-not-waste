import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';
import './FoodWaste.css';

export class FoodWaste extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Food Waste is a BIG problem'>
                        <div className='foodWasteContainer'>

                            <h5 className='stats'>The World-Wide Food Waste Problem</h5>
                            <ul className='statList'>
                                <li>Roughly 1/3 of food produced in the world for human consumption every year gets wasted.  That's 1.3 billion tons!</li>
                                <li>Every year, consumers in well-developed countries waste almost as much food (222 million tons) as the entire food production of sub-Saharan Africa (230 million tons).</li>
                                <li>Even if just 1/4 of the food currently wasted were saved, it could feed 870 million hungry people.</li>
                            </ul>

                            <h5 className='text-center' id='quote'>Getting food to our tables eats up 10% of the total U.S. energy budget, uses 50% of U.S. land <br /> and swallows 80% of freshwater consumed in the United States...and yet, 40% of it is wasted.</h5>
                            <h5 className='stats'>US Food Waste</h5>
                            <img src='/assets/images/foodwasteimage.jpg' alt='Food Waste' width='375px' style={ { float: 'right' } } id="foodWasteStats" />
                            <ul className='statList'>
                                <li>Americans throw away over $165 BILLION of food each year.</li>
                                <li>40% of food is wasted in America every year.</li>
                                <li>That equates to 35 million tons of food.</li>
                                <li>The average American household throws away $2,200 of food each year.</li>
                                <li>The average American throws away 300lbs of food each year.</li>
                                <li>More than 20lbs of food is wasted per person every month in the United States.</li>
                                <li>20% of the food that Americans buy is never consumed.</li>
                                <li>90% of food is thrown away too soon.</li>
                                <li>Food waste has grown by 204% in America since 1960 and 50% since 1990.</li>
                                <li>Reducing food waste by just 15% would be enough to feed more than 25 million Americans every year.</li>
                            </ul>

                            <p className='text-center' id='whatWaste'><b>What can you do?</b> Check out the resources on this site &amp; get to work tracking your food use.  Find recipes for what you have or locations to donate items.</p>
                        </div>

                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default FoodWaste;
