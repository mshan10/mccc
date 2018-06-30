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
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Portal from '@material-ui/core/Portal';
import MenuList from '@material-ui/core/MenuList';
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

class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.target1.contains(event.target) || this.target2.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

const Navbar = (props) => {
    const { classes } = this.props;
    const { open } = this.state;
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Link to="/"><img src="./favicon.png" alt="logo" /></Link>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        MCCC
                    </Typography>
                    <Manager>
                      <Target>
                        <div
                          ref={node => {
                            this.target1 = node;
                          }}
                        >
                          <Button
                            aria-owns={open ? 'menu-list-grow' : null}
                            aria-haspopup="true"
                            onClick={this.handleToggle}
                          >
                            Toggle Menu Grow
                          </Button>
                        </div>
                      </Target>
                      <Popper
                        placement="bottom-start"
                        eventsEnabled={open}
                        className={classNames({ [classes.popperClose]: !open })}
                      >
                        <ClickAwayListener onClickAway={this.handleClose}>
                          <Grow in={open} id="menu-list-grow" style={{ transformOrigin: '0 0 0' }}>
                            <Paper>
                              <MenuList role="menu">
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                              </MenuList>
                            </Paper>
                          </Grow>
                        </ClickAwayListener>
                      </Popper>
                    </Manager>
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
