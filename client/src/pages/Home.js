import React, { Component } from "react";
import { CardWithImage, CardDeck } from '../components/Card';
import { List, ListItem } from '../components/List';

class Home extends Component {
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
                                <a href='/Educate/FoodWaste' className="card-link">Why food waste is a big deal</a>
                            </ListItem>
                            <ListItem>
                                 <a href='/Educate/Hunger' className="card-link">Hunger in America</a>
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
                                <a href='/Home/Inventory' className="card-link">Track your Food</a>
                            </ListItem>
                            <ListItem>
                                <a href='/Home/Recipes' className="card-link">Find Recipes</a>
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
                                <a href='/GetInvolved/FoodSupplier' className="card-link">Food Suppliers - Donate Here</a>
                            </ListItem>
                            <ListItem>
                                <a href='/GetInvolved/Individual' className="card-link">Individuals - Donate or Deliver</a>
                            </ListItem>
                            <ListItem>
                                <a href='/GetInvolved/Resources' className="card-link">Resources</a>
                            </ListItem>
                        </List>
                    </CardWithImage>
                </CardDeck>
            </div>

        )
    };
};

export default Home;