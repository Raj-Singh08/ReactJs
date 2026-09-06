import { useState } from "react";
import "./App.css";

function App() {
  const [heading, setHeading] = useState("");
  const [detail, setDetail] = useState("");
  const [notes, setNotes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Heading:", heading);
    console.log("Detail:", detail);
    setNotes([...notes,{heading:heading,detail:detail}]);
    // Clear the form
    setHeading("");
    setDetail("");
  }

  return (
    <div className="app">
      <h1>Notes App</h1>

      <form onSubmit={handleSubmit} className="note-form">
        <input
          type="text"
          placeholder="Note heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />

        <textarea
          placeholder="Note details"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          rows="5"
        />

        <button type="submit">Add Note</button>
      </form>
      <div className="notes">
        {notes.map((notes,index)=>(
          <div className="notes" key={index}>
            <h2>{notes.heading}</h2>
            <p>{notes.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;