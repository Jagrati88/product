  import React, { Component } from 'react';
  import SearchBar from './SearchBar';
  import ProductTable from './ProductTable';

  class FilterProductTable extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        filterText:'',
        inStockOnly:false
      };

      this.handleFilterChange = this.handleFilterChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    };

    handleFilterChange(filterText){
      this.setState({
        filterText:filterText
      })
    }

    handleInStockChange(inStockOnly){
      this.setState({
        inStockOnly:inStockOnly
      })
    }
    
    render() {
      return (
        <div> 
            <SearchBar
            filterText = {this.state.filterText}
            inStockOnly = {this.state.inStockOnly}
            onFilterChange = {this.handleFilterChange}
            onInStockChange = {this.handleInStockChange}
            />

            <ProductTable 
            products = {this.props.products}
            filterText ={this.props.filterText}
            inStockOnly={this.props.inStockOnly}
            />
        </div>
      );
    }
  }




  export default FilterProductTable;
