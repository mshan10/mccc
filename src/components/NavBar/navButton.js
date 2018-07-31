import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button, MenuList, MenuItem, Popper, Grow, ClickAwayListener, Paper } from '@material-ui/core';

const styles = theme => ({
    menuButton: {
        color: '#F1F1F2',
        margin: '0 5px',
        '&:hover': {
            borderBottom: '1px solid #A1D6E2',
            borderRadius: 0
        },
    },
    dropDown: {
        backgroundColor: 'rgb(25,149,173, .7)',
        borderTop: '8px solid #A1D6E2'
    },
    dropDownList: {
        paddingTop: 0,
    },
    dropDownItem: {
        color: '#F1F1F2',
    }
});
export default withStyles(styles)(class extends Component {
    state = {
        open: false,
        anchorEl: null,
    }
    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    };
    render() {
        const { open } = this.state;
        const { classes, title, items } = this.props;
        return(
            <div>
                <Button
                    buttonRef={node => {
                      this.anchorEl = node;
                    }}
                    aria-owns={open ? 'menu-list-grow' : null}
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                    className={classes.menuButton}
                >
                    {title}
                </Button>
                <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper className={classes.dropDown}>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <MenuList className={classes.dropDownList}>
                                        {items.map((item, i) => {
                                            return(
                                                <MenuItem onClick={this.handleClose} className={classes.dropDownItem} key={i}>{item}</MenuItem>
                                            )
                                        })}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        )
    }
})