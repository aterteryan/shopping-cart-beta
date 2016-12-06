import Dispatcher from '../Dispatcher/TestDispatcher';

export let Actions = {
  removeItem: function(key) {
    Dispatcher.dispatch({
      type: 'REMOVE_ITEM',
      payload: key
    }); 
  },
  increase: function(key) {
    Dispatcher.dispatch({
      type: 'INCREASE',
      payload: key
    }); 
  },
  decrease: function(key) {
    Dispatcher.dispatch({
      type: 'DECREASE',
      payload: key
    }); 
  }
};