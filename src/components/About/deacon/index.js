import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid } from '@material-ui/core'
import Picture from "../../../img/deacon.jpg"
import Deacon from "./deacon"

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
    },
    deaconBoard: {
        padding: theme.spacing.unit *5
    }
})

export default withStyles(styles)(props => {
    const { classes } = props
    return(
        <div className={classes.background}>
            <Typography variant="display4" align="center" className={classes.title}>Deacon Board</Typography>
            <Paper className={classes.details}>
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
