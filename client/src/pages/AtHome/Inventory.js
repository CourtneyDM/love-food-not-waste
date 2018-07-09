import React, { Component } from 'react';
import Table from 'rc-table';
// import Moment from 'momentjs';
import { Form, Input, Button } from '../../components/Form';
import API from '../../utils/API'
import InventoryItem from './InventoryItem'
import { CardDeck, CardBasic } from '../../components/Card';
import { Section } from '../../components/Content';

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            barCode: '',
            itemName: '',
            itemBrandName: '',
            quantity: '',
            dateAdded: '',
            bestByDate: '',
            brands: [],
            saved: [],
            limit: 5
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        // Get the items saved in inventory database
        this.getInventory();
    }

    // Handle input field changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Handle button click
    handleClick = event => {
        event.preventDefault();
        alert(this.state.itemName);
    }

    // Search API for specified food item
    getFoodDetails = query => {
        API.getFoodDetails(query)
            .then(results => {
                this.setState({
                    brands: results.data.branded,
                });
                console.log(this.state.brands);
            })
            .catch(error => { throw error });
        // TODO: display results for failed request with status code 400
    }

    // Search API for specified barcode
    getBarcodeDetails = query => {
        API.getBarcodeDetails(query)
            .then(results => console.log(results.data))
            .catch(error => { throw error });
    }

    // Delete food item from database
    deleteItem = id => {
        API.deleteFoodItem(id)
            .then(results => this.getInventory())
            .catch(error => { throw error });
    }

    // Save food item to database
    saveFoodItem = foodData => {
        console.log(foodData);
        API.saveFoodItem(foodData)
            .then(results => this.getInventory())
            .catch(error => { throw error });
    }

    // Get food items saved to database
    getInventory = () => {
        API.getInventory()
            .then(res => this.setState({ saved: res.data }))
            .catch(error => { throw error });
    }

    render() {
        return (
            <React.Fragment>
                {/* Section to display inventory */}


                <CardDeck>
                    <CardBasic
                        header='Food Inventory'>
                        <p>Do you know how long your food lasts?  <a href='http://time.com/3933554/food-waste/' target='_blank'>Americans waste over $640 per year </a> according to a recent survey by the American Chemistry Council.  Forgetting when your food expires or misinterpreting labels is a big contributer to food waste. </p>
                        <img src='/assets/images/foodwaste.jpg' className='img-fluid' id='foodWaste' alt='Food Waste' width='200px' />
                        <p>We believe we can do better!  Use our food tracker to keep an inventory of items you have on hand.  When food is about to expire, check out our recipes to find out how you can use it before you lose it.</p>

                        <h5 className='text-center sectionHeader'>Your Saved Food</h5>
                        <Section>

                            {!this.state.saved.length ? (
                                <Section>
                                    <br/>
                                    <p className='text-center'><i>There are no items in your inventory.</i></p></Section>
                            ) : (
                                    <Section>
                                        {this.state.saved.map(item => {



                                            return (
                                                <InventoryItem
                                                    key={item._id}
                                                    itemName={item.itemName}
                                                    itemBrandName={item.itemBrandName} >
                                                    <span>
                                                        <Button
                                                            text='Delete from Inventory'
                                                            className='btn btn-danger'
                                                            onClick={() => this.deleteItem(item._id)}
                                                        />
                                                    </span>
                                                </InventoryItem>
                                            )
                                        })}
                                    </Section>
                                )}
                        </Section>

                        {/* SEARCH FOR FOOD SECTION */}
                        <h5 className='text-center sectionHeader'>Add to your Inventory</h5>
                       
                        <Input
                        
                            label='Item Name: '
                            name='itemName'
                            placeholder='Required'
                            onChange={this.handleInputChange}>
                            <Button
                            className='btn btn-search'
                            text='Search for Item'
                            onClick={() => this.getFoodDetails(this.state.itemName)}
                            /> 
                            </Input>
                        
                       
                        {/* DISPLAY SEARCH RESULTS SECTION */}

                        {!this.state.brands.length ? (
                            <Section>
                            <br/>
                            <p className='text-center'><i>Search for an item to add to your inventory.</i></p></Section>
                        ) : (

                                <React.Fragment>

                                    <h6 className='text-center sectionHeader'>Search Results</h6>


                                    {/* Branded Foods */}

                                    {this.state.brands.slice(0, this.state.limit).map((brand, index) => {

                                            const searchColumns = [{
                                                itemName: brand.food_name,
                                                title: 'Item', dataIndex: 'itemName', key: 'itemName', width: 300,
                                            }, {
                                                title: 'Add to Inventory', dataIndex: '', key: 'operations', width: 300, render: () =>
                                                    <Button
                                                        text='Add'
                                                        className='btn btn-primary'
                                                        onClick={() => this.saveFoodItem({
                                                            itemName: brand.food_name,
                                                            itemBrandName: brand.brand_name,
                                                            quantity: 1,
                                                            bestByDate: '20181231'
                                                        })}
                                                    />,
                                            }];

                                            const searchData = [];


                                            searchData.push({ itemName: brand.food_name, itemBrandName: brand.brand_name, quantity: 1, bestByDate: '20181231', key: { index } })

                                            return (


                                                <Section
                                                className='searchResults'                                            >
                                                    <Table columns={searchColumns} data={searchData} />

                                                </Section>

                                            )
                                        })
                                    }

                                </React.Fragment>
                            )
                        }
                    </CardBasic>
                </CardDeck>



            </React.Fragment>
        );
    }
}
export default Inventory;

// TODO: Setup the InventoryItem component to display the search results from the API for both brand names and common foods


