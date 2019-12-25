import React, { Component } from 'react';
import { Stores } from './StoreList';

export class AddNewStore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stores: new Stores
        };

        // the id variable will get the store id from the url
        var Id = this.props.match.params["Id"];

        // if id is greater than 0 then the fetch method will get the specific store record and display it as in edit mode
        if (Id > 0) {
            fetch('api/Store/Details' + Id)
                .then(response => response.json())
                .then(data => {
                    this.setState({ stores: data });
                });
        }
        else {
            this.state = { stores: new Stores };
        }

        this.SaveStore = this.SaveStore.bind(this);
        this.Cancel = this.Cancel.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Add Store</h1>
                <hr />
                <form onSubmit={this.SaveStore} >
                    <div className="form-group row" >
                        <input type="hidden" name="storeId" value={this.state.stores.Id} />
                    </div>
                    < div className="form-group row" >
                        <label className=" control-label col-md-12" htmlFor="name">Name</label>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="Name" defaultValue={this.state.stores.Name} required />
                        </div>
                    </div >

                    <div className="form-group row">
                        <label className="control-label col-md-12" htmlFor="address" >Address</label>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="Address" defaultValue={this.state.stores.Address} required />
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
    SaveStore(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        // PUT request for Edit store.  
        if (this.state.stores.Id) {
            fetch('api/Store/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/stores");
                })
        }
        else {
            fetch('api/Store/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/stores");
                })
        }
    }

    Cancel(e) {
        e.preventDefault();
        this.props.history.push("/store");
    }

    //this method will return the html table to display all the store record with edit and delete actions.
    //renderCreateForm() {
    //    return (
    //        <form onSubmit={this.SaveStore} >
    //            <div className="form-group row" >
    //                <input type="hidden" name="storeId" value={this.state.stores.Id} />
    //            </div>
    //            < div className="form-group row" >
    //                <label className=" control-label col-md-12" htmlFor="name">Name</label>
    //                <div className="col-md-4">
    //                    <input className="form-control" type="text" name="Name" defaultValue={this.state.stores.Name} required />
    //                </div>
    //            </div >

    //            <div className="form-group row">
    //                <label className="control-label col-md-12" htmlFor="address" >Address</label>
    //                <div className="col-md-4">
    //                    <input className="form-control" type="text" name="Address" defaultValue={this.state.stores.Address} required />
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

export default AddNewStore;