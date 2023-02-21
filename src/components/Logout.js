import React from "react";

const Logout = () => {
    const handleLogout = () => {
        // Remove user data from local storage
        localStorage.removeItem("user");
        localStorage.setItem("loggedInUser", false);
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;