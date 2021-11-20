import React, { Component } from 'react'

export default class ProductList extends Component {

  render() {
    return (
      <div id="product-list">
        <header>
          <strong>Product List (0 items)</strong>
        </header>
        <table>
          <thead>
            <tr>
              <th hidden={this.props.columns.id}>ID</th>
              <th hidden={this.props.columns.name}>Name</th>
              <th hidden={this.props.columns.department}>Department</th>
              <th hidden={this.props.columns.price}>Price</th>
            </tr>
          </thead>
          <tbody>
          {this.props.products.map((item,index)=>{
            return(
              <tr key={index}>
                <td hidden={this.props.columns.id}>{item.id}</td>
                <td hidden={this.props.columns.name}>{item.name}</td>
                <td hidden={this.props.columns.department}>{item.department}</td>
                <td hidden={this.props.columns.price}>{item.price}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    )
  }
}
