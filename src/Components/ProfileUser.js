import { useState } from "react";

const ProfileUser = (props) =>

       
    {
        const [count] = useState(0);
        const [count1] = useState(1);

        return ( <div className="user-card">
        <h2>Name: {props.name}</h2>
        <h1>{count}</h1>
        <h1>{count1}</h1>
        <h3>Location: Haryana</h3>
        <h4>Contact: shreyanshjain648@gmail.com</h4>
    </div>
    );
    };

export default ProfileUser;