import "./addInterviewer.css";
// Hooks
import { useState, useEffect } from "react";
// Functions
import { getUserByIdFunc, getEditUserByIdFunc } from "../server/api";
// Router
import { useNavigate, useParams } from "react-router";

let initialValue = {
    "name": "",
    "username": "",
    "email": "",
    "phone": "",
};

export function EditInterviewer() {

    const [user, setUser] = useState(initialValue);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {

        userData();

    }, []);

    async function userData() {

        let response = await getUserByIdFunc(id);

        setUser(response.data);
        
    };

    function handleUser(e) {
        
        // عليه value ثم يتم إدخال ال key ثم يتم أخذ أسم ال obj هنا تم نسخ ال
        setUser({...user, [e.target.name]: e.target.value});

    };

    async function handleDetails() {

        await getEditUserByIdFunc(user, id);

        navigate("/all");
        
    };

    return (
        <section className="addUser">
            <h2>Edit Interviewer</h2>

            <form>
                <input type="text" name="name" placeholder="Name" value={user.name} onChange={(e) => {handleUser(e)}}/>
                <input type="text" name="username" placeholder="UesrName" value={user.username} onChange={(e) => {handleUser(e)}}/>
                <input type="email" name="email" placeholder="Email" value={user.email} onChange={(e) => {handleUser(e)}}/>
                <input type="tel" name="phone" placeholder="Phone" value={user.phone} onChange={(e) => {handleUser(e)}}/>
                <input type="button" value="Edit user" onClick={handleDetails}/>
            </form>
        </section>
    )
    
};