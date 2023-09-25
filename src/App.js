import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Zomato/Layout.js';
import Home from './Zomato/Home.js';
import Namakkal from './Zomato/Namakkal.js';
import Saravanabhavan from './Zomato/Saravanabhavan.js';
import Freshbakery from './Zomato/Freshbakery.js';
import Kitchenclub from './Zomato/Kitchenclub.js';

export default function App ()
{
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='namakkal' element={<Namakkal />} />
            <Route path='saravanabhavan' element={<Saravanabhavan />} />
            <Route path='freshbakery' element={<Freshbakery />} />
            <Route path='kitchenclub' element={<Kitchenclub />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }