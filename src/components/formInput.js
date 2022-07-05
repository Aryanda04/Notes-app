import { useState } from "react";
import Input from "./input";
// import style from "../styles/form-input.module.css";

const FormInput = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      {
        id: timestamp,
        title,
        body: note,
        archived: false,
        createdAt: timestamp,
      },
    ]);
  };

  return (
    <form className="formInput" onSubmit={createNote}>
      <h2>Create a note</h2>
      <p>
        Remaining characters: <span className="">{50 - title.length}</span>
      </p>
      <Input
        value={title}
        onChange={setTitle}
        type="text"
        placeholder="Title"
        id="title"
        name="title"
        required
      />
      <Input
        value={note}
        onChange={setNote}
        type="textarea"
        placeholder="Write your note"
        id="note"
        name="note"
        required
      />
      <Input type="submit" id="submit_form" name="submit_form" value="Create" />
    </form>
  );
};

export default FormInput;
