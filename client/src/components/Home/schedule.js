import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faGlobeAmericas, faChurch } from '@fortawesome/free-solid-svg-icons'

const styles = theme => ({
    paper: {
        padding: '30px 20px',
        margin: '0px 40px',
        '&:hover': {
            transform: 'scale(1.05, 1.05)',
            cursor: 'pointer'
        },
        transition: '.5s'
    },
    section: {
        paddingTop: 20,
        backgroundColor: '#f2f2f2',
        fontFamily: 'Open Sans',
    },
    title: {
        textAlign: 'center',
        margin: '20px auto',
        textTransform: 'capitalize',
        fontWeight: 800,
    },
    bar: {
        display: 'block',
        height: 2,
        backgroundColor: '#1995AD',
        content: " ",
        width: 150,
        margin: '5px auto',
    },
    icon: {
        fontSize: 120,
        color: '#A1D6E2',
        textAlign:  'center',
        marginBottom: '7px'
    },
    textColor: {
        color: '#BCBABE'
    },
    map: {
        color: '#A1D6E2',
        '&:hover': {
            color: '#1995AD',
            textDecoration: 'none',
        },
        transition: 'color .5s'
    },
    circle: {
        borderRadius: '50%',
        border: '10px solid #1995AD',
        width: '250px',
        height: '250px',
        marginBottom: '18px'
    },
    headline: {
        fontSize: '20px',
        color: '#A1D6E2',
        letterSpacing: '2px',
        fontWeight: 700
    },
    grid: {
        padding: '40px 0px 60px 0px'
    },
    caption: {
        fontSize: '20px',
        fontWeight: 700
    }
})

export default withStyles(styles)(props => {
    const { classes } = props
    return(
        <div className={classes.section}>
            <Typography variant="display3" className={classes.title}>Join us for worship</Typography>
            <div className={classes.bar}/>
            <Typography variant="headline" align="center">
                <a className={classes.map} href="https://goo.gl/maps/wVAjBPkX4Fk">
                    11085 Loughlin Dr  -  Mishawaka, IN 46530
                </a>
            </Typography>
            <Grid container direction="row" className={classes.grid} justify="center" alignItems="center">
                <Grid item>
                    <Paper elevation={2} className={classes.paper}>
                        <Grid container item direction="column" alignItems="center">
                            <Grid container className={classes.circle} direction="column" justify="center" alignItems="center">
                                <Grid item>
                                    <FontAwesomeIcon icon={faGlobeAsia} className={classes.icon}></FontAwesomeIcon>
                                </Grid>
                                <Grid item>
                                    <Typography variant="headline" className={classes.headline}>Chinese</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="caption" className={classes.caption}>10:00 AM - 11:00 AM</Typography>
                            <Typography variant="caption" className={classes.caption}>Pastor Rocky Yang</Typography>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={2} className={classes.paper}>
                        <Grid container item direction="column" alignItems="center">
                            <Grid container className={classes.circle} direction="column" justify="center" alignItems="center">
                                <Grid item>
                                    <FontAwesomeIcon icon={faGlobeAmericas} className={classes.icon}></FontAwesomeIcon>
                                </Grid>
                                <Grid item>
                                    <Typography variant="headline" className={classes.headline}>English</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="caption" className={classes.caption}>11:30 AM - 12:30 PM</Typography>
                            <Typography variant="caption" className={classes.caption}>Pastor Kevin Haislip</Typography>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={2} className={classes.paper}>
                        <Grid container item direction="column" alignItems="center">
                            <Grid container className={classes.circle} direction="column" justify="center" alignItems="center">
                                <Grid item>
                                    <FontAwesomeIcon icon={faChurch} className={classes.icon}></FontAwesomeIcon>
                                </Grid>
                                <Grid item>
                                    <Typography variant="headline" className={classes.headline}>Sunday School</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="caption" className={classes.caption}>English   10:00 AM - 11:00 AM</Typography>
                            <Typography variant="caption" className={classes.caption}>Chinese   11:30 AM - 12:30 PM</Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
})
