import React, { Component } from 'react'
import '../styles/Search.css';
import ToggleColumns from './ToggleColumns';
import ProductList from './ProductList';
import FilterForm from './FilterForm';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceFrom: "",
      priceTo: "",
      columns: {
        id: false,
        name: false,
        department: false,
        currency: false,
        price: false
      }
    };
  }

  onPriceInputChange = (name, value) => {
    console.log(name,value)
    this.setState({[name]:value});
  }

  filterProducts = () => {

    let newArray = [];
    this.state.priceTo === this.state.priceFrom ?
    newArray = this.props.products.filter(item=>item.price === parseFloat(this.state.priceFrom)):
    newArray = this.props.products.filter(item=>item.price <= parseFloat(this.state.priceTo) && item.price >= parseFloat(this.state.priceFrom));
    
    if(this.state.priceFrom === "0" && this.state.priceTo === "0"){
      newArray = this.props.products;
    }

    if(this.state.priceFrom === 0 && this.state.priceTo === 0){
      newArray = this.props.products;
    }

    if(this.state.priceFrom === "" && this.state.priceTo === ""){
      newArray = this.props.products;
    }

    if(parseFloat(this.state.priceFrom) > parseFloat(this.state.priceTo)){
      newArray = this.props.products;
    }

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
          priceFrom={this.state.priceFrom}
          priceTo={this.state.priceTo}
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
