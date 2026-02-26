import ProfileCard from '../ProfileCard/ProfileCard';
function Users() {
    const users = [
        { name: 'Swarna', role: 'admin',id:"1" },
        { name: 'John', role: 'user',id:"2" },
        { name: 'Alice', role: 'editor',id:"3" },
    ];
    return (
        <div>
            {users.length>0 && users.map((user)=>(<div key={user.id}>
            <ProfileCard  name={user.name} role={user.role}/>
            </div>))}
        </div>
    );
}
export default Users;