import React, { createContext, useContext, useState, type ReactNode } from "react";

// Define the shape of user data
interface User {
  name: string;
  learningStyle: string;
  favoriteTopics: string[];
  openaiKey: string;
  completedExercises: string[];
  completedLessons: string[];
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  updateUserField: (field: keyof User, value: any) => void;
}

const defaultUser: User = {
  name: "",
  learningStyle: "",
  favoriteTopics: [],
  openaiKey: "",
  completedExercises: [],
  completedLessons: [],
};

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUser);

  // Helper to update individual fields
  const updateUserField = (field: keyof User, value: any) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUserField }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easier consumption
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
