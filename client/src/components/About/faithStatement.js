import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid } from '@material-ui/core'
import Picture from "../../img/deacon.jpg"

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
        backgroundColor: '#f7f7f7',
        marginTop: 80
    },
    text: {
        padding: '70px 100px',
        lineHeight: 2,
        color: theme.palette.primary.main
    }
})

export default withStyles(styles)(props => {
    const { classes } = props
    return(
        <div className={classes.background}>
            <Typography variant="display4" align="center" className={classes.title}>Faith Statement</Typography>
            <Paper className={classes.details}>
                <Typography variant="headline" className={classes.text}>
                    "The purpose of the Church is to unite Christians in the worship of Jesus Christ our God, encourage members to lead a Christian life, proclaim Christ's grace through His salvation, and carry out spreading the Gospel among Chinese in Michiana, so that these individuals, along with their families, can gain complete salvation, further the kingdom of God to all the world, to receive Christ's second coming."
                </Typography>
            </Paper>
        </div>
    )
})
