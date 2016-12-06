import EventEmitter from '../EventEmitter/EventEmitter';
import Dispatcher from '../Dispatcher/TestDispatcher';

let data = [
  {
    key: 1,
    title: 'Canon EOS 5D Mark III: ',
    description: 'цифровая камера',
    price: 199990,
    sum: 199990,
    amount: 1,
    icon: 'local_see'
  },
  {
    key: 2,
    title: 'Wi-Fi ASUS RT-AC87U: ',
    description: 'роутер',
    amount: 1,
    price: 12990,
    sum: 12990,
    icon: 'router'
  },
  {
    key: 3,
    title: 'Apple Watch: ',
    description: 'часы 38mm St.Steel',
    amount: 1,
    price: 29990,
    sum: 29990,
    icon: 'watch'
  },
  {
    key: 4,
    title: 'Apple MacBook 12: ',
    description: 'ноутбук Core M7/1.3/8/512SSD',
    amount: 1,
    price: 124990,
    sum: 124990,
    icon: 'laptop'
  },
  {
    key: 5,
    title: 'Microsoft Xbox one: ',
    description: 'игровая консоль 1Tb',
    amount: 1,
    price: 23990,
    sum: 23990,
    icon: 'videogame_asset'
  }
];

let total = 0;

class TestStore extends EventEmitter {
  constructor() {
    super();
  }

  emitEEListener() {
    super.emit('change')
  }

  addEEListener(fn) {
    super.on('change', fn)
  }

  removeEEListener(fn) {
    super.remove('change', fn)
  }

  getData() {
    return data;
  }

  countTotal() {
    let sum = 0;
    data.forEach(item => sum += item.sum)
    total = sum;
    return total;
  }

  increase(key) {
    data.forEach(item => {
      if (key === item.key) {
        item.amount++;
        item.sum = item.price * item.amount;
      }
    });
  }

  decrease(key) {
    data.forEach(item => {
      if (key === item.key) {
        if (item.amount > 1) {
          item.amount--;
          item.sum = item.price * item.amount;
        }
      }
    });
  }

  removeItem(key) {
    let newData = data.filter(item => item.key !== key);
    data = newData;
  }
}

Dispatcher.register(function (action) {
  switch (action.type) {
    case 'INCREASE': {
      Store.increase(action.payload);
      Store.countTotal();
      Store.emitEEListener();
      break;
    }
    case 'DECREASE': {
      Store.decrease(action.payload);
      Store.countTotal();
      Store.emitEEListener();
      break;
    }
    case 'REMOVE_ITEM': {
      Store.removeItem(action.payload);
      Store.countTotal();
      Store.emitEEListener();
      break;
    }
  }
});

let Store = new TestStore();

export default Store;

