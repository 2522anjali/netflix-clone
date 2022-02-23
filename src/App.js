
import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title = "NETFLIX ORIGINALS" fetchUrl ={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title ="Trending Now" fetchUrl ={requests.fetchTrending}/>
      <Row title ="Top Rated" fetchUrl ={requests.fetchTopRated}/>
      <Row title ="Action Movies" fetchUrl ={requests.fetchTopActionMovies}/>
      <Row title ="Comedy Movies" fetchUrl ={requests.fetchTopComedyMovies}/>
      <Row title ="horror Movies" fetchUrl ={requests.fetchTopHorrorMovies}/>
      <Row title ="Romance Movies" fetchUrl ={requests.fetchTopRomanceMovies}/>
      <Row title =" Documentaries" fetchUrl ={requests.fetchTopDocumentaries}/>


    </div>
  );
}

export default App;
