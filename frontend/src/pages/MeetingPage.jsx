// Meeting page
// TODO: Implement meeting room with video/audio controls
import React from "react";

const Meeting = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Meeting Room</h1>

      {/* Video Section */}
      <div style={styles.videoContainer}>
        <div style={styles.videoBox}>Your Video</div>
        <div style={styles.videoBox}>Participant</div>
      </div>

      {/* Controls */}
      <div style={styles.controls}>
        <button style={styles.btn}>🎤 Mute</button>
        <button style={styles.btn}>📷 Camera</button>
        <button style={styles.btn}>🖥 Share Screen</button>
        <button style={styles.endBtn}>❌ End Call</button>
      </div>

      {/* Chat Section */}
      <div style={styles.chatBox}>
        <h3>Chat</h3>
        <div style={styles.messages}>
          <p><strong>User:</strong> Hello 👋</p>
          <p><strong>Admin:</strong> Hi, meeting started!</p>
        </div>

        <input
          type="text"
          placeholder="Type a message..."
          style={styles.input}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    background: "#f1f5f9",
    minHeight: "100vh"
  },
  heading: {
    marginBottom: "20px"
  },
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px"
  },
  videoBox: {
    width: "300px",
    height: "200px",
    background: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px"
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px"
  },
  btn: {
    padding: "10px 15px",
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  endBtn: {
    padding: "10px 15px",
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  chatBox: {
    maxWidth: "500px",
    margin: "0 auto",
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  messages: {
    height: "100px",
    overflowY: "auto",
    marginBottom: "10px",
    textAlign: "left"
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  }
};

export default Meeting;