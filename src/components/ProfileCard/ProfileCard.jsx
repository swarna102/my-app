import { FaStar } from "react-icons/fa";
function ProfileCard({name, role}) {
    return (
        <div>
           {role==='admin' && (<FaStar/>)} 
            <span>User: {name}, Role: {role}</span>
        </div>
    );
}
export default ProfileCard;