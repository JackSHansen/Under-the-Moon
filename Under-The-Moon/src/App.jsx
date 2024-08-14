import './assets/scss/main.scss';

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      <nav className="navbar">
        <ul>
          <li><a href="#">HJEM</a></li>
          <li><a href="#">KONCEPTER</a></li>
          <li><a href="#">UTM LOYALTY</a></li>
          <li><a href="#">OM</a></li>
          <li><a href="#">KONTAKT</a></li>
        </ul>
      </nav>
      <header className="header">
        <img src="./src/assets/images/headerImage.avif" alt="headerImage" />
        <h1>Under The Moon</h1>
        <div className="overlay">
        <h2>HAIRSTYLING OG FRISØR</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis voluptatibus nihil totam, nisi facilis molestiae neque aliquid dolore asperiores vel, tempore eius, blanditiis nesciunt? Iusto reiciendis necessitatibus tempore itaque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis voluptatibus nihil totam, nisi facilis molestiae neque aliquid dolore asperiores vel, tempore eius, blanditiis nesciunt? Iusto reiciendis necessitatibus tempore itaque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis voluptatibus nihil totam, nisi facilis molestiae neque aliquid dolore asperiores vel, tempore eius, blanditiis nesciunt? Iusto reiciendis necessitatibus tempore itaque!
        </p>
    </div>
       </header>
    </>
  );
}

export default App;
