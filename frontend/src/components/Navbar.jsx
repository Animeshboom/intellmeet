// components/Navbar.jsx
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>IntellMeet</h2>

      <div style={styles.links}>
        <button style={styles.btn} onClick={() => navigate("/dashboard")}>
          Dashboard
        </button>

        <button style={styles.btn} onClick={() => navigate("/meeting")}>
          Meeting
        </button>

        <button style={styles.logout} onClick={handleLogout}>
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
    alignItems: "center",
    padding: "15px 30px",
    background: "#0f172a",
    color: "#fff",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  btn: {
    padding: "8px 14px",
    background: "#1e293b",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  logout: {
    padding: "8px 14px",
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Navbar;