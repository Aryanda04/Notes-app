import Input from "./input";

const Navbar = ({ search, updateQuery }) => {
  return (
    <header>
      <h1 className="">Zhen`s Note</h1>
      <Input
        value={search}
        onChange={updateQuery}
        type="search"
        id="search_note"
        name="search_note"
        placeholder="Find notes..."
      />
    </header>
  );
};

export default Navbar;
