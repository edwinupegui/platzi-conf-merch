import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import NotFound from '../containers/NotFound'
import Payment from '../containers/Payment'
import Success from '../containers/Success'
import Layout from '../components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/checkuot' element={<Checkout/>} />
          <Route path='/checkuot/information' element={<Information/>} />
          <Route path='/checkout/payment' element={<Payment/>} />
          <Route path='/checkout/success' element={<Success/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;