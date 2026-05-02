// Dashboard page
// TODO: Show user's meetings and options to join/create
import React from "react";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dashboard</h1>

      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>Total Employees</h3>
          <p>120</p>
        </div>

        <div style={styles.card}>
          <h3>Meetings Today</h3>
          <p>8</p>
        </div>

        <div style={styles.card}>
          <h3>Tasks Pending</h3>
          <p>15</p>
        </div>

        <div style={styles.card}>
          <h3>Revenue</h3>
          <p>₹50,000</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    background: "#f1f5f9",
    minHeight: "100vh"
  },
  heading: {
    marginBottom: "20px"
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px"
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center"
  }
};

export default Dashboard;