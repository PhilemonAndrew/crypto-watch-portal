function Dashboard() {
  return (
    <div className="page">

      <h1>📊 CryptoWatch Live Analytics Portal</h1>

      <p className="subtitle">
        Monitor market trends and cryptocurrency performance in real time.
      </p>

      <div className="stats-container">

        <div className="stat-card">
          <h2>₿</h2>
          <h3>5</h3>
          <p>Tracked Coins</p>
        </div>

        <div className="stat-card">
          <h2>📈</h2>
          <h3>24/7</h3>
          <p>Market Monitoring</p>
        </div>

        <div className="stat-card">
          <h2>⚡</h2>
          <h3>Live</h3>
          <p>Auto Refresh</p>
        </div>

      </div>

      <div className="card">

        <h2>Project Overview</h2>

        <p>
          CryptoWatch is a cryptocurrency analytics portal developed with
          React Router and React Lifecycle Hooks. It demonstrates component
          mounting, updating and cleanup while displaying cryptocurrency
          market information.
        </p>

      </div>

      <div className="card">

        <h2>Technologies Used</h2>

        <ul>

          <li>React JS</li>

          <li>React Router DOM</li>

          <li>useState()</li>

          <li>useEffect()</li>

          <li>JavaScript ES6</li>

          <li>CSS3</li>

        </ul>

      </div>

    </div>
  );
}

export default Dashboard;