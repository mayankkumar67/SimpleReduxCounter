import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="cell">
        <span
          className="button"
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          -
        </span>
        <span className="text">{count}</span>
        <span
          className="button"
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          +
        </span>
      </div>
    </div>
  );
}

export default App;
