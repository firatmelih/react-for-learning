import { useState, useTransition } from "react";
export default function NoTransition() {
  const LIST_SIZE = 9999;
  const [input, setInput] = useState("");
  const [listToRender, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const handleOnChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const list = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        list.push(e.target.value);
      }
      setList(list);
    });
  };
  return (
    <div className="App">
      <h4>INPUT IS NOT LAGGING BECAUSE WE HAVE USETRANSITION</h4>
      <h5>AND WE GOT LOADING FEEDBACK</h5>
      <input onChange={handleOnChange} value={input} type="name" />
      {isPending ? (
        <h1>loading</h1>
      ) : (
        <ul>
          {listToRender.map((l, index) => (
            <li key={index}>{l}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
