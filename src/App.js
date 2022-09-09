import { useEffect } from 'react';
import { useState } from 'react';


import './App.css';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      const results = await fetchResults();
      setData(results);
      // console.log(results);
    }
    getResults();
  }, []);


  const fetchResults = async () => {
    const res = await fetch(`https://api.spacexdata.com/v4/launches/`);
    const data = await res.json();
    return data;
  }

  const filterResults = async () => {
    const x = data.slice(0, 20);
    setFilteredData(x);
    console.log(filteredData);
  }

  return (
    <div>
      <div className="container">
        <SearchForm getResults={filterResults} />
        <SearchResults results={filteredData}/>
      </div>
    </div>
  );
}

export default App;
