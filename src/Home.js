import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <div>
            <h1>Welcome To The Home Page</h1>
            <Link to="/gh-pages-url/PathOne" className="PathOneLink">Path One</Link>
            <Link to="/gh-pages-url/PathTwo" className="PathTwoLink">Path Two</Link>
            <Link to="/gh-pages-url/PathThree" className="PathThreeLink">Path Three</Link>
            {/*testing previous commit*/}
        </div>
    )
}

export default Home;