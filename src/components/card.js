// import style from "../styles/card.module.css";
import { showFormattedDate } from "../utils";
import Button from "./button";

const Card = ({ id, title, createdAt, body, archived, action }) => {
  const deleteNote = (item) =>
    action((notes) => notes.filter((note) => note.id !== item));
  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  return (
    <article id={id} className="notes_card">
      <div className="">
        <h3 className="">{title}</h3>
        <small className="">{showFormattedDate(createdAt)}</small>
        <p className="">{body}</p>
      </div>
      <footer className="">
      {/* <button
      className="`  "
      type="button"
      onClick={deleteNote(id)}
      data-action="delete"
    >
      delete
    </button> */}
    {/* <button
      className="`  "
      type="button"
      onClick={toggleArchive(id)}
      data-action="archive"
      label={archived ? "unarchived" : "archive"}
    >
      archive
    </button > */}
        <Button eventHandler={() => deleteNote(id)} label="delete" />
        <Button
          eventHandler={() => toggleArchive(id)}
          label={archived ? "unarchived" : "archive"}
        />
      </footer>
    </article>
  );
};

export default Card;
