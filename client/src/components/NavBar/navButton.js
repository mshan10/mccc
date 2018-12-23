import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button, MenuList, MenuItem, Popper, Grow, ClickAwayListener, Paper } from '@material-ui/core';

const styles = theme => ({
    menuButton: {
        width: theme.spacing.unit * 15,
        '&:hover': {
            borderBottom: `1px solid ${theme.palette.secondary.main}` ,
            borderRadius: 0
        },
    },
    dropDown: {
        // backgroundColor: ,
        borderTop: `3px solid ${theme.palette.secondary.main}`,
        borderRadius: '0px'
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
    getLink = (title, item) => {
        let Title = title.toLowerCase()
        let Item = item.toLowerCase().replace(/\s/g, '')
        return (`/${Title}/${Item}`)
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
                                                <Link to={this.getLink(title, item)} key={i}><MenuItem onClick={this.handleClose} className={classes.dropDownItem}>{item}</MenuItem></Link>
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
