import React, { Component } from 'react';
import { Products } from './ProductList';

export class AddNewProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            products: new Products
        };

        // the id variable will get the product id from the url
        var Id = this.props.match.params["Id"];

        // if id is greater than 0 then the fetch method will get the specific product record and display it as in edit mode
        if (Id > 0) {
            fetch('api/Product/Details' + Id)
                .then(response => response.json())
                .then(data => {
                    this.setState({ loading: false, products: data });
                });
        }
        else {
            this.state = { loading: false, products: new Products };
        }

        this.SaveProduct = this.SaveProduct.bind(this);
        this.Cancel = this.Cancel.bind(this);
    }

    render() {
        
        return (
            <div>
                <h1>Add Product</h1>
                <hr />
                <form onSubmit={this.SaveProduct} >
                    <div className="form-group row" >
                        <input type="hidden" name="productId" value={this.state.products.Id} />
                    </div>
                    < div className="form-group row" >
                        <label className=" control-label col-md-12" htmlFor="name">Name</label>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="Name" defaultValue={this.state.products.Name} required />
                        </div>
                    </div >

                    <div className="form-group row">
                        <label className="control-label col-md-12" htmlFor="price" >Price</label>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="Price" defaultValue={this.state.products.Price} required />
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
    SaveProduct(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        // PUT request for Edit product.  
        if (this.state.products.Id) {
            fetch('api/Product/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/products");
                })
        }
        else {
            fetch('api/Product/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/products");
                })
        }
    }

    Cancel(e) {
        e.preventDefault();
        this.props.history.push("/product");
    }

    //this method will return the html table to display form to create new product
    //renderCreateForm() {
    //    return (
    //        <form onSubmit={this.SaveProduct} >
    //            <div className="form-group row" >
    //                <input type="hidden" name="productId" value={this.state.products.Id} />
    //            </div>
    //            < div className="form-group row" >
    //                <label className=" control-label col-md-12" htmlFor="name">Name</label>
    //                <div className="col-md-4">
    //                    <input className="form-control" type="text" name="Name" defaultValue={this.state.products.Name} required />
    //                </div>
    //            </div >

    //            <div className="form-group row">
    //                <label className="control-label col-md-12" htmlFor="price" >Price</label>
    //                <div className="col-md-4">
    //                    <input className="form-control" type="text" name="Price" defaultValue={this.state.products.Price} required />
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

export default AddNewProduct;