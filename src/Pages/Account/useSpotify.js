import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const useSpotify = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = () => {
    const clientId = '5c913482fc374f959a96718f0754be95';
    const redirectUri = 'http://localhost:5174/#/Account';
    const scopes = 'user-read-private user-read-email playlist-read-private';

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;
    console.log(authUrl)
    window.location.href = authUrl;
  };

  useEffect(() => {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.substring(1)).get('access_token');

    if (token) {
      spotifyApi.setAccessToken(token);
      setIsAuthenticated(true);
      window.location.hash = ''; // Clear the hash

      // Fetch user details
      spotifyApi.getMe().then((data) => {
        setUser(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  return { isAuthenticated, loading, login, user };
};
