import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid } from '@material-ui/core'
import Picture from "../../../img/deacon.jpg"
import Deacon from "./deacon"

const styles = theme => ({
    deacon: {
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
    },
    deaconBoard: {
        padding: theme.spacing.unit *5
    }
})

export default withStyles(styles)(props => {
    const { classes } = props
    return(
        <div className={classes.deacon}>
            <Typography variant="display4" align="center" className={classes.historyTitle}>Deacon Board</Typography>
            <Paper className={classes.historyDetails}>
                <Grid container spacing={40} justify="space-evenly" className={classes.deaconBoard}>
                    <Grid item xs={4}>
                        <Deacon
                            title="Pastor"
                            name="Pastor Rocky"
                            bio="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Deacon
                            title="Pastor"
                            name="Pastor Rocky"
                            bio="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Deacon
                            title="Pastor"
                            name="Pastor Rocky"
                            bio="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Deacon
                            title="Pastor"
                            name="Pastor Rocky"
                            bio="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Deacon
                            title="Pastor"
                            name="Pastor Rocky"
                            bio="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                        />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
})
