import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';

class FoodWaste extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Food Waste is a BIG problem'>
                        <div className='foodWasteContainer'>
                           
                            <h6>World-Wide Food Waste Statistics</h6>
                            <ul>
                                <li>Roughly 1/3 of food produced in the world for human consumption every year gets wasted.  That's 1.3 billion tons!</li>
                                <li>Every year, consumers in well-developed countries waste almost as much food (222 million tons) as the entire food production of sub-Saharan Africa (230 million tons).</li>
                                <li>Even if just 1/4 of the food currently wasted were saved, it could feed 870 million hungry people.</li>
                            </ul>
                            
                            <h6 className='text-center'>Getting food to our tables eats up 10% of the total U.S. energy budget, uses 50% of U.S. land <br /> and swallows 80% of freshwater consumed in the United States.</h6>
                            <h6>Food Waste Statistics</h6>
                            <img src='/assets/images/foodwasteimage.jpg' alt='Food Waste' width='375px' style={{ float: 'right' }} id="foodWasteStats" />
                            <p>1. Americans throw away over $165 BILLION of food each year.</p>
                            <p>2. 40% of food is wasted in America every year.</p>
                            <p>3. That equates to 35 million tons of food.</p>
                            <p>4. The average American household throws away $2,200 of food each year.</p>

                            <p>5. The average American throws away 300lbs of food each year.</p>
                            <p>6. More than 20lbs of food is wasted per person every month in the United States.</p>
                            <p>7. 20% of the food that Americans buy is never consumed.</p>
                            <p>8. 90% of food is thrown away too soon.</p>
                            <p>9. Food waste has grown by 204% in America since 1960 and 50% since 1990.</p>
                            <p>10. Reducing food waste by just 15% would be enough to feed more than 25 million Americans every year.</p>

                        </div>

                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default FoodWaste;