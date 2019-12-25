import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SalesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: []
        };

        // this fetch method retrieves all the sales record
        fetch('api/Sales/Index')
            .then(response => response.json())
            .then(data => {
                this.setState({ sales: data });
            });

        this.DeleteSales = this.DeleteSales.bind(this);
        this.EditSales = this.EditSales.bind(this);
    };

    render() {
        let sales = this.state.sales;
        return
        <div>
            <p>
                <button>
                    <Link to='/addSales'>New Sales</Link>
                </button>
            </p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Customer Id</th>
                        <th>Store Id</th>
                        <th>Date Sold</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale =>
                        <tr key={sale.id}>
                            <td>{sale.productId}</td>
                            <td>{sale.customerId}</td>
                            <td>{sale.storeId}</td>
                            <td>{sale.dateSold}</td>
                            <td>
                                <a onClick={(id) => this.EditSales(sale.id)}>
                                    <button>Edit</button>
                                </a>
                            </td>
                            <td>
                                <a onClick={(id) => this.DeleteSales(sale.id)}>
                                    <button>Delete</button>
                                </a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    }

    // this method deletes the sales record
    DeleteSales(id) {
        if (!confirm("Do you want to delete sales?"))
            return
        else {
            // this method will get the record of sales with the given id 
            fetch('api/Sales/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState({
                    sales: this.state.sales.filter((rec) => {
                        return (rec.Id != id);
                    })
                })
            })
        }
    }

    // this method will edit the specific sales record
    EditSales(id) {
        this.props.history.push("/sales/edit/" + id);
    }  

}

export class Sales {
    Id = 0;
    ProductId = 0;
    CustomerId = 0;
    StoreId = 0;
    DateSold = "";
}