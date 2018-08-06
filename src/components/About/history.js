import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'
import Picture from "../../img/history.png"

const styles = theme => ({
    history: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${Picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
    historyTitle: {
        paddingTop: 120,
        color: "#F1F1F2",

    },
    historyDetails: {
        width: '100wh',
        // height: '60vh',
        backgroundColor: '#fff',
        marginTop: 80
    },
    historyText: {
        padding: '70px 100px',
        lineHeight: 2,
        letterSpacing: 1.5
    }
})

export default withStyles(styles)(props => {
    const { classes } = props

    return (
        <div className={classes.history}>
            <Typography variant="display4" align="center" className={classes.historyTitle}>Our History</Typography>
            <Paper className={classes.historyDetails}>
                <Typography variant="headline" className={classes.historyText}>
                    Pre 1987	ND student fellowship & Elkhart Bible Study Group
                    1987-1990	Chinese student host families in Community Baptist Church
                    Jun 1990	Started planning & Bi-weekly prayer meeting to establish MCCC
                    Sep 15, 1991	First Monthly worship at Gospel Center, Thanks to Rev. T. Murphy’s support
                    Feb 9, 1991	First Baptism
                    May 1991	Pastor John Chao’s 1st weekly worship
                    Jan 1993	Set up the building fund
                    Aug 1997	Yamin dedicated to full-time ministry
                    Dec 1997	Rev. John Chao left for CCUC
                    1998-2000	Thanks to Rev. Clapper, Banks, Jerome and Indi. CCC for preaching
                    Aug 2000	Dustin dedicated to full-time ministry
                    Feb 2001	Pastor Andrew Cho joined MCCC
                    May 2002	10th anniversary and pastor/ elder ordination
                    Jul 2002	“scouted” the St Mark church property
                    Aug 2002	Joe G. Zhou dedicated to full-time ministry
                    Mar 25, 2003	Completed a 3-week pledge campaign, & Purchased the Church property
                    Sep 7, 2003	1st worship at own church building
                    Oct 25, 2003	Dedication of the property
                </Typography>
            </Paper>
        </div>
    )
})
