import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

export class StoreList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: []
        };

        // this fetch method retrieves all the stores record
        fetch('api/Store/Index')
            .then(response => response.json())
            .then(data => {
                this.setState({ stores: data });
            });

        this.DeleteStore = this.DeleteStore.bind(this);
        this.EditStore = this.EditStore.bind(this);
    }

    render() {
        let stores = this.state.stores;
        return (
            <div>

            <p>
                
                    <Link to='/addStore'><button class="ui primary button">New Store</button></Link>
                
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
                    {stores.map(store =>
                        <tr key={store.id}>
                            <td>{store.name}</td>
                            <td>{store.address}</td>
                            <td>
                                <a onClick={(id) => this.EditStore(store.id)}>
                                    <button class="ui yellow button"><Icon name='edit' />Edit</button>
                                </a>
                            </td>
                            <td>
                                <a onClick={(id) => this.DeleteStore(store.id)}>
                                    <button class="ui red button"><Icon name='delete' />Delete</button>
                                </a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        )
    }

    // this method deletes the store record
    DeleteStore(id) {

        if (!confirm("Do you want to delete store?"))
            return
        else {
            // this method will get the record of store with the given id 
            fetch('api/Store/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState({
                    stores: this.state.stores.filter((rec) => {
                        return (rec.Id != id);
                    })
                });
            });
        }
    }

    // this method will edit the specific store record
    EditStore(id) {
        this.props.history.push("/store/edit/" + id);
    }

} 
export class Stores {
    Id = 0;
    Name = "";
    Address = "";
}