import React, { useState, useEffect } from 'react'  
  
function Dashboard() {  
    const userName = JSON.parse(localStorage.getItem('user'));
    const [user, setuser] = useState({ Email: '', Password: '' });  
    useEffect(() => {  
        var a = localStorage.getItem('myData');  
        var b = JSON.parse(a);  
        console.log(b.username);  
        setuser(b)  
        console.log(user.username)  
  
    }, []);  
    return (  
        <>  
            <div class="col-sm-12 btn btn-primary">  
                Dashboard  
        </div>  
            <h1>Welcome :{userName}</h1>  
        </>  
    )  
}  
  
export default Dashboard 