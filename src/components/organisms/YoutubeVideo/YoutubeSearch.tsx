import React, { useState } from "react";

const YouTubeSearch = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const API_KEY = "YOUR_API_KEY";

    const handleSearch = () => {
        fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=10&key=${API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => {
                setResults(data.items);
            })
            .catch((err) => console.error("Error:", err));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search YouTube"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {results.map((video) => (
                    <li key={video.id.videoId}>
                        <img
                            src={video.snippet.thumbnails.default.url}
                            alt={video.snippet.title}
                        />
                        <p>{video.snippet.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YouTubeSearch;
