import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid } from '@material-ui/core'
import Picture from "../../img/history.png"
import Yg from "../../img/yg.jpg"


const styles = theme => ({
    background: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${Picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
    title: {
        paddingTop: 80,
        color: "#F1F1F2",
        [theme.breakpoints.down('sm')]: {
            fontSize: 50
        }
    },
    details: {
        width: '100wh',
        backgroundColor: '#f7f7f7',
        marginTop: 80,
        padding: '50px 0',
    },
    text: {
        lineHeight: 2,
        color: theme.palette.primary.main,
        fontSize: 20
    },
    youthimg: {
        backgroundImage: `url(${Yg})`,
        backgroundSize: 'cover',
        height: 500
    },
    youthSchedule: {
        textAlign: 'center',
        color: theme.palette.secondary.dark
    },
    scheduleDetails: {
        color: theme.palette.primary.main
    }
})

export default withStyles(styles)(class extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.background}>
                <Typography variant="display4" align="center" className={classes.title}>Youth Group</Typography>
                <Paper className={classes.details}>
                    <Grid container justify='space-evenly' alignItems='center'>
                        <Grid item md={5} className={classes.youthimg}>
                        </Grid>
                        <Grid item container md={5} spacing={24} direction="column">
                            <Grid item>
                                <Typography variant="display2" className={classes.youthSchedule}>
                                    Youth Group Meeting Schedule
                                </Typography>
                            </Grid>
                            {[['Date', 'The first and third Friday of the month'],
                            ['Time', '6:30 pm - 9:00 pm'],
                            ['Place', 'MCCC Church']].map(info => {
                                return (
                                    <Grid item container direction='row'>
                                        <Grid item md={2} container direction='column'>
                                            <Typography variant="headline" className={classes.scheduleDetails}>
                                                {info[0]}:
                                            </Typography>
                                        </Grid>
                                        <Grid item md={10} container direction='column'>
                                            <Typography variant="headline" className={classes.scheduleDetails}>
                                                {info[1]}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
})
