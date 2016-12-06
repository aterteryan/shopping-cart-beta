import React, { Component } from 'react';
import { Link } from 'react-router';
import Store from '../Store/TestStore';
import { Actions } from '../Actions/Actions';
import Order from './Order';
import './OrderingTable.scss';

class able extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Store.getData(),
      total: Store.countTotal()
    }

    this._updateState = this._updateState.bind(this);
  }

  componentWillMount() {
    Store.addEEListener(this._updateState);
    Store.countTotal();
  }

  componentWillUnmount() {
    Store.removeEEListener(this._updateState);
  }


  _updateState() {
    this.setState({
      data: Store.getData(),
      total: Store.countTotal()
    });
  }

  _increase(key) {
    Actions.increase(key);
  }

  _decrease(key) {
    Actions.decrease(key);
  }

  _remove(key) {
    Actions.removeItem(key);
  }

  render() {
    return (
      <div className='table'>
        <h1 className={
          this.state.data.length ?
          'table__header' :
          'table__header_empty'
        }> Оформление заказа </h1>
        {
          this.state.data.length ?
            this.state.data.map(item => {
              return (
                <Order
                  key={item.key}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  amount={item.amount}
                  sum={item.sum}
                  increase={this._increase.bind(null, item.key)}
                  decrease={this._decrease.bind(null, item.key)}
                  remove={this._remove.bind(null, item.key)}
                  />
              );
            }) :
            <div>
              <h3 className='table__header_empty'>¯\(°_°)/¯</h3>
              <p className='table__empty'>Ваша корзина пуста</p>
            </div>
        }
        <h3 className='table__sum'>Итого: {this.state.total} руб.</h3>
        <Link 
          to={
            this.state.data.length ?
            '/invoice' :
            '/'
          } 
          className={
            this.state.data.length ?
            'table__expense' :
            'table__expense_empty'
          }
          > Сформировать счёт 
        </Link>
      </div>
    );
  }
}


export default able;