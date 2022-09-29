// import logo from './logo.svg';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Details from './components/Details';
import EmpData from './components/EmpData';
import Home from './components/Home';
import NavComp from './components/NavComp';
import PageNotFound from './components/PageNotFound';
import { Card } from 'react-bootstrap'
import AddData from './components/AddData';


const App = () => {
  return (
    <Fragment>
      <h2 class="mycl1">Wellcome You All In React Session</h2>
      <BrowserRouter>
        <Card className="text-center">
          <Card.Header>
            <NavComp />
          </Card.Header>
          <Card.Body>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/details" element={<Details />} />
              <Route path="/empData" element={<EmpData />} />
              <Route path="/addData" element={<AddData />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Card.Body>
          <Card.Footer className="text-muted">
            This app designed and developed by : <strong>Shubham V. Gaikwad</strong>
          </Card.Footer>
        </Card>


      </BrowserRouter>

    </Fragment>
  );
}

export default App;
