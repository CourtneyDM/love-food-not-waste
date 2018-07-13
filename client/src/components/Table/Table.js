import React, {Component} from 'react';

import './Table.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');

const columns = [
    {
        title: 'Item',
        width: 120,
        data: 'item'
    },
    {
        title: 'Quantity',
        width: 180,
        data: 'quantity'
    },
];

function reloadTableData(items) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    table.clear();
    table.rows.add(items);
    table.draw();
}

function updateTable(items) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    let dataChanged = false;
    table.rows().every(function () {
        const oldNameData = this.data();
        const newNameData = items.find((nameData) => {
            return nameData.name === oldNameData.name;
        });
        if (oldNameData.item !== newNameData.item) {
            dataChanged = true;
            this.data(newNameData);
        }
       return true;
    });

    if (dataChanged) {
        table.draw();
    }
}


class Table extends Component {
    componentDidMount() {
        $(this.refs.main).DataTable({
            dom: '<"data-table-wrapper"t>',
            data: this.props.items,
            columns,
            ordering: true
        });
    }

    componentWillUnmount(){
       $('.data-table-wrapper').find('table').DataTable().destroy(true);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.items.length !== this.props.items.length) {
            reloadTableData(nextProps.items);
        } else {
            updateTable(nextProps.items);
        }
        return false;
    }



    render() {
        return (
            <div>
                <table ref="main" />
            </div>);
    }
}

;

export default Table;