import React, { Component } from 'react';
import { Sales } from './SalesList';

export class AddNewSales extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sales: new Sales
        };

        // the id variable will get the sales id from the url
        var Id = this.props.match.params["Id"];

        // if id is greater than 0 then the fetch method will get the specific sales record and display it as in edit mode
        if (Id > 0) {
            fetch('api/Sales/Details' + Id)
                .then(response => response.json())
                .then(data => {
                    this.setState({ loading: false, sales: data });
                });
        }
        else {
            this.state = { loading: false, sales: new Sales };
        }

        this.SaveSales = this.SaveSales.bind(this);
        this.Cancel = this.Cancel.bind(this);
    }

    render() {
        
        return (
            <div>
                <h1>Add Sales</h1>
                <hr />
                <form onSubmit={this.SaveSales} >
                    <div className="form-group row" >
                        <input type="hidden" name="salesId" value={this.state.sales.Id} />
                    </div>
                    < div className="form-group row" >
                        <label className=" control-label col-md-12" htmlFor="productId">Product Id</label>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="ProductId" defaultValue={this.state.sales.ProductId} required />
                        </div>
                    </div >

                    <div className="form-group row">
                        <label className="control-label col-md-12" htmlFor="customerId">Customer Id</label>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="CustomerId" defaultValue={this.state.sales.CustomerId} required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="control-label col-md-12" htmlFor="storeId">Store Id</label>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="StoreId" defaultValue={this.state.sales.StoreId} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-default">Save</button>
                        <button className="btn" onClick={this.Cancel}>Cancel</button>
                    </div >
                </form >
            </div>
        );
    }

    // this method will save the record into database
    SaveSales(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        // PUT request for Edit sales.  
        if (this.state.sales.Id) {
            fetch('api/Sales/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/sales");
                })
        }
        else {
            fetch('api/Sales/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/sales");
                })
        }
    }

    Cancel(e) {
        e.preventDefault();
        this.props.history.push("/sale");
    }

}

export default AddNewSales;