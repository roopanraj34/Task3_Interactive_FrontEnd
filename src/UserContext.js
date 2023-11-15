// UserContext.js
import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
