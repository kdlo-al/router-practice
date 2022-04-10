import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <div>
            <h1>Welcome To The Home Page</h1>
            <Link to="/router-practice/PathOne" className="PathOneLink">Path One</Link>
            <Link to="/router-practice/PathTwo" className="PathTwoLink">Path Two</Link>
            <Link to="/router-practice/PathThree" className="PathThreeLink">Path Three</Link>
            {/*testing previous commit*/}
        </div>
    )
}

export default Home;