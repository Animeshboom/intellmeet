// components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // clear storage
    navigate("/login");   // redirect
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>IntellMeet</h2>

      <div style={styles.links}>
        <button onClick={() => navigate("/dashboard")} style={styles.btn}>
          Dashboard
        </button>

        <button onClick={() => navigate("/meeting")} style={styles.btn}>
          Meeting
        </button>

        <button onClick={handleLogout} style={styles.logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#1e293b",
    color: "#fff",
    alignItems: "center"
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "10px" },
  btn: {
    padding: "8px 12px",
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  logout: {
    padding: "8px 12px",
    background: "#ef4444",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }
};

export default Navbar;