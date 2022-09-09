const SearchForm = ({ getResults }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    
    console.log(e);
    if(!e.target[0].value) {
      alert("Please add a search keyword");
      return;
    }
    console.log(e.target[0].value);
    getResults(e.target[0].value);

  }

  return (
      <form className="search-form-container" onSubmit={onSubmit}>
        <div className="form-control">
          <input type="text" placeholder="Enter keywords" />
        </div>
      </form>
  )
}

export default SearchForm