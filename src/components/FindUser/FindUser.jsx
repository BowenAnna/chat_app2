import { useState } from "react";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";

const FindUser = ({ onSelectUser }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null); 

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/users?search=${searchQuery}`);
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      if (data.length > 0) {
        setSearchResults(data[0]); 
      } else {
        setSearchResults(null); 
      }
    } catch (error) {
      console.error("Error searching for users:", error);
      setSearchResults(null); 
    }
  };

  const handleSelectUser = () => {
    if (searchResults) {
      onSelectUser(searchResults);
      setSearchQuery("");
      setSearchResults(null); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <MDBInput
          wrapperClass="mb-3"
          label="Search for user by username or email"
          id="search"
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <MDBBtn color="primary" type="submit">
          Search
        </MDBBtn>
      </form>
      
      {searchResults && (
        <div className="mt-3">
          <h5>Search Result:</h5>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{searchResults.username}</h5>
              <p className="card-text">Email: {searchResults.email}</p>
              <MDBBtn color="success" size="sm" onClick={handleSelectUser}>
                Chat
              </MDBBtn>
            </div>
          </div>
        </div>
      )}
      {searchResults === null && (
        <p>No user found with the given search query.</p>
      )}
    </div>
  );
};
export default FindUser;
