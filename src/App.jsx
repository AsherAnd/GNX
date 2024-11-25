import Kendrick from "./assets/Kendrick-Lamar-GNX-Transparent2.png";

function App() {
  return (
    <>
      {/* <div className="noise"></div> */}
      <div className="title">GNX</div>
      <div className="image-container">
        <img
          id="Kendrick"
          src={Kendrick}
          alt="Kendrick-Lamar-GNX-Transparent"
        />
      </div>
      <div>
        <ul className="song-list">
          <li>
            <a href="https://open.spotify.com/track/5gOfC9UzZQzTyShqPMrpjT?si=d31eaf9634754e29">
              1. wacced out murals
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/track/0nj9Bq5sHDiTxSHunhgkFb?si=9b074fffb99e41da"
              className="song-link"
            >
              2. squabble up
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/track/45J4avUb9Ni0bnETYaYFVJ?si=c0f4ae6e4145456a"
              className="song-link"
            >
              3. luther
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://open.spotify.com/track/5ho7VSXSmI2KM2nDjcnLyz?si=979e518e893e4351"
              className="song-link"
            >
              4. man at the garden
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/track/5S8VwnB4sLi6W0lYTWYylu?si=3e12077fd0a143ae"
              className="song-link"
            >
              5. hey now
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/track/0RgjEkSbeuStKfT2Pa4Zai?si=62ea7f4a390c4039"
              className="song-link"
            >
              6. reincarnated
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/track/0aB0v4027ukVziUGwVGYpG?si=c4dd61941a894d3d"
              className="song-link"
            >
              7. tv off
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/track/4K1Pg0FLno1ltzX3jeqT83?si=f991c8c5c2614aaf"
              className="song-link"
            >
              8. dodger blue
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/track/2Uts1QFB4u2YNIMiqcb4de?si=e8b18b37255a4be8"
              className="song-link"
            >
              9. peekaboo
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/track/1SGvjfc85yzqKXsfKcCxn2?si=d7466c93fd444f67"
              className="song-link"
            >
              10. heart pt.6
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/track/3aZptNYC6Z1YoumeqZcDcQ?si=14c7a0edd9ee4262"
              className="song-link"
            >
              11. gnx
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/track/0wgOhYnqZKjOHr6bmdz0aN?si=34fbba78c71049c0"
              className="song-link"
            >
              12. gloria
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
