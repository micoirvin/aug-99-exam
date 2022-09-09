const SearchResult = ({ details }) => {
  return (
    <li className="search-result">
      <img src={details.links.patch.small} />
      <div>
        <h3>{details.flight_number}: {details.name} ({(new Date(details.date_utc)).getFullYear()}) </h3>
        <p>
          Details: {details.details}
        </p>
      </div>
    </li>
  )
}

export default SearchResult