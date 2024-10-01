import { useCounter } from "../hooks/useCounter"


export const CounterWithHook = () => {

    const {counter, increaseBy} = useCounter({initialValue: 1});

  return (
    <>
        <h3>Contador: <small>{ counter }</small></h3>
        <div>
            <button onClick={() => increaseBy(+1)}>+1</button>
            &nbsp;
            <button onClick={() => increaseBy(-1)}>-1</button>

        </div>
    </>
  )
}
