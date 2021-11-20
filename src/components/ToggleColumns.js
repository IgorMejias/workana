import React, { Component } from 'react'

export default class ToggleColumns extends Component {

  
  render() {
    return (
      <div className="toggle-columns">
        {/* Bind handlers and props */}
        { 
          Object.keys(this.props.columns).map((column, index) => {
            return ( 
            <div key={index}>
              <label>
                {column}
              </label>
              <input
                onInput={this.props.onCheckboxClick}
                type="checkbox"
                name={column} />
            </div>)
          })
        }
      </div>
    );
  }
}
