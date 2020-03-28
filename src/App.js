  import React, { Component } from 'react';
  import FilteredProductTable from './Components/FilteredProductsTable'

  class App extends Component {
    state = {
      'PRODUCTS' : [
        {category:'games',name : 'football',price : '$50', stocked:true},
        {category:'games' , name:'basketball',price:'$100', stocked:true},
        {category:'games', name:'cricket',price:'$150', stocked:false},
        {category:'electronics', name:'iphone',price:'$15000', stocked:true},
        {category:'electronics', name:'laptop',price:'$2000', stocked:false},
        {category:'electronics', name:'smart watch',price:'$300', stocked:true},
        
  ]
    }
    render() {
      return (
        <div> 
          <h1>Products List</h1>
          <FilteredProductTable products = {this.state.PRODUCTS} />
          </div>
      );
    }
  }

  export default App;
