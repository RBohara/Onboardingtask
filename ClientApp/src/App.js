import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CustomerList } from './components/CustomerList';
import { StoreList } from './components/StoreList';
import { ProductList } from './components/ProductList';
import { SalesList } from './components/SalesList';
import { AddNewCustomer } from './components/AddNewCustomer';
import { AddNewStore } from './components/AddNewStore';
import { AddNewProduct } from './components/AddNewProduct';
import { AddNewSales } from './components/AddNewSales';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/customerList' component={CustomerList} />
        <Route path='/productList' component={ProductList} />
        <Route path='/storeList' component={StoreList} />
        <Route path='/salesList' component={SalesList} />
        <Route path='/addCustomer' component={AddNewCustomer} />
        <Route path='/addStore' component={AddNewStore} />
        <Route path='/addProduct' component={AddNewProduct} />
        <Route path='/addSales' component={AddNewSales} />
        <Route path='/customer/edit/id' component={AddNewCustomer} />  
      </Layout>
    );
  }
}
