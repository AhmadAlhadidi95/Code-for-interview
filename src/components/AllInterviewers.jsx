import "./allinterviewers.css"
// Hooks
import { useEffect, useState } from "react";
// Functions
import { getUsersFunc, deleteUser } from "../server/api";
// Router
import { Link } from "react-router";

export function Allinterviewers() {

    const [getUsers, setGetUsers] = useState([]);

    useEffect(() => {

        theDetailsFunc();

    }, []);

    async function theDetailsFunc() {

        let response = await getUsersFunc();

        setGetUsers(response.data);
        
    };

    async function deleteUserData(id) {

        await deleteUser(id);

        theDetailsFunc();
        
    };

    return (
        <section className="allUsers">
            <h2>All interviewers</h2>

            <div className="box">
                <b>ID</b>
                <b>Name</b>
                <b>UserName</b>
                <b>Email</b>
                <b>Phone</b>
            </div>

            {
                getUsers.map((user, i) => {
                    return <div key={i} className="box">
                        <span>{user.id}</span>
                        <span>{user.name}</span>
                        <span>{user.username}</span>
                        <span>{user.email}</span>
                        <span>{user.phone}</span>
                        
                        <div className="btns">
                            <button><Link to={`/edit/${user.id}`}>Edit</Link></button>

                            <button onClick={() => deleteUserData(user.id)}><Link>Delete</Link></button>
                        </div>
                    </div>
                })
            }
        </section>
    )
    
};