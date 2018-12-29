import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid, Avatar, Card, CardHeader, CardContent } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChurch } from '@fortawesome/free-solid-svg-icons'
import Picture from '../../img/history.png'

const styles = theme => ({
    background: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${Picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
    title: {
        paddingTop: 80,
        color: '#F1F1F2',
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
    sundaySchool: {
        width: '50vw',
        margin:'20px 0'
    },
    secondary: {
        color: theme.palette.text.secondary
    },
    avatar: {
        backgroundColor: theme.palette.secondary.dark
    },
})

export default withStyles(styles)(class extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.background}>
                <Typography variant='display4' align='center' className={classes.title}>Sunday School</Typography>
                <Paper className={classes.details}>
                    <Grid container direction='column' alignItems='center' justify='space-around'>
                        {[['成人主日學 - Adults', 'Chinese', 'Class Time: 11:30 am - 12:30 pm'],
                        ['青少年主日學 - Teens', 'English', 'Class Time: 10:00am-11:30pm'],
                        ['兒童主日學 - Children', 'English', 'Class Time: 10:00am-12:30pm']].map(school => {
                            return (
                                <Card className={classes.sundaySchool}>
                                    <CardHeader
                                        avatar={
                                            <Avatar className={classes.avatar}>
                                                <FontAwesomeIcon icon={faChurch} className={classes.icon}></FontAwesomeIcon>
                                            </Avatar>
                                        }
                                        title={school[0]}
                                        subheader={school[1]}
                                    />
                                    <CardContent>
                                        <Typography className={classes.secondary} variant="subheading">
                                            {school[2]}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </Grid>
                </Paper>
            </div>
        )
    }
})
