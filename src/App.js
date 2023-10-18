import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Searchbar from './components/Searchbar';
import Dashboard from './Layouts/Dashboard';
import Event from './Layouts/Event';
function App() {
  return (
    <div className="bg-[url('https://thomso.in/static/media/eventback2.7bc89df549ae88406a96.webp')] -z-40">
    <Navbar></Navbar>
    <Searchbar></Searchbar>
    <Card></Card>
    </div>
  )
};

export default App;
