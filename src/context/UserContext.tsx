import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the role type
export type UserRoleType = 'admin' | 'user' | 'owner' | null;

// Define the context type
interface UserContextType {
  role: UserRoleType;
  setRole: React.Dispatch<React.SetStateAction<UserRoleType>>;
}

// Create the context with a default value of null (no role)
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [role, setRole] = useState<UserRoleType>('user');

  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the User context
export const userRole = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
