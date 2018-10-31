import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import logo from '../../img/cross.png'
import NavButton from './navButton'

const styles = theme => ({
    title: {
        fontFamily: 'Open Sans',
        fontWeight: 700,
        fontSize: 35,
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
    },
    homeNav: {
        backgroundColor: 'transparent',
        transition: '.5s'
    },
    fullNav: {
        backgroundColor: '#A1D6E2',
        transition: '.5s'
    },
    img: {
        height: 35,
        margin: 7
    },
    contactButton: {
        // margin: '0 5px',
        backgroundColor: '#1995AD',
        color: '#F1F1F2',
        '&:hover': {
            backgroundColor: '#136f80'
        },
    },
});

export default withStyles(styles)(class extends Component {
    state = {
        isTop: true
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }
    render() {
        const { classes, location } = this.props
        let { isTop } = this.state
        // <AppBar
        //     position="fixed"
        //     className={window.location.href.includes('/about') ? classes.fullNav : classes.homeNav}
        // >
        return (
            <div className={classes.root}>
                <AppBar
                    position="fixed"
                    className={isTop ? classes.homeNav : classes.fullNav}
                    elevation={0}
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
                            title={"Connect"}
                            items={["Serve", "Photos", "Baptism", "Events"]}
                        />
                        <Button variant="contained" className={classes.contactButton}>Contact</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
})
