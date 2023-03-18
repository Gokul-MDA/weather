import { TextField, Button } from "@mui/material";

interface Iprops {
  query: string;
  setQuery: (e: any) => void;
  getWeather: () => void;
}

const Search: React.FC<Iprops> = ({ query, setQuery, getWeather }) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getWeather();
        }}
        className="search"
      >
        <TextField
          id="location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          label="Enter Location"
          variant="outlined"
        />
        <Button type="submit" className="searchtxt">
          Search
        </Button>
      </form>
    </>
  );
};

export default Search;
