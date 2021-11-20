import React, { Component } from 'react'
import '../styles/Search.css';
import ToggleColumns from './ToggleColumns';
import ProductList from './ProductList';
import FilterForm from './FilterForm';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceFrom: 0,
      priceTo: Infinity,
      columns: {
        id: false,
        name: false,
        department: false,
        currency: false,
        price: false
      }
    };
  }

  onPriceInputChange = (e) => {
    let {name, value} = e.target;
    this.setState({[name]:value});
    if(value === "" && name === "priceFrom"){
      this.setState({priceFrom:-Infinity});
    }

    if(value === "" && name === "priceTo"){
      this.setState({priceTo:Infinity});
    }
  }

  filterProducts = () => {

    let newArray = [];
    this.state.priceTo === this.state.priceFrom ?
    newArray = this.props.products.filter(item=>item.price === parseFloat(this.state.priceFrom)):
    newArray = this.props.products.filter(item=>item.price <= parseFloat(this.state.priceTo) && item.price >= parseFloat(this.state.priceFrom));
    newArray.sort((a,b)=> a.price - b.price);
    return newArray;
  }

  onCheckboxClick = (e) => {
    let {name, checked} = e.target;
  
    this.setState(prevState =>({
      columns:{...prevState.columns,[name]:checked}
    }));

  }

  render() {

    let displayedProducts = this.filterProducts();
    return (
      <div className="Products">
        <FilterForm
          onPriceInputChange={this.onPriceInputChange}
          columns={this.state.columns} />

        <ToggleColumns
          onCheckboxClick={this.onCheckboxClick}
          columns={this.state.columns} />

        <ProductList
          products={displayedProducts}
          columns={this.state.columns} />
      </div>
    );
  }
}
