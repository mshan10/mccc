import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faGlobeAmericas, faChurch } from '@fortawesome/free-solid-svg-icons'
import LocationIcon from '@material-ui/icons/LocationOn'

const styles = theme => ({
    paper: {
        padding: '30px 20px',
        transform: 'scale(.8)',
        '&:hover': {
            transform: 'scale(.78)',
            cursor: 'pointer'
        },
        transition: '.5s',
        borderRadius: '0px',
        minHeight: 400,
        minWidth: 315
    },
    section: {
        paddingTop: 20,
        backgroundColor: '#f7f7f7',
        fontFamily: 'Open Sans',
    },
    title: {
        color: theme.palette.text.primary,
        textAlign: 'center',
        margin: '20px auto',
        textTransform: 'capitalize',
        fontWeight: 800,
    },
    bar: {
        display: 'block',
        height: 2,
        backgroundColor: theme.palette.primary.dark,
        content: " ",
        width: 150,
        margin: '5px auto',
    },
    barSermon: {
        display: 'block',
        height: 10,
        backgroundColor: theme.palette.secondary.main,
        content: " ",
        width: 220,
        margin: '15px auto',
    },
    icon: {
        fontSize: 120,
        color: theme.palette.text.primary,
        textAlign:  'center',
        marginBottom: '7px'
    },
    textColor: {
        color: theme.palette.text.primary
    },
    map: {
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.dark,
            textDecoration: 'none',
        },
        transition: 'color .5s'
    },
    circle: {
        borderRadius: '50%',
        border: `10px solid ${theme.palette.secondary.main}`,
        width: '250px',
        height: '250px',
        marginBottom: '18px'
    },
    headline: {
        fontSize: '20px',
        color: theme.palette.text.primary,
        letterSpacing: '1px',
        fontWeight: 700
    },
    grid: {
        padding: '40px 0px 60px 0px'
    },
    caption: {
        fontSize: '20px',
        fontWeight: 700,
        color: theme.palette.text.secondary
    },
    sermonRecordings: {
        fontSize: '20px',
        fontWeight: 700,
        color: theme.palette.text.secondary,
        padding: '15px 0',
        '&:hover': {
            color: theme.palette.secondary.dark,
            cursor: 'pointer'
        },
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
                    <Grid container alignItems='center' justify='center'>
                        <LocationIcon />
                        11085 Loughlin Dr  -  Mishawaka, IN 46530
                    </Grid>
                </a>
            </Typography>
            <Grid container direction="row" className={classes.grid} justify="space-evenly" alignItems="center">
                <Grid item>
                    <Paper elevation={5} className={classes.paper}>
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
                    <Paper elevation={5} className={classes.paper}>
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
                    <Paper elevation={5} className={classes.paper}>
                        <Grid container item direction="column" alignItems="center">
                            <Grid container className={classes.circle} direction="column" justify="center" alignItems="center">
                                <Grid item>
                                    <FontAwesomeIcon icon={faChurch} className={classes.icon}></FontAwesomeIcon>
                                </Grid>
                                <Grid item>
                                    <Typography variant="headline" className={classes.headline}>Sunday School</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="caption" className={classes.caption}>English   10:00 - 11:00 AM</Typography>
                            <Typography variant="caption" className={classes.caption}>Chinese   11:30 - 12:30 PM</Typography>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={5} className={classes.paper}>
                        <Grid container item direction="column" alignItems="center" justify="space-evenly">
                            <Typography variant="caption" className={classes.headline}>Sermon Recordings</Typography>
                            <div className={classes.barSermon}/>
                            <Typography variant="caption" className={classes.sermonRecordings}>14 October, 2018</Typography>
                            <Typography variant="caption" className={classes.sermonRecordings}>07 October, 2018</Typography>
                            <Typography variant="caption" className={classes.sermonRecordings}>30 September, 2018</Typography>
                            <Typography variant="caption" className={classes.sermonRecordings}>23 September, 2018</Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
})
