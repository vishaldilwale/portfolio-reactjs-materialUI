import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from "@material-ui/core/Grid";
import MenuIcon from '@material-ui/icons/Menu';

export default function MenuBar() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer =  (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(!open) ;
    };
    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (
        <div>
                <React.Fragment>
                    <Button onClick={toggleDrawer}
                            variant="contained"
                            color="primary"
                            size="medium"
                            style={{position:"fixed",boxShadow:"none",backgroundColor:"transparent",top:"5px",left:"-5px",zIndex:"2",borderRadius:"20px"}}>
                        <MenuIcon color="primary"  style={{fontSize:"30px",boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2)"}}/>
                    </Button>
                    <Drawer  open={open} onClose={toggleDrawer}>
                        <List >
                            <div
                                role="presentation"
                                onClick={toggleDrawer}
                                onKeyDown={toggleDrawer}
                            >
                            <Grid container justify="center" direction="column" alignItems="center">
                                {['Home', 'Projects', 'Resume', 'Contact Me'].map((text) => (
                                    <List key={text} style={{marginTop:"0px",marginBottom:"0px",paddingTop:"5px",paddingBottom:"5px"}} aria-label="secondary mailbox folders">
                                    <ListItem style={{marginTop:"0px",marginBottom:"0px",paddingTop:"5px",paddingBottom:"5px"}}>
                                        <ListItemLink href={"#"+text}>
                                            <ListItemText primary={text} />
                                        </ListItemLink>
                                    </ListItem>

                                    </List>
                                ))}
                            </Grid>
                            </div>
                        </List>
                    </Drawer>
                </React.Fragment>
        </div>
    );
}
