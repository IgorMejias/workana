import React, { Component } from 'react'

export default class ProductList extends Component {

  render() {
    return (
      <div id="product-list">
        <header>
          <strong>Productdd List (0 items)</strong>
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
                {Object.keys(this.props.columns).map((column,index)=>{
                  return(
                    <td key={index}>
                    {this.props.columns[column] ?
                    item[column]:""
                    }
                    </td>
                  )
                })}
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    )
  }
}
