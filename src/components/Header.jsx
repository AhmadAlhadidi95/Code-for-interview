import "./header.css";
// Router
import { Link } from "react-router";

export function Header() {

    return (
        <header>
            <ul>
                <Link to="/">Code for interview</Link>

                <Link to="/all">All interviewers</Link>

                <Link to="/add">Add interviewer</Link>
            </ul>
        </header>
    )
    
};