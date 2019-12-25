import React, { Component } from 'react';
import { Customers } from './CustomerList';

export class AddNewCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            customers: new Customers
        };

        // the id variable will get the customer id from the url
        var id = this.props.match.params["id"];

        // if id is greater than 0 then the fetch method will get the specific customer record and display it as in edit mode
        if (id > 0) {
            fetch('api/Customer/Details' + id)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    //this.setState({ customers: data });
                });
        }
        else {
            this.state = { customers: new Customers };
        }

        this.SaveCustomer = this.SaveCustomer.bind(this);
        this.Cancel = this.Cancel.bind(this);
    }

    render() {
       
        return (
            <div>
                <h1>Add Customer</h1>
                <hr />
                <form onSubmit={this.SaveCustomer} >
                    <div className="form-group row" >
                        <input type="hidden" name="customerId" value={this.state.customers.id} />
                    </div>
                    < div className="form-group row" >
                        <label className=" control-label col-md-12" htmlFor="name">Name</label>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="Name" defaultValue={this.state.customers.name} required />
                        </div>
                    </div >

                    <div className="form-group row">
                        <label className="control-label col-md-12" htmlFor="address" >Address</label>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="Address" defaultValue={this.state.customers.address} required />
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
    SaveCustomer(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        // PUT request for Edit employee.  
        if (this.state.customers.Id) {
            fetch('api/Customer/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/customers");
                })
        }
        else {
            fetch('api/Customer/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/customers");
                })
        }
    }

    Cancel(e) {
        e.preventDefault();
        this.props.history.push("/customer");
    }

    //this method will return the html table to display all the customer record with edit and delete actions.
    //renderCreateForm() {
    //    return (
    //        <form onSubmit={this.SaveCustomer} >
    //            <div className="form-group row" >
    //                <input type="hidden" name="customerId" value={this.state.customers.Id} />
    //            </div>
    //            < div className="form-group row" >
    //                <label className=" control-label col-md-12" htmlFor="name">Name</label>
    //                <div className="col-md-4">
    //                    <input className="form-control" type="text" name="Name" defaultValue={this.state.customers.Name} required />
    //                </div>
    //            </div >

    //            <div className="form-group row">
    //                <label className="control-label col-md-12" htmlFor="address" >Address</label>
    //                <div className="col-md-4">
    //                    <input className="form-control" type="text" name="Address" defaultValue={this.state.customers.Address} required />
    //                </div>
    //            </div>

    //            <div className="form-group">
    //                <button type="submit" className="btn btn-default">Save</button>
    //                <button className="btn" onClick={this.Cancel}>Cancel</button>
    //            </div >
    //        </form >
    //    )
    //}    
}

export default AddNewCustomer;