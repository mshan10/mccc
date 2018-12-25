import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid } from '@material-ui/core'
import Picture from "../../../img/deacon.jpg"
import Deacon from "./deaconBoard"

const styles = theme => ({
    background: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${Picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
    title: {
        paddingTop: 100,
        color: "#F1F1F2",
        [theme.breakpoints.down('sm')]: {
            fontSize: 50
        }
    },
    details: {
        width: '100wh',
        backgroundColor: '#fff',
        marginTop: 80
    },
    text: {
        padding: '70px 100px',
        lineHeight: 2,
        letterSpacing: 1.5
    },
    deaconBoard: {
        padding: theme.spacing.unit *5
    }
})

export default withStyles(styles)(props => {
    const { classes } = props
    return(
        <div className={classes.background}>
            <Typography variant="display4" align="center" className={classes.title}>Deacon Board</Typography>
            <Paper className={classes.details}>
                <Grid container spacing={40} justify="space-evenly" className={classes.deaconBoard}>
                    <Grid item md={4}>
                        <Deacon
                            title="Pastor"
                            name="Rocky Yang"
                            bio="Lead Chinese Services"
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Deacon
                            title="Youth Pastor"
                            name="Jody Haislip"
                            bio="Lead English and Youth Services"
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Deacon
                            title="Chairman"
                            name="John Yuan"
                            bio="General Affairs"
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Deacon
                            title="Elder"
                            name="Daniel Dew"
                            bio=""
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Deacon
                            title="Deacon"
                            name="Rugang Li"
                            bio="Chinese Worship"
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Deacon
                            title="Deacon"
                            name="John Wang"
                            bio="English Worship"
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Deacon
                            title="Deacon"
                            name="Simon Zhang"
                            bio="Christian Education"
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Deacon
                            title="Deacon"
                            name="Bruce Li"
                            bio="Youth and Children Ministry"
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Deacon
                            title="Deacon"
                            name="Jerry Wei"
                            bio="Treasurer & General Affairs"
                        />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
})
