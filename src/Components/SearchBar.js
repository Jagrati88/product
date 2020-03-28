    import React, { Component } from 'react';

    class SearchBar extends Component {
        constructor(props) {
        super(props)
        
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
        };
        
        handleFilterChange(e){
            this.props.onFilterChange(e.target.value);
        }

        handleInStockChange(e){
            this.props.onInStockChange(e.target.checked);
        }
    render() {
        return (
        <div> 
                <form>
                    <p>
                        <input type = "text" placeholder = "Search Here !!"
                        value = {this.props.filterText}
                        onChange = {this.handleFilterChange}
                        />
                    </p>
                <p>
                    <input type = "checkBox" 
                    checked = {this.props.inStockOnly}
                    onChange = {this.handleInStockChange}
                    />
                    {' '}
                    <b> Only show products in stock!</b>
                </p>
                
                </form> 
        </div>
        );
    }
    }

    export default SearchBar;
