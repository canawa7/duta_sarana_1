import React from 'react';
import './invoice_list.styles.scss';
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';

const InvoiceList = (props) => {
    const [state, setState] = React.useState({
        columns: [
            { 
                title: "ID", 
                field: "id" 
            },
            {
                title: "Supplier",
                field: "supplier",
            },
            {
                title: "Product",
                field: "product",
            },
            
            { 
                title: "Quantity", 
                field: "quantity",  
            },
            { 
                title: "Unit", 
                field: "unit",  
            },
            { 
                title: "Cost/Item", 
                field: "cost_per_item",  
            },
            {
                title: "Total Cost",
                field: "total_cost",
            },
            {
                title: "Shipment Date",
                field: "shipment_date",
            }
        ],
        data: [
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
        ],
    });
    
      return (
        <div className='invoice-list'>
        <MaterialTable
                title="Invoice List"
                columns={state.columns}
                data={state.data}
                editable={
                {
                onRowAdd: newData =>
                    new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                        setState(prevState => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                        });
                    }, 600);
                    }),

                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                        if (oldData) {
                        setState(prevState => {
                            const data = [...prevState.data];
                            data[data.indexOf(oldData)] = newData;
                            return { ...prevState, data };
                        });
                        }
                    }, 600);
                    }),

                onRowDelete: oldData =>
                    new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                        setState(prevState => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                        });
                    }, 600);
                    }),
                }
                }
            />
        </div>
        
      ); 
    
}
  
export default InvoiceList;