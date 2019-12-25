import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';


export class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };

        // this fetch method retrieves all the products record
        fetch('api/Product/Index')
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                this.setState({ products: data });
            });

        //this.DeleteProduct = this.DeleteProduct.bind(this);
        this.EditProduct = this.EditProduct.bind(this);
    };

    render() {
        let products = this.state.products;
        return (
            <div>

                <p>


                    <Link to='/addProduct'><button class="ui primary button">New Product</button></Link>


                </p>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <a onClick={(id) => this.EditProduct(product.id)}>
                                        <button class="ui yellow button"><Icon name='edit' size='small' />Edit</button>
                                    </a>
                                </td>
                                <td>
                                    <a onClick={(id) => this.DeleteProduct(product.id)}>
                                        <button class="ui red button"><Icon name='delete' size='small' />Delete</button>
                                    </a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    // this method deletes the product record
    DeleteProduct(id) {
        if (!confirm("Do you want to delete product?" + id))
            return
        else {
             //this method will get the record of product with the given id 
            fetch('api/Product/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState({
                    products: this.state.products.filter((rec) => {
                        return (rec.id != id);
                    })
                });
            });
        }
    }

    // this method will edit the specific product record
    EditProduct(id) {
        this.props.history.push("/product/edit/" + id);
    };


}

// declaring a class which has the same properties as product model 
export class Products {
    Id = 0;
    Name = "";
    Price = "";

}

