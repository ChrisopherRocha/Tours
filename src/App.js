import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import './App.css';
import Tours from './components/Tours';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const url = "https://course-api.com/react-tours-project"

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours)
    } catch (e) {
      console.log(e)
    }
    setIsLoading(false)
  }


  useEffect(() => {
    fetchTours()
  }, [])


  if(isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <h1>Tours Project</h1>
      <main>
        <Tours tours={tours} />
      </main>
    </>
  );
}

export default App;