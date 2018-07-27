import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography, MenuList, MenuItem, Popper, Grow, ClickAwayListener, Paper } from '@material-ui/core';
import logo from '../img/poro-group.png'

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
        transform: 'scaleY(1.3)',
        fontFamily: 'Helvetica',
        fontWeight: 600,
        verticalAlign: 'center',
        fontSize: 35
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
        color: '#F1F1F2',
        margin: '0 5px',
        '&:hover': {
            borderBottom: '1px solid #A1D6E2',
            borderRadius: 0
        },
    },
    nav: {
        backgroundColor: 'rgba(52, 49, 76, 0.4)',
    },
    img: {
        height: 35
    }
});

export default withStyles(styles)(class extends Component {
    state = {
        open1: false,
        open2: false,
        open3: false,

        anchorEl1: null,
        anchorEl2: null,
        anchorEl3: null,

    }
    handleToggle1 = () => {
        this.setState(state => ({ open1: !state.open1 }));
    };
    handleToggle2 = () => {
        this.setState(state => ({ open2: !state.open2 }));
    };
    handleToggle3 = () => {
        this.setState(state => ({ open3: !state.open3 }));
    };

    handleClose1 = event => {
        if (this.anchorEl1.contains(event.target)) {
            return;
        }
        this.setState({ open1: false });
    };
    handleClose2 = event => {
        if (this.anchorEl2.contains(event.target)) {
            return;
        }
        this.setState({ open2: false });
    };
    handleClose3 = event => {
        if (this.anchorEl3.contains(event.target)) {
            return;
        }
        this.setState({ open3: false });
    };

    render() {
        const { open1, open2, open3 } = this.state;

        const { classes } = this.props;

        return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.nav}>
                <Toolbar>
                    <Link to="/">
                        <img src={logo} alt="logo" className={classes.img}/>
                    </Link>
                    <Typography variant="display1" color="inherit" className={classes.title}>
                        MCCC
                    </Typography>
                    <Button
                        buttonRef={node => {
                          this.anchorEl1 = node;
                        }}
                        aria-owns={open1 ? 'menu-list-grow1' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggle1}
                        className={classes.menuButton}
                    >
                        About
                    </Button>
                    <Popper open={open1} anchorEl={this.anchorEl1} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow1"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose1}>
                                        <MenuList>
                                            <MenuItem onClick={this.handleClose1}>History</MenuItem>
                                            <MenuItem onClick={this.handleClose1}>Deacon Board</MenuItem>
                                            <MenuItem onClick={this.handleClose1}>Faith Statement</MenuItem>
                                            <MenuItem onClick={this.handleClose1}>Testimonies</MenuItem>
                                            <MenuItem onClick={this.handleClose1}>New Members</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                    <Button
                        buttonRef={node => {
                          this.anchorEl2 = node;
                        }}
                        aria-owns={open2 ? 'menu-list-grow2' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggle2}
                        className={classes.menuButton}
                    >
                        Sunday Classes
                    </Button>
                    <Popper open={open2} anchorEl={this.anchorEl2} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow2"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose2}>
                                        <MenuList>
                                            <MenuItem onClick={this.handleClose2}>Class 1</MenuItem>
                                            <MenuItem onClick={this.handleClose2}>Class 2</MenuItem>
                                            <MenuItem onClick={this.handleClose2}>Class 3</MenuItem>
                                            <MenuItem onClick={this.handleClose2}>Class 4</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                    <Button
                        buttonRef={node => {
                          this.anchorEl3 = node;
                        }}
                        aria-owns={open3 ? 'menu-list-grow3' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggle3}
                        className={classes.menuButton}
                    >
                        Connect
                    </Button>
                    <Popper open={open3} anchorEl={this.anchorEl3} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow3"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose3}>
                                        <MenuList>
                                            <MenuItem onClick={this.handleClose3}>Serve</MenuItem>
                                            <MenuItem onClick={this.handleClose3}>Photos</MenuItem>
                                            <MenuItem onClick={this.handleClose3}>Baptism</MenuItem>
                                            <MenuItem onClick={this.handleClose3}>Events</MenuItem>

                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Toolbar>
            </AppBar>
        </div>
        );
    }
})
