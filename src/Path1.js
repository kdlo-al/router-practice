import { useNavigate } from "react-router-dom";

function PathOne() {
    let navigate = useNavigate();
    return (
        <div>
            <h2>This is Path Number 1</h2>
            <button onClick={() => { navigate("/PathFour"); }}>Path 4</button>
            <button onClick={() => { navigate("/PathFive"); }}>Path 5</button>
        </div>
    )
}

export default PathOne;