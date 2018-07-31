import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
// import Picture from

const styles = theme => ({
    history: {
        // backgroundImage: `url(${building})`,
    },
    historyTitle: {
        transform: 'scaleY(1.3)',
    }
})

export default withStyles(styles)(props => {
    const { classes } = props

    return (
        <div className={classes.history}>
            <Typography variant="display3" className={classes.historyTitle}>Our History</Typography>
        </div>
    )
})
