import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import building from '../../img/building.jpg'

const styles = theme => ({
    header: {
        backgroundImage: `url(${building})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        // backgroundAttachment: 'fixed',
    },
    church: {
        margin: 0,
        letterSpacing: -2,
        fontFamily: 'Helvetica',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: 100,
        transform: 'scaleY(1.3)',
        '&::first-letter': {
            color: '#A1D6E2',
            transform: 'scale(1,1.3)',
        },

    },
    title: {
        paddingTop: '8%',
        paddingLeft: '8%',
    }
})

export default withStyles(styles)(props => {
    const { classes } = props

    return (
        <div className={classes.header}>
            <div className={classes.title}>
                <Typography variant="display4" className={classes.church}>Michiana</Typography>
                <Typography variant="display4" className={classes.church}>Chinese</Typography>
                <Typography variant="display4" className={classes.church}>Christian</Typography>
                <Typography variant="display4" className={classes.church}>Chruch</Typography>
            </div>
        </div>
    )
})
