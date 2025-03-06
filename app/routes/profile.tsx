function MyProfile() {
    return (
        <>
        <div className="p-5 m-5 border-2 border-green-600 rounded">
            <h1>Tossapon Thoenburin
            </h1>
            <strong>026640491612-1</strong>
            <MyEducation/>   
        </div></>
    );
}
function MyEducation() { 
    return (
        <>
 <div>
            <ul>
                <li>IT Rmutto</li>
                <li>IT Rmutto</li>
                <li>IT Rmutto</li>
                </ul>
                </div></>
    );
}

export default MyProfile;