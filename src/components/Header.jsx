import { Link } from "react-router-dom"

function Header(){
    return (
        <nav className="nav">
            <Link to="/">
                <div className="title">Bookmark'd</div>
            </Link>
        </nav>
    )
}

export default Header