import SearchResult from "./SearchResult"

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <ul className="search-results">
        {results.map((result) => {
          return (<SearchResult details={result} key={result.id}/>)
        })}
    </ul>
  )
}

export default SearchResults