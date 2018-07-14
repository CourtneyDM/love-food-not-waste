<<<<<<< HEAD
import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';


class Recipes extends Component {
render() {
    return (
        <div>
            <CardDeck>
                <CardBasic
                    header='Recipes'>
                    
      
                </CardBasic>
            </CardDeck>
        </div>
    );
};
};

export default Recipes;


=======
import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';

class Recipes extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Test'>
                        <p>This is where you can search for recipes</p>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default Recipes;
>>>>>>> courtney
