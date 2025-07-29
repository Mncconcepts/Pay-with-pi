import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Passkey = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // success | error
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCode(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (code === '2339') {
      setAlertMessage('Passkey correct! Unlocking dashboard...');
      setAlertType('success');
      setLoading(true);

      setTimeout(() => {
        navigate('/admin');
      }, 2000);
    } else {
      setAlertMessage('❌ Invalid passkey. Please try again.');
      setAlertType('error');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Enter Passkey</h2>

        {alertMessage && (
          <div
            style={{
              ...styles.alert,
              backgroundColor: alertType === 'success' ? '#d4edda' : '#f8d7da',
              color: alertType === 'success' ? '#155724' : '#721c24',
              borderColor: alertType === 'success' ? '#c3e6cb' : '#f5c6cb',
            }}
          >
            {alertMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={code}
            onChange={handleChange}
            placeholder="4-digit code"
            style={styles.input}
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? (
              <>
                <span style={styles.loaderCircle}></span>
                Unlocking...
              </>
            ) : (
              'Unlock Dashboard'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '5rem 4rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
    textAlign: 'center',
    width: '320px',
    minHeight: '250px',
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    padding: '0.75rem 2rem',
    margin: '1rem 0',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    position: 'relative',
    whiteSpace: 'nowrap',
  },
  alert: {
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid',
    fontSize: '0.9rem',
    textAlign: 'left',
    boxSizing: 'border-box',
  },
};


export default Passkey;
