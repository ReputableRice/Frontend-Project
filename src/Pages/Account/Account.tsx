import { useEffect, useState } from 'react';

function Account() {
  const CLIENT_ID = "your-5c913482fc374f959a96718f0754be95-id";  // Replace with your actual Spotify client ID
  const REDIRECT_URI = "http://localhost:5174/#/Account";  // Replace with your app's redirect URI
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPES = "user-read-private user-read-email playlist-read-private"; // Add any necessary scopes

  const [token, setToken] = useState<string | null>(null);  // Initialize token as null
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      // Handle undefined by checking if the token exists
      const hashToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"));

      if (hashToken) {
        token = hashToken.split("=")[1];
        window.localStorage.setItem("token", token);
        setToken(token);
      }
      
      // Clear hash in URL to avoid token leaking
      window.location.hash = "";
    } else if (token) {
      setToken(token);
    }
  }, []);

  const logout = () => {
    setToken(null);  // Reset token to null on logout
    window.localStorage.removeItem("token");
    setSelectedSong(null);
  };

  return (
    <>
      <h1>Welcome to the Account Page</h1>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}`}
          className="text-white"
        >
          Login to Spotify
        </a>
      ) : (
        <>
          <button onClick={logout} className="text-white">
            Logout
          </button>
        </>
      )}
    </>
  );
}

export default Account;
