import React, { Component } from 'react'

export default class FilterForm extends Component {



  render() {
    return (
      <div>
        {"Min: "+this.props.priceFrom+" Max: "+this.props.priceTo}
        <label htmlFor="name">Filter:</label>
        <input
          type="number"
          name="priceFrom"
          placeholder="Price from..."
          onChange={(e)=>{this.props.onPriceInputChange(e.target.name,e.target.value)}}
          value={this.props.priceFrom} />
        <input
          type="number"
          name="priceTo"
          placeholder="Price to..."
          onChange={(e)=>{this.props.onPriceInputChange(e.target.name,e.target.value)}}
          value={this.props.priceTo}/>
      </div>
    )
  }
}
