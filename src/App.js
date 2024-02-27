import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const url = "https://course-api.com/react-tours-project"

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      console.log(tours)
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    fetchTours()
  }, [])

  return (
    <h1>Tours Project</h1>
  );
}

export default App;