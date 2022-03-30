import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './componentes/Details/Details';
import Header from './componentes/Header/Header';
import Home from './componentes/Home/Home';
import Meals from './componentes/Meals/Meals';
import NotFound from './componentes/NotFound/NotFound';

function App() {
  return (
    <div className="App bg-gray-900 py-4">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home/:idMeal' element={<Details />}></Route>
        <Route path='/meals' element={<Meals />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
