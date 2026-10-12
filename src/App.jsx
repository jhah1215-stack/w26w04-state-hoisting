import './App.css'
import { useState } from 'react'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div>
      {/* 부모가 상태와 변경 함수를 관리하여 내려줌 */}
      <Counter count={count1} onIncrement={() => setCount1(prev => prev + 1)} />
      <Counter count={count2} onIncrement={() => setCount2(prev => prev + 1)} />
    </div>
  )
}

// 자식은 상태를 직접 만들지 않고 받은 것(props)을 보여주기만 함 (Stateless)
function Counter({ count, onIncrement }) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={onIncrement}>증가</button>
    </div>
  )
}

export default App
