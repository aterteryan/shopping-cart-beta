class TestDispatcher {
  constructor() {
    this._callbacks = {};
    this._id = 0;
  }

  register(listener) {
    let id = `CID ${this._id ++}`;
    this._callbacks[id] = listener;
    return id;
  }

  dispatch(action) {
    for (var i in this._callbacks) {
      this._callbacks[i](action);
    }
  }

}

let Dispatcher = new TestDispatcher();

export default Dispatcher;