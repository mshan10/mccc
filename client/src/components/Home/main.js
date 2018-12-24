import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import building from '../../img/building2.jpg'

const styles = theme => ({
    header: {
        backgroundImage: `linear-gradient(rgba(31,40,51,0), rgba(31,40,51,0)),
            url(${building})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        // backgroundAttachment: 'fixed',
    },
    church: {
        margin: 0,
        letterSpacing: -2,
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: 55,
        color: theme.palette.secondary.dark,
        transform: 'scaleY(1.3)',
        '&::first-letter': {
            color: theme.palette.secondary.main
        },

    },
    title: {
        padding: '30px 40px',
        border: `10px solid ${theme.palette.secondary.main}`,
        [theme.breakpoints.down('sm')]: {
            transform: 'scale(.8)'
        }
    }
})

export default withStyles(styles)(props => {
    const { classes } = props

    return (
        <Grid container className={classes.header} justify='center' alignItems='center'>
            <Grid item className={classes.title}>
                <Typography variant="display4" color='secondary' className={classes.church}>Michiana</Typography>
                <Typography variant="display4" className={classes.church}>Chinese</Typography>
                <Typography variant="display4" className={classes.church}>Christian</Typography>
                <Typography variant="display4" className={classes.church}>Chruch</Typography>
            </Grid>
        </Grid>
    )
})
