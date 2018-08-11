import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { CardWithImage, CardDeck } from '../components/Card';
import { List, ListItem } from '../components/List';

export class Home extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardWithImage
                        header="What's the problem?"
                        text='Up to 40% of the food produced in the U.S. is wasted.  Yet, 1 in 6 people are going hungry.'
                        source='/assets/images/plate.jpg'
                    >
                        <List>
                            <ListItem>
                                <Link to='/Educate/FoodWaste' className="card-link">Why food waste is a big deal</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/Educate/Hunger' className="card-link">Hunger in America</Link>
                            </ListItem>
                        </List>
                    </CardWithImage>

                    <CardWithImage
                        header='Help at Home'
                        text="There's plenty you can do right in your own home to fight waste &amp; love your food."
                        source='/assets/images/strawberry.jpg'
                    >
                        <List>
                            <ListItem>
                                <Link to='/AtHome/Inventory' className="card-link">Track your Food</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/AtHome/Recipes' className="card-link">Find Recipes</Link>
                            </ListItem>
                        </List>
                    </CardWithImage>
                    <CardWithImage
                        header='Get Involved'
                        text="Feeling moved? Get involved in the fight against waste &amp; hunger!"
                        source='/assets/images/veges.jpg'
                    >
                        <List>
                            <ListItem>
                                <Link to='/GetInvolved/Individual' className="card-link">Message Board</Link>
                            </ListItem>

                            <ListItem>
                                <Link to='/GetInvolved/Resources' className="card-link">Resources</Link>
                            </ListItem>
                        </List>
                    </CardWithImage>
                </CardDeck>
            </div>
        )
    };
};
