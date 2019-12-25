import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'semantic-ui-react';


export class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        
            
        };

        

        // this fetch method retrieves all the customers record
        fetch('api/Customer/Index')
            .then(response => response.json())
            .then(data => {
                this.setState({ customers: data });
            });

        this.DeleteCustomer = this.DeleteCustomer.bind(this);
        this.EditCustomer = this.EditCustomer.bind(this);
      
    };

    render() {
        let customers = this.state.customers;
        return (
            <div>
                <p>
                   
                <Link to='/addCustomer'> <button class='ui primary button'>New Customer</button></Link>
                    
                </p>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer =>
                            <tr key={customer.id}>
                                <td>{customer.name}</td>
                                <td>{customer.address}</td>
                                <td>
                                    <a onClick={(id) => this.EditCustomer(customer.id)}>
                                        <button class="ui yellow button"><Icon name='edit'/>Edit</button>
                                    </a>
                                </td>
                                <td>
                                    <a onClick={(id) => this.DeleteCustomer(customer.id)}>
                                        <button class="ui red button"><Icon name='delete'/>Delete</button>
                                    </a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

        </div>
        )
    }

   

    // this method deletes the customer record
    DeleteCustomer(id) {
        if (!confirm("Do you want to delete customer?"))
            return
        else {
            // this method will get the record of customer with the given id 
            fetch('api/Customer/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState({
                    customers: this.state.customers.filter((rec) => {
                        return (rec.Id != id);
                    })
                });
            });
        }   
    }

    // this method will edit the specific customer record
    EditCustomer(id) {
        this.props.history.push("/customer/edit/" + id);
    }


}

export class Customers {
    Id = 0;
    Name = "";
    Address = "";

}

