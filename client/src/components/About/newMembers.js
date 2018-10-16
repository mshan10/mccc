import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'
import Picture from "../../img/deacon.jpg"

const styles = theme => ({
    background: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${Picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
    title: {
        paddingTop: 120,
        color: "#F1F1F2",
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
    }
})

export default withStyles(styles)(props => {
    const { classes } = props
    return(
        <div className={classes.background}>
            <Typography variant="display4" align="center" className={classes.title}>New Here?</Typography>
            <Paper className={classes.details}>
                <Typography variant="body1" className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna sem, elementum quis fermentum sit amet, ultricies eget nulla. Vestibulum sit amet tortor elit. Aenean eget urna ac nunc tristique tempus. Aliquam eu nulla a tortor blandit molestie. Curabitur venenatis dictum purus facilisis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer hendrerit nulla id felis maximus finibus a et nisi. Curabitur vitae finibus ligula, eu eleifend nisl. Nunc et enim sed tortor porta blandit. Nunc eu lacus a enim elementum faucibus. Suspendisse vitae elit urna. Mauris feugiat nec purus in sagittis. Quisque neque turpis, commodo sed nisl aliquam, tempor scelerisque nibh. Maecenas eu leo pulvinar, luctus urna et, aliquet nibh.
                </Typography>
            </Paper>
        </div>
    )
})
