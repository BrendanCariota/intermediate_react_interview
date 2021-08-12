import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const BASE_URL = 'https://randomuser.me/api/?results=20'

  const [dataHolder, setDataHolder] = useState('')

  const fetchData = () => {
    return axios.get(BASE_URL)
      .then(({ data }) => {
        console.log(data.results)
        return data.results
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    const data = fetchData()
    console.log(data)
    setDataHolder(JSON.stringify(data))
  }, [])

  return (
    <div className="App">
      <h1>Interview</h1>
      <p>{dataHolder}</p>
    </div>
  );
}

export default App;
