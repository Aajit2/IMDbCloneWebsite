import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";
function App() {
  return (
    <div className="app" style={{backgroundColor:"black"}}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="movie/:id" element={<MovieDetails/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path="/*" element={<h1>error 404 page not found</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
