import './App.css';
import harvard from './harvard.png';
import MediaCard from './MediaCard';
import Gate from './Gate';


export default function App() {
  return (
    <div className="App">
      <MediaCard title="This is CS50" body={<p> <b>Harvard University's</b> Introduction to the Intellectual Enterprises Of <b>Computer Science</b></p>} imgUrl={harvard}/>
      <Gate isOpen={false}/>
    </div>
  );
}
