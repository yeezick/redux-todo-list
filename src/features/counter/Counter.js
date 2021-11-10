import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export default function CounterSlice() {
  // use selector selects which state you want to use
  const count = useSelector((state) => state.counter.value);
  // dispatch is what send your selected action to be received and reacted on by the redux-store
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
