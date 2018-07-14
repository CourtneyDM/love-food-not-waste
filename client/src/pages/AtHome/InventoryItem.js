import React, { Component } from 'react';
import { CardBasic } from '../../components/Card';


export default class InventoryItem extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            itemName: '',
            itemDescription: ''
        };
    }

    componentDidMount() {
        this.setState( {
            itemName: this.props.itemName,
            itemDescription: this.props.itemDescription
        } );
    }


    render() {
        return (
            <CardBasic
                header={ this.props.itemName }
                text={ this.props.itemBrandName }>{ this.props.children }</CardBasic>
        );
    }
}