import Card from "./card";

const ListNotes = ({ label, notes, setNotes }) => {
  return (
    <section>
      <h2 className="">{label}</h2>
      {notes.length === 0 ? (
        <p className="">Tidak ada catatan.</p>
      ) : (
        <div className="">
          {notes?.map((note) => (
            <Card key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ListNotes;
