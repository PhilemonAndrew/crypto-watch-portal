import { useState } from "react";

function Settings() {

  const [theme, setTheme] = useState("Dark");

  const [currency, setCurrency] = useState("USD");

  return (

    <div className="page">

      <h1>⚙ Settings</h1>

      <div className="card">

        <h2>Display Theme</h2>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >

          <option>Dark</option>

          <option>Light</option>

        </select>

        <p style={{marginTop:"15px"}}>

          Current Theme:

          <strong> {theme}</strong>

        </p>

      </div>

      <div className="card">

        <h2>Preferred Currency</h2>

        <select
          value={currency}
          onChange={(e)=>setCurrency(e.target.value)}
        >

          <option>USD</option>

          <option>EUR</option>

          <option>GBP</option>

          <option>NGN</option>

        </select>

        <p style={{marginTop:"15px"}}>

          Selected Currency:

          <strong> {currency}</strong>

        </p>

      </div>

      <div className="card">

        <h2>About</h2>

        <p>

          This page demonstrates React State by allowing
          users to update application preferences.

        </p>

      </div>

    </div>

  );
}

export default Settings;