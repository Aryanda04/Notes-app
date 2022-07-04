import { useState, useEffect } from "react";
import FormInput from "./components/formInput";
import Navbar from "./components/navbar";
import ListNotes from "./components/listNotes";
// import style from "./styles/app.module.css";
import { getInitialData } from "./utils";

function NotesApp() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <>
      <Navbar search={query} updateQuery={setQuery} updateNotes={setNotes} />
      <main className="">
        <FormInput updateNotes={setNotes} />
        <ListNotes
          label="Active Notes"
          notes={activeNotes}
          setNotes={setNotes}
        />
        <ListNotes
          label="Archived Notes"
          notes={archivedNotes}
          setNotes={setNotes}
        />
      </main>
    </>
  );
}

export default NotesApp;
