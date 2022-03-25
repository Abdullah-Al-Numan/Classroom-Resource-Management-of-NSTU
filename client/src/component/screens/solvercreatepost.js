import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import M from 'materialize-css';
import Spinner from '../Spinner';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const CreatePost = (props) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        
        if(loading)
        {
            axios.post("/solvercreatepost", { title, body,dep_session: `${window.location.pathname}`}, { 
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
                        props.handle()
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
        if (!title || !body) {
            M.toast({html: 'Please add all the fields!', classes:"#c62828 red darken-3"});
        } else {
            setLoading(true);
            props.handle()

        }
    };

//
    let display = (
          <FormControl>
         <input type="text" placeholder="title" value={title} onChange={(event) => setTitle(event.target.value)} />
             <TextField
             value={body}
             onChange={(event) => setBody(event.target.value)}
               id="standard-textarea"
               label="Description"
               placeholder="Description"
               multiline
             />
            <button onClick={() => postDetails()} className="btn waves-effect waves-light #01579b light-blue darken-4 white-text text-darken-2 mt-1">Submit Post</button>
            </FormControl>
    
    );

    if (loading) display = <Spinner />


    return (
        <div className="card input-filed" style={{ margin: "30px auto", maxWidth: "500px", padding: "20px", textAlign:"center" }}>
            {display}
        </div>
    );
};

export default CreatePost;