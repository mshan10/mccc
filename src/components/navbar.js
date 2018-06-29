import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './navbar.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
        fontSize: 35,
        fontFamily: 'Lato',
        letterSpacing: 1.5,
    },
    button: {
        margin: theme.spacing.unit,
    },
    cssRoot: {
        '&:hover': {
            color: 'white',
        },
    },
});

const Navbar = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Link to="/"><img src="./favicon.png" alt="logo" /></Link>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        MCCC
                    </Typography>
                    <Button className={classNames(classes.button, classes.cssRoot)}>About Us</Button>
                    <Button className={classes.button}>Events</Button>
                    <Button variant="contained" color="primary" className={classes.button}>Contact</Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
