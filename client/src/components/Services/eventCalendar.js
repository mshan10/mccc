import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid } from '@material-ui/core'
import Picture from "../../img/history.png"

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
    }
})

export default withStyles(styles)(class extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.background}>
                <Typography variant="display4" align="center" className={classes.title}>Event Calendar</Typography>
                <Paper className={classes.details}>
                    <Grid container justify='center'>
                        <Grid item container direction='column' md={3}>
                            {['3/29',
                            '5/5',
                            '6/15',
                            '8/31-9/02',
                            'TBD',
                            '11/29',
                            '12/24'
                            ].map(item => {
                                return(
                                    <Typography variant="headline" className={classes.text}>{item}</Typography>
                                )
                            })}
                        </Grid>
                        <Grid item md={7}>
                            {['Good Friday Gathering 受难日聚会',
                            'CongregationalMeeting 教会会员大会',
                            'Summer Picnic & Baptism at Camp Friedenswald 夏季郊游',
                            'Fall Retreat at Camp Friedenswald 秋令会（教会退修会',
                            'New Student Welcome Party 迎新生聚会',
                            'Thanksgiving Service 感恩节聚会',
                            'Christmas Celebration & Baptism 圣诞节庆祝聚会'
                            ].map(item => {
                                return(
                                    <Typography variant="headline" className={classes.text}>{item}</Typography>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
})
