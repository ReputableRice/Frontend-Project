import React, { useEffect, useState } from "react";
import axios from "axios";

const CLIENT_ID = "2f9cc28ab9eb4a319c9fd94749e4bda1";
const REDIRECT_URI = "https://github.com/ReputableRice/Frontend-Project";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id="2f9cc28ab9eb4a319c9fd94749e4bda1"&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent("user-read-private user-read-email")}`;

const Spotify = () => {
  const [accessToken, setAccessToken] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    let token = sessionStorage.getItem("spotify_access_token");
    if (!token && hash) {
      token = new URLSearchParams(hash.substring(1)).get("access_token");
      if (token) {
        sessionStorage.setItem("spotify_access_token", token);
        setAccessToken(token);
        window.location.hash = "";
      }
    } else if (token) {
      setAccessToken(token);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!accessToken) return;

      try {
        const response = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [accessToken]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {!accessToken ? (
        <a
          href={AUTH_URL}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#1DB954",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "20px",
          }}
        >
          Login with Spotify
        </a>
      ) : userData ? (
        <div>
          <h1>Welcome, {userData.display_name}!</h1>
          <img
            src={userData.images?.[0]?.url || "https://via.placeholder.com/150"}
            alt="User avatar"
            style={{ width: "150px", borderRadius: "50%" }}
          />
          <p>Email: {userData.email}</p>
          <p>Country: {userData.country}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Spotify;
