import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Alert } from '@mui/material';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [ success, setSuccess] = useState(false);
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
            
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField
            sx={{width: '50%'}}
             label="Standard" 
             type="email"
             onBlur={ handleOnBlur}
             variant="standard" />
            <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success 
            (<Alert severity="success">Role to Admin Successfully!</Alert>)
              }
        </div>
    );
};

export default Admin;