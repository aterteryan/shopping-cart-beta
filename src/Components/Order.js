import React, { Component } from 'react';
import { Actions } from '../Actions/Actions';
import './Order.scss';

class Order extends Component {
  render() {
    return (
      <div className='product'>
        <div className='product-left'>
          <div className='product-description'>
            <i className='product__icon material-icons md-48'>{this.props.icon}</i>
            <span className='product__header'>{this.props.title}</span>
            <span className='product__description'>{this.props.description}</span>
          </div>
        </div>
        <div className='product-right'>
          <div className='product-quantity-and-price'>
            <i className='product__minus material-icons' onClick={this.props.decrease}>&#xE15D;</i>
            <span className='product__amount'>{this.props.amount}</span>
            <i className='product__plus material-icons' onClick={this.props.increase}>&#xE148;</i>
            <span className='product__sum'>{this.props.sum} <i className='product-rub fa fa-rub' aria-hidden='true'></i></span>
          </div>
          <span className='remove-holder'>
            <i className='product__del material-icons' onClick={this.props.remove}>&#xE14C;</i>
          </span>
        </div>
      </div>
    );
  }
}

export default Order;