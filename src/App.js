import React, { useEffect, useState } from "react";
import List from "./components/List";

const App = () => {
  const [input, setInput] = useState('')
  const [task, setTask] = useState([])

  useEffect(() => {}, [])

  return(
    <main>
      <h1 className="title">CURD Operations</h1>
      <section className="input-holder">
        <input type="text" value={input} />
        {/* <input type="text" value={input} onChange={(e) => {e.target.value}} /> */}
        <button type="submit">Add Task</button>
      </section>
      <ul>
        <List task="This is manual task" />
      </ul>
    </main>
  )
}

export default App;