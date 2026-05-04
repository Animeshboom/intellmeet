import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Welcome to IntellMeet 🚀</h1>
      <p>Your AI-powered meeting workspace</p>

      <div style={styles.cards}>
        <div style={styles.card} onClick={() => navigate("/meeting")}>
          <h3>Create Meeting</h3>
          <p>Start a new smart meeting</p>
        </div>

        <div style={styles.card}>
          <h3>View Meetings</h3>
          <p>See past meetings (coming soon)</p>
        </div>

        <div style={styles.card}>
          <h3>AI Insights</h3>
          <p>Analyze meeting productivity</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  card: {
    width: "220px",
    padding: "20px",
    background: "#1e293b",
    color: "#fff",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default DashboardPage;