import React, { createContext } from 'react';
import * as Google from 'expo-google-app-auth';

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    await Google.logInAsync({
      iosClientId: `<YOUR_IOS_CLIENT_ID_FOR_EXPO>`,
      androidClientId: `<YOUR_ANDROID_CLIENT_ID_FOR_EXPO>`,
      iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
      androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
