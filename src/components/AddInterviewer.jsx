import "./addInterviewer.css";
// Hooks
import { useState } from "react";
// Functions
import { addUserFunc } from "../server/api";
// Router
import { useNavigate } from "react-router";

let initialValue = {
    "name": "",
    "username": "",
    "email": "",
    "phone": "",
};

export function AddInterviewer() {

    const [user, setUser] = useState(initialValue);
    const navigate = useNavigate();

    function handleUser(e) {
        
        // عليه value ثم يتم إدخال ال key ثم يتم أخذ أسم ال obj هنا تم نسخ ال
        setUser({...user, [e.target.name]: e.target.value});

    };

    async function handleDetails() {

        await addUserFunc(user);

        navigate("/all");
        
    };

    return (
        <section className="addUser">
            <h2>Add Interviewer</h2>

            <form>
                <input type="text" name="name" placeholder="Name" onChange={(e) => {handleUser(e)}}/>
                <input type="text" name="username" placeholder="UesrName" onChange={(e) => {handleUser(e)}}/>
                <input type="email" name="email" placeholder="Email" onChange={(e) => {handleUser(e)}}/>
                <input type="tel" name="phone" placeholder="Phone" onChange={(e) => {handleUser(e)}}/>
                <input type="button" value="Add user" onClick={handleDetails}/>
            </form>
        </section>
    )
    
};