// Meeting page
// TODO: Implement meeting room with video/audio controls
const MeetingPage = () => {
  return (
    <div style={styles.container}>
      <h1>Meeting Room 🎥</h1>

      <div style={styles.layout}>
        {/* Video Section */}
        <div style={styles.video}>
          <p>Video Stream (Coming Soon)</p>
        </div>

        {/* Chat Section */}
        <div style={styles.chat}>
          <div style={styles.messages}>
            <p>Chat messages...</p>
          </div>

          <div style={styles.inputBox}>
            <input type="text" placeholder="Type message..." />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  layout: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },
  video: {
    flex: 2,
    height: "400px",
    background: "#0f172a",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
  chat: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: "#1e293b",
    borderRadius: "10px",
    padding: "10px",
    color: "#fff",
  },
  messages: {
    flex: 1,
    overflowY: "auto",
    marginBottom: "10px",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
  },
};

export default MeetingPage;