import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import './App.css';
import Tours from './components/Tours';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const url = "https://course-api.com/react-tours-project"

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }


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

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <h1>Tours Project</h1>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
}

export default App;