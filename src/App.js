import { useState } from 'react';
import './App.css';
import { Row } from './Row';
import request from './request';
import { Banner } from './Banner';
import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow = {true}/>
      <Row title="Treding Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries " fetchUrl={request.fetchDocumentaries} />

    </div>
  );
}

export default App;
