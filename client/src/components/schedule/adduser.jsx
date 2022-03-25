import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';
import M from 'materialize-css';


const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = (props) => {
    const [dates, setDates] = useState("");
    const [times, setTimes] = useState("");
    const [course,setCourse] = useState("");
    const [teacher, setTeacher] = useState("");

    const classes = useStyles();
    let history = useHistory();
     const [loading, setLoading] = useState(false);
    


    useEffect(() => {
        if(loading)
        {
            axios.post('/schedule/add',{dates,times,course,teacher, dep_session: `${window.location.pathname.slice(0,12)}`}, { 
                headers: { 
                    "Content-Type": "application/json", 
                    "Authorization": "Bearer " + localStorage.getItem("jwt") 
                }})
                .then(response => {
                    if (response.data.error) {
                        M.toast({html: response.data.error, classes:"#c62828 red darken-3"});
                    }
                    else {
                        M.toast({html: response.data.message, classes:"#43a047 green darken-1"});
                        props.handleadd("this is called");
                    }           
                    setLoading(false); 
                })
                .catch(e =>{
                    setLoading(false);
                    console.log(e);
                });
            }
    }, [loading]);

    const postDetails = () => {
        if (!dates || !times || !course || !teacher) {
            M.toast({html: 'Please add all the fields!', classes:"#c62828 red darken-3"});
        } else {
            setLoading(true);
        }
    };

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Class</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input"></InputLabel>
                <Input type="date" onChange={(e) => setDates(e.target.value)} name='dates' value={dates} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input"></InputLabel>
                <Input type="time" onChange={(e) => setTimes(e.target.value)} name='times' value={times} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Course</InputLabel>
                <Input onChange={(e) => setCourse(e.target.value)} name='course' value={course} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Teacher</InputLabel>
                <Input onChange={(e) => setTeacher(e.target.value)} name='teacher' value={teacher} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => postDetails()}>Add class</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;