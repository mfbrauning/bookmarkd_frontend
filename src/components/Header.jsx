import { Link } from "react-router-dom"

function Header(){
    return (
        <nav className="nav">
            <Link to="/">
                <div>Bookmark'd</div>
            </Link>
        </nav>
    )
}

export default Header