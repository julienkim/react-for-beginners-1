import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((curArray) => [toDo, ...curArray]);
    setToDo("");
    console.log(toDo, "inside onSubmit");
  };

  console.log(toDo, "outside onSubmit");
  console.log("toDos : ", toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
      </form>
    </div>
  );
}

export default App;
