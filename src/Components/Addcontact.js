import { useState } from "react";
import Home from "./Home";
import "../CSS/Addcontact.css";

const Add = () => {
  const [title, setTitle] = useState("add title");
  const [name, setName] = useState("add name");
  const [res, setRes] = useState([
    {
      id: Date.now(),
      title: "Frontend developer",
      name: "Amr",
      rate: 9.5,
    },
    {
      id: Date.now() + 1,
      title: "Backend developer",
      name: "Ali",
      rate: 7.6,
    },
    {
      id: Date.now() + 2,
      title: "Software developer",
      name: "Samir",
      rate: 8.5,
    },
  ]);

  const handleClick = (id) => {
    const newRes = res.filter((contact) => {
      return id !== contact.id;
    });
    setRes(newRes);
  };

  const addContact = () => {
    setRes([
      {
        title: title,
        name: name,
        id: Date.now(),
        rate: 10,
      },
      ...res,
    ]);
  };

  const [add, setAdd] = useState(true);

  return (
    <>
      <button onClick={() => setAdd(!add)} className="add-contact">
        {add ? "Add A Contact" : "Close"}
      </button>
      {add ? (
        ""
      ) : (
        <form action="">
          <input
            type="text"
            className="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addContact();
              setName("add name");
              setTitle("add title");
            }}
          >
            add
          </button>
        </form>
      )}
      <Home res={res} handleClick={handleClick} addContact={addContact} />
    </>
  );
};

export default Add;
