import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
        <div className="wrapperHdr">
            <div className="leftHdr">
                <Link to="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /></Link>
                <Link to="/movies/popular"><span>popular</span></Link>
                <Link to="/movies/top_rated"><span>top-rated</span></Link>
                <Link to="/movies/upcoming"><span>upoming</span></Link>
            </div>
            <div className="rightHdr">

            </div>
        </div>
    </div>
  )
}

export default Header
