import './Spotify.css';

export default function Spotify() {
    const CLIENT_ID = "2f9cc28ab9eb4a319c9fd94749e4bda1";
    const REDIRECT_URI = "http://localhost:5173/app";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    // const [token, setToken] = useState("")

    // useEffect(() => {
    //     const hash = window.location.hash
    //     let token = window.localStorage.getItem("token")

    //     if(!token && hash) {
    //         token = hash.subsstring(1).split("&").find(elem => elem.startsWith("access+token")).split("=")[1]

    //         console.log(token)
    //     }



    // }, [])

    return (
        <div className="App">
            <div className="AppHeader">
                <h1>Spotify React</h1>
                <a
                    href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                >
                    Login to Spotify
                </a>
            </div>
        </div>
    );
}
