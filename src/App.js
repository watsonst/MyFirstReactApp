import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore React'/>
    </div>
  );//html that is tranformed to standard JS. Have to us JS syntax like class vs className
}

export default App; //app is a react compmonent, can be used as html element as in index.
