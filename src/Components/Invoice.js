import React, { Component } from 'react';
import { Link } from 'react-router';
import Store from '../Store/TestStore';
import './Invoice.scss';

class Invoice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Store.getData(),
      total: Store.countTotal()
    }

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

  render() {
    return (
      <div className='invoice'>
        <table className='invoice-table'>
          <thead className='invoice-head'>
            <tr className='invoice__tr'>
              <th className='invoice_header' colSpan={4}>
                <h1 className='invoice__header'>Счет</h1>
              </th>
            </tr>
            <tr className='invoice__tr'>
              <th className='invoice__th'>Товар</th>
              <th className='invoice__th'>Количество</th>
              <th className='invoice__th'>Цена, руб</th>
              <th className='invoice__th'>Сумма, руб</th>
            </tr>
          </thead>
          <tfoot className='invoice-foot'>
            <tr className='invoice__tr'>
              <th className='invoice__sum' colSpan={4}>Итого: {this.state.total} руб</th>
            </tr>
            <tr className='invoice__tr'>
              <td className='invoice__link-holder' colSpan={4}>
                <Link className='invoice__link' to='/'> Вернуться к выбранным товарам</Link>
              </td>
            </tr>
          </tfoot>
          <tbody>
            {
              this.state.data.map(item => {
                return (
                  <tr key={item.key} className='invoice__tr'>
                    <td className='invoice__td'>{item.title} {item.description}</td>
                    <td className='invoice__td'>{item.amount}</td>
                    <td className='invoice__td'>{item.price}</td>
                    <td className='invoice__td'>{item.sum}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Invoice;