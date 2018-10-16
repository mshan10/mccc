import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import logo from '../../img/poro-group.png'
import NavButton from './navButton'

const styles = theme => ({
    title: {
        transform: 'scaleY(1.3)',
        fontFamily: 'Helvetica',
        fontWeight: 600,
        fontSize: 35,
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
    },
    homeNav: {
        backgroundColor: 'rgba(188,186,190, 0.3)',
    },
    fullNav: {
        backgroundColor: '#A1D6E2',
    },
    img: {
        height: 35,
        margin: 7
    },
    contactButton: {
        margin: '0 5px',
        backgroundColor: '#1995AD',
        color: '#F1F1F2',
        '&:hover': {
            backgroundColor: '#136f80'
        },
    },
});

export default withStyles(styles)(props => {

    const { classes, location } = props;

    return (
    <div className={classes.root}>
        <AppBar
            position="fixed"
            className={window.location.href.includes('/about') ? classes.fullNav : classes.homeNav}
        >
            <Toolbar>
                <Link to="/">
                    <img src={logo} alt="logo" className={classes.img}/>
                </Link>
                <Typography variant="display1" color="inherit" className={classes.title}>
                    MCCC
                </Typography>
                <NavButton
                    title={"About"}
                    items={["History", "Deacon Board", "Faith Statement", "Testimonies", "New Members"]}
                />
                <NavButton
                    title={"Sunday Classes"}
                    items={["Class 1", "Class 2", "Class 3", "Class 4", "Teens", "Children"]}
                />
                <NavButton
                    title={"Connect"}
                    items={["Serve", "Photos", "Baptism", "Events"]}
                />
                <Button variant="contained" className={classes.contactButton}>Contact</Button>
            </Toolbar>
        </AppBar>
    </div>
    );
})
