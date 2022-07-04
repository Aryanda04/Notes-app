import Input from "./input";

const Navbar = ({ search, updateQuery }) => {
  return (
    <header className="">
      <h1 className="">Rey&apos;s Note</h1>
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
