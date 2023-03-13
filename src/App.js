import "./App.css";
import { useState } from "react";
function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const [currentDay] = useState(
    new Date().toLocaleString("en-US", { weekday: "long" })
  );
  const handleCheck = (id) => {
    setToDos(
      toDos.map((obj) => {
        if (obj.id === id) {
          return { ...obj, status: !obj.status };
        }
        return obj;
      })
    );
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentDay} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>{
             if(toDo.trim()===''){
              alert("Please enter a todo item");
             }else{
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
             }}
            }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div key={obj.id} className="todo">
              <div className="left">
                <input
                  onChange={() => handleCheck(obj.id)}
                  checked={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p style={{ textDecoration: obj.status ? "line-through" : "" }}>
                  {obj.text}
                </p>
              </div>
              <div className="right">
                <i
                  onClick={(e) => {
                    setToDos(
                      toDos.filter((obj2) => {
                        return obj2.id !== obj.id;
                      })
                    );
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
        <h2 style={{ marginTop: "2rem", borderBottom: "2px solid white" }}>
          Completed Tasks
        </h2>
        {toDos.map((obj) => {
          if (obj.status) {
            return (
              <div key={obj.id} className="completed">
                <h4>{obj.text}--({new Date().toLocaleDateString()})</h4>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
export default App;
