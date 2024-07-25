import ProfileUser from "./ProfileUser";
import ProfileUserclass from "./ProfileUserclass";

import Footer from "./Footer";
import UserContext from "../Helper/UserContext";
const About = () =>{
    return (
        <div>
            <h1> this is about page</h1>
            <ProfileUser name={"shreyandsdsh"}/>
            <ProfileUserclass name={"shreyandsdssh"}/>

            <UserContext.Consumer>
                    {
                        ({loggedInUser}) => (<h1 className="text-xl font-bold">LoggedIn User: {loggedInUser}</h1>)
                    }
                </UserContext.Consumer>
                <h2 className="font-bold text-slate-700 m-4">ABOUT US</h2>
                <ProfileUser/>
        </div>

    )
}
export default About;