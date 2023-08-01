import React from "react";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
const Home = (props) => {
  const [state, setState] = React.useState("");
  const searchDoggyDon = (e) => {
    e.preventDefault();
    props.history.push({ pathname: "/search", state });
  };

  const imageSearch = (e) => {
    setState(`${state} :image`);
    props.history.push({ pathname: "/search", state });
  };
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__logo">
          <img src="/images/DoggyDonLogo.png" alt="Logo" />
        </div>
        <form className="home__form" onSubmit={searchDoggyDon}>
          <input
            type="text"
            className="home__input"
            onChange={(e) => setState(e.target.value)}
            value={state}
            required
            placeholder="Search......"
          />
          <div className="home__group">
            <input type="submit" className="home__btn" value="Search" />
          </div>

          <div className="home__group">
            {/* <input type="butt" className="home__btn" value="Search" /> */}
            <button className="home__btn" onClick={imageSearch} >Image Search</button>
          </div>

          <FaSistrix className="search__icon" />
          <FaMicrophone className="microphone" />
        </form>
      </div>
    </div>
  );
};

export default Home;
