import React from 'react';
import Rows from './Rows';
import requests from './requests';
import Banner from './Banner';
import Shows from './Shows';
import Movies from './Movies';
import "./App.css"
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={
        <>
          <Banner/>
          <Rows
            title="Top 10 Movies in India Today"
            fetchlink={requests.fetchTrending}
            isLargeRow 
          />
          <Rows
            title="Binge-Worthy US TV shows"
            fetchlink={requests.fetchUpComing}
          />
          <Rows
            title="New Realeases"
            fetchlink={requests.fetchTopRted}
          />
          <Rows
            title="Indian Movies"
            fetchlink={requests.fetchUpComing}
          />
            <Rows
            title="Critically Acclaimed TV show"
            fetchlink={requests.fetchTrending}
          />
          <Rows
            title="Hindi Movies & TV"
            fetchlink={requests.fetchTopRted}
          />
          <Rows
            title="Emotional TV Dramas"
            fetchlink={requests.fetchTrending}
          />
          <Rows
            title="TV Sci-Fi & Fantasy"
            fetchlink={requests.fetchUpComing}
          />
          <Rows
            title="Top Searches"
            fetchlink={requests.fetchTopRted}
          />
          <Rows
            title="Telugu Language Dramas"
            fetchlink={requests.fetchUpComing}
          />
          <Rows
            title="Crime & Thriller Movies"
            fetchlink={requests.fetchTrending}
          />
        </>
        }/>

<Route path='/shows' element={
        <>
          <Shows
            title="Trending Now"
            fetchlink={requests.fetchTrending}
            firstRow
          />
          <Shows
            title="TV Thrillers & Mysteries"
            fetchlink={requests.fetchUpComing}
          />
          <Shows
            title="Sitcoms"
            fetchlink={requests.fetchAiringToday}
          />
          <Shows
            title="High School Drama"
            fetchlink={requests.fetchAiringToday}
          />
          <Shows
            title="Familiar TV Favourites"
            fetchlink={requests.fetchUpComing}
          />
          <Shows
            title="Gal Pal TV Shows"
            fetchlink={requests.fetchAiringToday}
          />
          <Shows
            title="Indian TV Dramas"
            fetchlink={requests.fetchAiringToday}
          />
          <Shows
            title="US TV Shows"
            fetchlink={requests.fetchUpComing}
          />
          <Shows
            title="Top 10 Shows in India Today"
            fetchlink={requests.fetchAiringToday}
          />
          <Shows
            title="K-Dramas"
            fetchlink={requests.fetchAiringToday}
          />
          <Shows
            title="Retro TV"
            fetchlink={requests.fetchUpComing}
          />
          <Shows
            title="Only on Netflix"
            fetchlink={requests.fetchAiringToday}
          />
          <Shows
            title="Made in India"
            fetchlink={requests.fetchAiringToday}
          />
          <Shows
            title="US TV Shows Dubbed in Hindi"
            fetchlink={requests.fetchUpComing}
          />
          <Shows
            title="Top Picks"
            fetchlink={requests.fetchAiringToday}
          />
          <Shows
            title="TV Comedies"
            fetchlink={requests.fetchAiringToday}
          />
          <Shows
            title="New Releases"
            fetchlink={requests.fetchUpComing}
          />
          <Shows
            title="Horror"
            fetchlink={requests.fetchAiringToday}
          />
          <Shows
            title="A-Rated"
            fetchlink={requests.fetchAiringToday}
          />
        </>
        }/>
        




        <Route path='/movies' element={
        <>
          <Banner/>
          <Movies
            title="Popular"
            fetchlink={requests.fetchTrending}
          />
          <Movies
            title="Indian Movies"
            fetchlink={requests.fetchUpComing}
          />
          <Movies
            title="Top 10 Movies in India Today"
            fetchlink={requests.fetchAiringToday}
          />
          <Movies
            title="Sci-Fi & Fantasy"
            fetchlink={requests.fetchAiringToday}
          />
          <Movies
            title="Spicy Romance"
            fetchlink={requests.fetchUpComing}
          />
          <Movies
            title="Horror"
            fetchlink={requests.fetchAiringToday}
          />
          <Movies
            title="Suspense Thrillers"
            fetchlink={requests.fetchAiringToday}
          />
          <Movies
            title="Oscar Winning "
            fetchlink={requests.fetchUpComing}
          />
          <Movies
            title="Popular"
            fetchlink={requests.fetchAiringToday}
          />
          <Movies
            title="Top Rated"
            fetchlink={requests.fetchAiringToday}
          />
          <Movies
            title="Romantic Movies"
            fetchlink={requests.fetchUpComing}
          />
          <Movies
            title="Bollywood Movies"
            fetchlink={requests.fetchAiringToday}
          />
          <Movies
            title="Telugu Movies"
            fetchlink={requests.fetchAiringToday}
          />
          <Movies
            title="Adventure Movies"
            fetchlink={requests.fetchUpComing}
          />
          <Movies
            title="Tamil Language Movies"
            fetchlink={requests.fetchAiringToday}
          />
          <Movies
            title="Award Winning Movies"
            fetchlink={requests.fetchAiringToday}
          />
          <Movies
            title="Only on Netflix"
            fetchlink={requests.fetchUpComing}
          />
          <Movies
            title="Netflix Originals"
            fetchlink={requests.fetchAiringToday}
          />
          <Movies
            title="A-Rated"
            fetchlink={requests.fetchAiringToday}
          />
        </>
        }/>
        
      </Routes>
    </div>
  );
}

export default App;
