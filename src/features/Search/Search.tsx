import Form from 'react-bootstrap/Form';

const Search = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}) => {
  return (
    <div>
      <Form.Label htmlFor='inputPassword5'>
        Enter hero name for search
      </Form.Label>
      <Form.Control
        id='search-input'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
