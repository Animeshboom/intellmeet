import { useState } from 'react';

export default function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');

  const checkBackend = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/health');
      const data = await response.json();
      setBackendStatus(data.status);
    } catch (error) {
      setBackendStatus('Backend not running');
    }
  };

  return (
    <div className="container">
      <h1>IntelMeet</h1>
      <p>Frontend is running!</p>
      <button onClick={checkBackend}>Check Backend</button>
      <p className="status">{backendStatus}</p>
    </div>
  );
}
