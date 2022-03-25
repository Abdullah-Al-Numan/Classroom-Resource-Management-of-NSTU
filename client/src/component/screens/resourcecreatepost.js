import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';
import M from 'materialize-css';
import Spinner from '../Spinner';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


const Resourcecreatepost = (props) => {

    const history = useHistory();
    const [subject, setSubject] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if(url) {
            axios.post("/resourcecreatepost", {subject, title, body, picUrl: url, dep_session: `${window.location.pathname}` }, { 
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
                        props.handle();
                    }           
                    setLoading(false); 
                })
                .catch(e =>{
                    setLoading(false);
                    console.log(e);
                });
        }
    }, [url]);

    const postDetails = () => {
        if (!image || !title || !body || !subject) {
            M.toast({html: 'Please add all the fields!', classes:"#c62828 red darken-3"});
        } else {
            setLoading(true);
            props.handle();
            const data = new FormData();
            data.append("file", image);
            data.append("upload_preset", "gkuvghge");
            data.append("cloud_name", "dur2ndyv0");
    
            fetch("https://api.cloudinary.com/v1_1/dur2ndyv0/raw/upload/", {
                method: "post",
                body: data
            })
            .then(response => response.json())
            .then(data => {
                setUrl(data.url);
            })
            .catch(e => {
                setLoading(false);
                console.log(e);
            });
        }
    };

//
    let display = (
             <FormControl>
       
            <input type="text" placeholder="subject" value={subject} onChange={(event) => setSubject(event.target.value)} />
            <input type="text" placeholder="title" value={title} onChange={(event) => setTitle(event.target.value)} />
            <TextField
             onChange={(event) => setBody(event.target.value)}
             value={body}
             id="standard-textarea"
             label="body"
             placeholder="body"
             multiline
             />  
            <div className="file-field input-field">
                <div className="btn #01579b light-blue darken-4 white-text text-darken-2">
                    <span>Upload Pdf file</span>
                    <input type="file" onChange={(event) => setImage(event.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button onClick={() => postDetails()} className="btn waves-effect waves-light #01579b light-blue darken-4 white-text text-darken-2">Submit Post</button>
        </FormControl>
    );

    if (loading) display = <Spinner />


    return (
        <div className="card input-filed" style={{ margin: "30px auto", maxWidth: "500px", padding: "20px", textAlign:"center" }}>
            {display}
        </div>
    );
};

export default Resourcecreatepost;