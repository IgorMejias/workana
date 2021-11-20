import React, { Component } from 'react'

export default class FilterForm extends Component {


  render() {
    return (
      <div>
        {/* Bind handlers and props */}
        <label htmlFor="name">Filter:</label>
        <input
          type="number"
          name="priceFrom"
          placeholder="Price from..."
          onInput={this.props.onPriceInputChange} />
        <input
          type="number"
          name="priceTo"
          placeholder="Price to..."
          onInput={this.props.onPriceInputChange}
          />
      </div>
    )
  }
}
