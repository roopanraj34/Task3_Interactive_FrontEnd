// api.js
export const registerUser = async (formData) => {
  const response = await fetch('http://localhost:8080/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    // Handle registration error
    throw new Error('Registration failed');
  }

  const data = await response.json();
  return data; // This could be a success message or some other response from the server.
};
