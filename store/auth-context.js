import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, } from 'react';
import { useState } from 'react';

export const AuthContext = createContext({
  token: '',
  email: '',
  ids: [],
  isAuthenticated: false,
  addFavorite: (id) => { },
  removeFavorite: (id) => { },
  authenticate: (token) => { },
  logout: () => { },
  setEmail: (email) => { }
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [emailName, setEmailName] = useState('')
  const [favoriteProductIds, setFavoriteProductIds] = useState([])

  const addFavorite = (id) => {
    setFavoriteProductIds((currentFavIds) => [...currentFavIds, id])
  }

  const removeFavorite = (id) => {
    setFavoriteProductIds((currentFavIds) => currentFavIds.filter((productId) => productId != id))
}

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }

  function setEmail(email) {
    setEmailName(email)
    AsyncStorage.setItem('email', email);
  }

  const value = {
    token: authToken,
    email: emailName,
    isAuthenticated: !!authToken,
    ids: favoriteProductIds,
    authenticate: authenticate,
    logout: logout,
    setEmail: setEmail,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
