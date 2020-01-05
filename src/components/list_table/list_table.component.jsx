import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './list_table.styles.scss';

// https://stackoverflow.com/questions/43108912/dynamically-add-cells-to-table-rows-and-dynamically-create-table-rows-with-react

class ListTable extends React.Component {

    constructor() {
        super();
    
        this.state = {
            sections: [
                {
                    id: 'ASDF66WE',
                    supplier: 'PT. Cipta Mortar Utama',
                    product: 'Cement',
                    quantity: 5,
                    unit: "L",
                    cost_per_item: 5000,
                    total_cost: 5000 * 5,
                    shipment_date:'19/1/20'
                },
                {
                    id: 'ASDF66WE',
                    supplier: 'PT. Cipta Mortar Utama',
                    product: 'Cement',
                    quantity: 5,
                    unit: "L",
                    cost_per_item: 5000,
                    total_cost: 5000 * 5,
                    shipment_date:'19/1/20'
                },
                {
                    id: 'ASDF66WE',
                    supplier: 'PT. Cipta Mortar Utama',
                    product: 'Cement',
                    quantity: 5,
                    unit: "L",
                    cost_per_item: 5000,
                    total_cost: 5000 * 5,
                    shipment_date:'19/1/20'
                },
                {
                    id: 'ASDF66WE',
                    supplier: 'PT. Cipta Mortar Utama',
                    product: 'Cement',
                    quantity: 5,
                    unit: "L",
                    cost_per_item: 5000,
                    total_cost: 5000 * 5,
                    shipment_date:'19/1/20'
                },
                {
                    id: 'ASDF66WE',
                    supplier: 'PT. Cipta Mortar Utama',
                    product: 'Cement',
                    quantity: 5,
                    unit: "L",
                    cost_per_item: 5000,
                    total_cost: 5000 * 5,
                    shipment_date:'19/1/20'
                }
            ]
        };
    }


    render(){
        return(
            <div className='list-table'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Supplier</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>Cost/Item</th>
                            <th>Total Cost</th>
                            <th>Shipment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => console.log("Row is Clicked!")} className='table-tr'>
                            <td>ASDF66WE</td>
                            <td>PT. Cipta Mortar Utama</td>
                            <td>Cement</td>
                            <td>5</td>
                            <td>L</td>
                            <td>5000</td>
                            <td>25000</td>
                            <td>19/1/20</td>
                        </tr>
                        <tr onClick={() => console.log("Row is Clicked!")} className='table-tr'>
                            <td>ASDF66WE</td>
                            <td>PT. Cipta Mortar Utama</td>
                            <td>Cement</td>
                            <td>5</td>
                            <td>L</td>
                            <td>5000</td>
                            <td>25000</td>
                            <td>19/1/20</td>
                        </tr>
                        <tr onClick={() => console.log("Row is Clicked!")} className='table-tr'>
                            <td>ASDF66WE</td>
                            <td>PT. Cipta Mortar Utama</td>
                            <td>Cement</td>
                            <td>5</td>
                            <td>L</td>
                            <td>5000</td>
                            <td>25000</td>
                            <td>19/1/20</td>
                        </tr>
                        <tr onClick={() => console.log("Row is Clicked!")} className='table-tr'>
                            <td>ASDF66WE</td>
                            <td>PT. Cipta Mortar Utama</td>
                            <td>Cement</td>
                            <td>5</td>
                            <td>L</td>
                            <td>5000</td>
                            <td>25000</td>
                            <td>19/1/20</td>
                        </tr>
                        <tr onClick={() => console.log("Row is Clicked!")} className='table-tr'>
                            <td>ASDF66WE</td>
                            <td>PT. Cipta Mortar Utama</td>
                            <td>Cement</td>
                            <td>5</td>
                            <td>L</td>
                            <td>5000</td>
                            <td>25000</td>
                            <td>19/1/20</td>
                        </tr>
                        <tr onClick={() => console.log("Row is Clicked!")} className='table-tr'>
                            <td>ASDF66WE</td>
                            <td>PT. Cipta Mortar Utama</td>
                            <td>Cement</td>
                            <td>5</td>
                            <td>L</td>
                            <td>5000</td>
                            <td>25000</td>
                            <td>19/1/20</td>
                        </tr>
    
                        
                    </tbody>
                </Table>
            </div>
        )
    }
    

}

export default ListTable;