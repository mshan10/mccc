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
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
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
    title: {
        // transform: 'scale(.7,1)',
    },
    button: {
        margin: theme.spacing.unit,
    },
    cssRoot: {
        backgroundColor: '#ffc952',
        '&:hover': {
            backgroundColor: '#ff7473',
        },
    },
    menuButton: {
        '&:hover': {
            backgroundColor: '#423e61'
        },
    },
    nav: {
        backgroundColor: 'rgba(52, 49, 76, 0.4)',
    }
});

class Navbar extends React.Component {
    state = {
        anchorEl: null,
    }
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        const { classes } = this.props;

        return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.nav}>
                <Toolbar>
                    <Link to="/"><img src="./favicon.png" alt="logo" /></Link>
                    <Typography variant="title" color="inherit" className={classNames(classes.flex, classes.title)}>
                        MCCC
                    </Typography>
                    <Button
                        className={classNames(classes.button, classes.menuButton)}
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                    About Us
                    </Button>
                    <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={this.handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                      <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </Popover>
                    <Button
                        className={classNames(classes.button, classes.menuButton)}
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                    Programs
                    </Button>
                    <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={this.handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                      <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </Popover>
                    <Button variant="contained" color="primary" className={classNames(classes.button, classes.cssRoot)}>Contact</Button>

                </Toolbar>
            </AppBar>
        </div>
        );
    }

}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
