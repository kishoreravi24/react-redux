import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/slice';

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button
        className="m-3 border bg-black text-white"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
    </div>

  )
}