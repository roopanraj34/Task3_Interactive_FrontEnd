import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function RegistrationSuccessModal() {
  const history = useHistory();

  useEffect(() => {
    // Automatically navigate to the login page after a delay
    const navigateToLogin = setTimeout(() => {
      history.push('/login');
    }, 3000); // Auto-redirect after 3 seconds

    return () => {
      clearTimeout(navigateToLogin); // Clear the timeout if the component unmounts
    };
  }, [history]);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Registration Successful</h2>
        <p>You have successfully registered.</p>
      </div>
    </div>
  );
}

export default RegistrationSuccessModal;
