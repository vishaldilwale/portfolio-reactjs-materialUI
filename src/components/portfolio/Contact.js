import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import emailjs from 'emailjs-com';
import LinearProgress from "@material-ui/core/LinearProgress";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    footer: {
        padding: theme.spacing(2),
    },
}));

export default function Contact() {
    const classes = useStyles();
    let [contact,setContact]=useState({
        name:'',
        email:'',
        message:''
    });
    let [success,setSuccess]=useState(null);
    let [loading,setLoading]=useState(null);

    let submitForm= async (e)=>{
        setLoading(true);
        e.preventDefault();
        // Email JS Credentials
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log("SUCCESS");
                setSuccess(true);
                setTimeout(()=>{
                    setSuccess(false);
                },3000);
                setLoading(false);
                setContact({
                    name:'',
                    email:'',
                    message:''})
            }, (error) => {
                setLoading(false);
                console.log(error.text);
            });

    };

    return (
        <Container component="div" maxWidth="xs" id="Contact">
            <CssBaseline />
            <div className={classes.paper} id="Contact Me">

                    <EmailRoundedIcon color={"primary"} style={{ fontSize: 40,padding:"5px",border:"1px solid blue",borderRadius:"50%" }} />

                <Typography component="h1" variant="h5">
                    Contact Me
                </Typography>
                <form className={classes.form} autoComplete="new-password" onSubmit={submitForm} method="POST"
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        value={contact.name}
                        onChange={e=>{setContact({...contact, name:e.target.value})}}
                        label="name"
                        name="name"
                        autoComplete="false"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={contact.email}
                        onChange={e=>{setContact({...contact, email:e.target.value})}}
                        id="email"
                        type="email"
                        label="Email Address"
                        name="email"
                        autoComplete="false"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        multiline
                        rows={4}
                        fullWidth
                        value={contact.message}
                        onChange={e=>{setContact({...contact, message:e.target.value})}}
                        name="message"
                        label="message"
                        type="message"
                        id="message"
                        autoComplete="false"
                    />
                    {
                        loading &&
                            <div style={{marginTop:"10px",marginBottom:"10px",transition:"1s ease"}}><LinearProgress /></div>
                    }
                    {success === true &&
                    <div style={{margin:"auto",textAlign:"center",transition:"1s ease",display:"flex" ,justifyContent:"center", alignItems:"center"}}>
                        <Typography color="primary" style={{marginTop:"10px"}}>Your message has been sent</Typography>
                        <CheckCircleIcon style={{marginLeft:"10px",marginTop:"10px"}} color="primary"/>
                    </div>
                    }

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Send Message
                    </Button>

                </form>
            </div>
            <Box mt={8}>
            </Box>
            <footer className={classes.footer}>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    {'Copyright © '}
                    <Link color="inherit" href="/">
                        Vishal Dilwale
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </footer>
        </Container>
    );
}