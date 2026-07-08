import { useEffect, useState } from "react";

function Trackers() {
  // Stores all cryptocurrencies
  const [coins, setCoins] = useState([]);

  // Loading message
  const [loading, setLoading] = useState(true);

  // Refresh interval selected by user
  const [refreshRate, setRefreshRate] = useState(5000);

  // Last refresh time
  const [lastUpdated, setLastUpdated] = useState("");

  // Function to simulate fetching cryptocurrency data
  const fetchCryptoData = () => {
    console.log("Fetching cryptocurrency data...");

    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const cryptoData = [
        {
          id: 1,
          name: "Bitcoin",
          price: "$67,500",
          volume: "$42 Billion",
        },
        {
          id: 2,
          name: "Ethereum",
          price: "$3,420",
          volume: "$18 Billion",
        },
        {
          id: 3,
          name: "BNB",
          price: "$610",
          volume: "$2.8 Billion",
        },
        {
          id: 4,
          name: "Solana",
          price: "$160",
          volume: "$4.1 Billion",
        },
        {
          id: 5,
          name: "Cardano",
          price: "$0.48",
          volume: "$950 Million",
        },
      ];

      setCoins(cryptoData);
      setLoading(false);
      setLastUpdated(new Date().toLocaleTimeString());
    }, 1000);
  };

  // Runs when page opens and whenever refresh rate changes
  useEffect(() => {
    console.log("Tracker Mounted");

    // Load data immediately
    fetchCryptoData();

    // Auto refresh
    const timer = setInterval(() => {
      console.log("Auto Refresh...");
      fetchCryptoData();
    }, refreshRate);

    // Cleanup when leaving the page
    return () => {
      clearInterval(timer);

      console.log(
        "Cleanup Complete - Timer Cleared Successfully"
      );
    };
  }, [refreshRate]);

  return (
    <div className="page">
      <h1>📈 Crypto Market Tracker</h1>

      <p>
        Live cryptocurrency analytics using React Lifecycle
        Hooks.
      </p>

      <br />

      <label>Refresh Every:</label>

      <select
        value={refreshRate}
        onChange={(e) =>
          setRefreshRate(Number(e.target.value))
        }
      >
        <option value={5000}>5 Seconds</option>
        <option value={10000}>10 Seconds</option>
        <option value={30000}>30 Seconds</option>
      </select>

      <p
        style={{
          marginTop: "15px",
          color: "gold",
          fontWeight: "bold",
        }}
      >
        Last Updated: {lastUpdated}
      </p>

      <br />

      {loading ? (
        <h2>Loading Crypto Data...</h2>
      ) : (
        <table className="crypto-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Market Price</th>
              <th>24 Hour Volume</th>
            </tr>
          </thead>

          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td>{coin.name}</td>

                <td>
                  <span
                    style={{
                      background: "#16a34a",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      display: "inline-block",
                    }}
                  >
                    {coin.price}
                  </span>
                </td>

                <td>
                  <span
                    style={{
                      background: "#2563eb",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      display: "inline-block",
                    }}
                  >
                    {coin.volume}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Trackers;