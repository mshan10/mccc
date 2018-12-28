import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'
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
                <Typography variant="display4" align="center" className={classes.title}>Photos</Typography>
                <Paper className={classes.details}>
                    <a href={'http://www.mcccin.org/gallery.shtml'}>
                        <Typography variant="headline">Click Here for Photos</Typography>
                    </a>
                </Paper>
            </div>
        )
    }
})
