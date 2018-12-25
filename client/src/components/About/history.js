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
        paddingTop: 100,
        color: "#F1F1F2",
        [theme.breakpoints.down('sm')]: {
            fontSize: 50
        }
    },
    details: {
        width: '100wh',
        backgroundColor: '#fff',
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
                <Typography variant="display4" align="center" className={classes.title}>Our History</Typography>
                <Paper className={classes.details}>
                    <Grid container justify='center'>
                        <Grid item container direction='column' md={3}>
                            {['Pre 1987',
                            '1987-1990',
                            'Jun 1990',
                            'Sep 15, 1991',
                            'Feb 9, 1991',
                            'May 1991',
                            'Jan 1993',
                            'Aug 1997',
                            'Dec 1997',
                            '1998-2000',
                            'Aug 2000',
                            'Feb 2001',
                            'May 2002',
                            'Jul 2002',
                            'Aug 2002',
                            'Mar 25, 2003',
                            'Sep 7, 2003',
                            'Oct 25, 2003'
                            ].map(item => {
                                return(
                                    <Typography variant="headline" className={classes.text}>{item}</Typography>
                                )
                            })}
                        </Grid>
                        <Grid item md={7}>
                            {['ND student fellowship & Elkhart Bible Study Group',
                            'Chinese student host families in Community Baptist Church',
                            'Started planning & Bi-weekly prayer meeting to establish MCCC',
                            'First Monthly worship at Gospel Center, Thanks to Rev. T. Murphy’s support',
                            'First Baptism',
                            'Pastor John Chao’s 1st weekly worship',
                            'Set up the building fund',
                            'Yamin dedicated to full-time ministry',
                            'Rev. John Chao left for CCUC',
                            'Thanks to Rev. Clapper, Banks, Jerome and Indi. CCC for preaching',
                            'Dustin dedicated to full-time ministry',
                            'Pastor Andrew Cho joined MCCC',
                            '10th anniversary and pastor/ elder ordination',
                            'Scouted the St Mark church property',
                            'Joe G. Zhou dedicated to full-time ministry',
                            'Completed a 3-week pledge campaign, & Purchased the Church property',
                            '1st worship at own church building',
                            'Dedication of the property'
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
