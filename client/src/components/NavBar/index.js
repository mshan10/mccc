import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import logo from '../../img/cross.png'
import NavButton from './navButton'
import MediaQuery from 'react-responsive'

const styles = theme => ({
    title: {
        fontWeight: 700,
        fontSize: 35,
        flexGrow: 1,
        color: theme.palette.secondary.main
    },
    button: {
        margin: theme.spacing.unit,
    },
    homeNav: {
        backgroundColor: 'transparent',
        transition: '.5s'
    },
    fullNav: {
        backgroundColor: theme.palette.primary.main,
        transition: '.5s'
    },
    img: {
        height: 35,
        margin: 7
    },
    contactButton: {
        width: theme.spacing.unit * 15,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.secondary.dark
        },
    },
})

export default withStyles(styles)(class extends Component {
    state = {
        isTop: true
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        })
    }
    render() {
        const { classes } = this.props
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
                        <Typography variant="display1" className={classes.title}>
                            MCCC
                        </Typography>
                        <MediaQuery minDeviceWidth={1224}>
                            <NavButton
                                title={"About"}
                                items={["History", "Deacon Board", "Faith Statement", "Testimonies"]}
                            />
                            <NavButton
                                title={"Connect"}
                                items={["Photos"]}
                            />
                            <Button href='http://www.mcccin.org/email.shtml' variant="contained" className={classes.contactButton}>Contact</Button>
                        </MediaQuery>
                        <MediaQuery maxWidth={1224}>
                            <NavButton
                                title={"Menu"}
                                items={["About", "Connect", "Contact"]}
                            />
                        </MediaQuery>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
})
