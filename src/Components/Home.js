import "../CSS/Home.css";

const Home = ({ res, handleClick }) => {
  return (
    <div className="home">
      <ul className="contacts">
        {res.length !== 0
          ? res.map((contact) => {
              return (
                <li key={contact.id} className="list-contact">
                  <p className="name">{contact.name}</p>
                  <p className="title">{contact.title}</p>
                  <button
                    onClick={() => {
                      handleClick(contact.id);
                    }}
                    className="deleter"
                  >
                    delete
                  </button>
                </li>
              );
            })
          : "No Contacts Available"}
      </ul>
    </div>
  );
};

export default Home;
