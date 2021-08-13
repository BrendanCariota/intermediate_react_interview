import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const BASE_URL = 'https://randomuser.me/api/?results=20'

  const [users, setUsers] = useState([])

  const fetchData = () => {
    return axios.get(BASE_URL)
      .then(({ data }) => {
        return data.results
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchData()
      .then((data) => {
        setUsers(data)
      })
  }, [])

  console.log(users)

  return (
    <div className="App">
      <h1>Interview</h1>
    </div>
  );
}

export default App;
