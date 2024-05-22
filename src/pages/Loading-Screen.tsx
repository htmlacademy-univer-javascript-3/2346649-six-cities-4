import { FC } from 'react';

const Spinner: FC = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}
  >
    <div style={{ marginBottom: '10px', fontSize: '20px' }}>Loading...</div>
    <div style={{
      width: '50px',
      height: '50px',
      border: '5px solid gray',
      borderRadius: '50%',
      borderTopColor: 'transparent',
      animation: 'spin 1s linear infinite'
    }}
    >
    </div>
    <style>
      {`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

export default Spinner;
