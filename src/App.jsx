import { useEffect, useState } from 'react'
import CardList from './components/card-list'
import Searchbar from './components/searchbar'
import './App.css'


function App() {
  
  const [user, setUser] = useState([])
  const [searchedUsers, setSearchedUsers] = useState(user)
  const [searchField, setSearchField] = useState('')

  //API call to retrieve user data
  useEffect(() => {
      fetch('https://random-data-api.com/api/v2/users?response_type=json&size=21')
          .then(response => response.json())
          .then(data => setUser(data))
  
  }, [])

  //Check for searchterm in the user state when searchRobots function fires
  //This creates a new array of searchedUsers when the user state changes
  //This would fire when the dependencies (user or searchfield) change
  useEffect(() => {
      setSearchedUsers(
        user.filter(eachUser => {
          return eachUser.first_name
                .toLowerCase()
                .includes(searchField) ||

                eachUser.last_name
                .toLowerCase()
                .includes(searchField)
          
          //The return field above searches by first or last name. Other fields
          //can be implemented as well (e.g email, phone number etc)
        })
      )
  }, [user, searchField])

  //Function to enable Search
  function searchRobots(event) {
    const searchterm = event.target.value.toLowerCase()
    setSearchField(searchterm)
  }

  return (
    <div className="App">
      <h1 className='header-title'>Choose Your RoboBuddy!</h1>

      <Searchbar 
        handleChange={searchRobots}
      />
      <CardList user={searchedUsers} />

      {/* The cardlist component above previously had a user={user} prop
          but this was changed to user={searchedUsers} to accomodate the 
          search function as the search function is dependent on the original
          user state.

          This allows the entire page to re-render with the filtered component
          while also keeping the original array of users in the user state
      */}
    </div>
  )
}

export default App
