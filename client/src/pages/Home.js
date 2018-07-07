import React from 'react';
import { Card, CardDeck} from '../components/Card';


const Home = () => (
    <div>
        <CardDeck>
        <Card
            header="What's the problem?"
            text='Up to 40% of the food produced in the U.S. is wasted.  Yet, 1 in 6 people are going hungry.' 
            source='/assets/images/plate.jpg'
            link='Learn About Waste &amp; Hunger'
            route='/Educate'
        />
            
        <Card
            header='Help at Home'
            text="There's plenty you can do right in your own home to fight waste &amp; love your food." 
            source='/assets/images/strawberry.jpg'
            link='Learn about Food Expiration Dates'
            route='/Food'
            />
        <Card
            header='Get Involved'
            text="Feeling moved? Get involved in the fight against waste &amp; hunger!"
            source='/assets/images/veges.jpg'
            link='Donate Food'
            route='Donate' 
            />
         </CardDeck>   
    </div>
);

export default Home;