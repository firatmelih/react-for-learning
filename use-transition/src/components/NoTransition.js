import { useState } from "react";
export default function NoTransition() {
  const LIST_SIZE = 9999;
  const [input, setInput] = useState("");
  const [listToRender, setList] = useState([]);
  const handleOnChange = (e) => {
    const list = [];
    setInput(e.target.value);
    for (let i = 0; i < LIST_SIZE; i++) {
      list.push(e.target.value);
    }
    setList(list);
  };
  return (
    <div className="App">
      <h4>BECAUSE WE DONT HAVE USETRANSITION INPUT IS LAGGING</h4>
      <h5>AND NO LOADING FEEDBACK AT ALL</h5>
      <input onChange={handleOnChange} value={input} type="name" />
      <ul>
        {listToRender.map((l, index) => (
          <li key={index}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
