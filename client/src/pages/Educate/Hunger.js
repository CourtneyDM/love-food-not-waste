import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';
import './FoodWaste.css'

class Hunger extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Hunger is an Even BIGGER Problem'>
                        <div className='hungerContainer'>

                            <img src='/assets/images/oneinsix.jpg' id='oneInSix' alt='1 in 6 People are Hungry' />
                            <h3 className='text-center'>1 in 6 People are Hungry</h3>
                            <ul className='statList'>
                                <li>More than 1 in 5 children is at risk of hunger.  That statistic jumps to 1 in 3 in among African-Americans and Latinos.</li>
                                <li>49 million Americans struggle to put food on the table.</li>
                                <li>Texas has a higher food insecurity rate than the national average - 18.0% of Texans experience food insecurity compared to 14.6% of Americans on average.  Food insecurity means a lack of access at times to enough food for all household members.</li>
                            </ul>
                            <h6 className='text-center' id="foodInsecurityText">Food Insecurity in North Texas Counties</h6>
                            <table id="foodInsecurity">
                                <tr>
                                    <th>County</th>
                                    <th>Food-Insecure People</th>
                                    <th>Percentage</th>
                                </tr>
                                <tr>
                                    <td>Collin</td>
                                    <td>137,820</td>
                                    <td>16.0%</td>
                                </tr>
                                <tr>
                                    <td>Dallas</td>
                                    <td>451,950</td>
                                    <td>18.2%</td>
                                </tr>
                                <tr>
                                    <td>Delta</td>
                                    <td>1,110</td>
                                    <td>21.2%</td>
                                </tr>
                                <tr>
                                    <td>Denton</td>
                                    <td>116,680</td>
                                    <td>15.9%</td>
                                </tr>
                                <tr>
                                    <td>Ellis</td>
                                    <td>23,950</td>
                                    <td>15.9%</td>
                                </tr>
                                <tr>
                                    <td>Fannin</td>
                                    <td>6,450</td>
                                    <td>19.1%</td>
                                </tr>
                                <tr>
                                    <td>Grayson</td>
                                    <td>23,370</td>
                                    <td>19.0%</td>
                                </tr>
                                <tr>
                                    <td>Hopkins</td>
                                    <td>6,770</td>
                                    <td>19.9%</td>
                                </tr>
                                <tr>
                                    <td>Hunt</td>
                                    <td>17,260</td>
                                    <td>19.6%</td>
                                </tr>
                                <tr>
                                    <td>Kaufman</td>
                                    <td>18,000</td>
                                    <td>16.5%</td>
                                </tr>
                                <tr>
                                    <td>Lamar</td>
                                    <td>10,970</td>
                                    <td>22.1%</td>
                                </tr>
                                <tr>
                                    <td>Navarro</td>
                                    <td>9,030</td>
                                    <td>18.8%</td>
                                </tr>
                                <tr>
                                    <td>Rockwell</td>
                                    <td>11,620</td>
                                    <td>13.6%</td>
                                </tr>

                            </table>


<p className='text-center'><b>What can you do?</b> Check out the resources on this site &amp; get involved in your community in the fight against food waste!</p>




                        </div>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default Hunger;