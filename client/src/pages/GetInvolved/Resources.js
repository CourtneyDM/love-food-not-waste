import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';
import './Resources.css';

class Resources extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Dallas Area Food Banks'>
                         <table id="foodBanks">
                                <tr>
                                    <th>Food Bank</th>
                                    <th>Address</th>
                                    <th>Website</th>
                                    <th>Phone</th>
                                </tr>
                                <tr>
                                    <td>North Texas Food Bank</td>
                                    <td>4500 S Cockrell Hill Rd, Dallas, TX 75236</td>
                                    <td>(214) 330-1396</td>
                                    <td><a href='https://www.ntfb.org/'>View</a></td>
                                </tr>
                                <tr>
                                    <td>Resource Food Pantry</td>
                                    <td>2701 Reagan St, Dallas, TX 75219</td>
                                    <td>(214) 330-1396</td>
                                    <td><a href='http://www.myresourcecenter.org/'>View</a></td>
                                </tr>
                                <tr>
                                    <td>Pleasant Grove Pantry</td>
                                    <td>1331 Baywood St, Dallas, TX 75217</td>
                                    <td>(214) 505-1928</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Our Community Pantry</td>
                                    <td>1502 Pennsylvania Ave, Dallas, TX 75215</td>
                                    <td>(214) 367-3131</td>
                                    <td><a href='https://www.ntfb.org/ourcommunitypantry/'>View</a></td>
                                </tr>
                                <tr>
                                    <td>CrossRoads Community Services</td>
                                    <td>1822 Young St, Dallas, TX 75201</td>
                                    <td>(214) 560-2511</td>
                                    <td><a href='http://www.ccsdallas.org/'>View</a></td>
                                </tr>
</table>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default Resources;