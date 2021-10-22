function App() {
  const redux = require("redux");
  const createStore = redux.createStore;
  const Buy_Books = "Buy_Books";
  const Buy_Pens ="Buy_Pens";
  const initialState = {
    numberOfBooks: 10,
    numberOfPens : 5,
  };
  function BuyBooks() {
    return {
      type: Buy_Books,
      info: "First Redux Code",
    };
  }
  function BuyPens() {
    return {
      type: Buy_Pens,
      info: "First Redux Code Pen",
    };
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "Buy_Books":
        return {
          ...state,
          numberOfBooks: state.numberOfBooks - 1,
        };
        case "Buy_Pens" : return{
          ...state,
          numberOfPens : state.numberOfPens-1
        }
      default:
        return state;
    }
  };
  const store = createStore(reducer);
  console.log("initial state value", store.getState());
  const unsubscribe = store.subscribe(() => {
    console.log("state value updated ", store.getState());
  });
  store.dispatch(BuyBooks());
  store.dispatch(BuyPens());
  unsubscribe();
  return (
    <div>
      <h1>Redux App</h1>
    </div>
  );
}

export default App;
