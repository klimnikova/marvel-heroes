import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import Main from './features/Main/Main';
import Hero from './features/Hero/Hero';

function App() {
  const renderPages = () => (
    <Routes>
      <Route path='*' element={<p>NOT FOUND</p>} />
      <Route path='/' element={<Main />} />
      <Route path='/heroes/:id' element={<Hero />} />
    </Routes>
  );
  return <BrowserRouter>{renderPages()}</BrowserRouter>;
}

export default App;
