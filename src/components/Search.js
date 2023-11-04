import { useState } from "react"

const Search = () => {
  const [searchText, setSearchText]=useState('');
  return (
    <div className="search">
      <input type="text"  className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value);
      console.log(e) }} />
      <button onClick={()=>console.log(searchText)}>Search</button>
    </div>
  )
}

export default Search
//whenever state variables updates, react triggers a reconcilliation cycle 