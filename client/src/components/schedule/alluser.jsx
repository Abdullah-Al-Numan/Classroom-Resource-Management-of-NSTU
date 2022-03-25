import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';
import axios from '../../axios';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { UserContext } from '../../App';
import M from 'materialize-css';
import AddUser from './adduser';




const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllUsers = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const { state, dispatch } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [userinfo, setUserinfo] = useState(true)

    const handleadd =(cal)=>{
        setLoading(true)
    }

    useEffect(() => {
        if(loading){
        axios.get(`/schedule${window.location.pathname}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
        .then(result => {
            setData(result.data.posts);
            setLoading(false);
        })
        .catch(e => {
            setLoading(false);
            console.log(e);
        })
            const loggedInUser = localStorage.getItem("user");
            if (loggedInUser) {
              const foundUser = JSON.parse(loggedInUser);
              setUserinfo(foundUser.isadmin);
            }
    }

    }, [loading])

    const deletePost = (postId) => {
        axios.delete(`/schedule/${postId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
        .then(res => {
            setLoading(true)
            M.toast({html: res.data.message, classes:"#43a047 green darken-1"});
        })
        .catch(e => {
            console.log(e)
        })
    };


    return (
        <>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Course</TableCell>
                    <TableCell>Teacher</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                data ?
                 data.map((classs) => (
                    <TableRow className={classes.row} key={classs._id}>
                        <TableCell>{classs.dates}</TableCell>
                        <TableCell>{classs.times}</TableCell>
                        <TableCell>{classs.course}</TableCell>
                        <TableCell>{classs.teacher}</TableCell>
                        <TableCell>
                          {userinfo &&  <Button color="secondary" variant="contained" onClick={()=> deletePost(classs._id)}>Delete</Button>}
                        </TableCell>
                    </TableRow>
                 )) : <></>}
            </TableBody>
        </Table>
     { userinfo && <AddUser handleadd={handleadd} />}
        </>
    )
}

export default AllUsers;