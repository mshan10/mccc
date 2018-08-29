import React, { Component } from 'react'
import Parse from 'parse'
import { resolve } from "react-resolver";
import { withStyles } from '@material-ui/core/styles'
import {
    Typography,
    Paper,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Avatar,
    Grid
} from '@material-ui/core'
import Picture from "../../img/deacon.jpg"

// resolve("testimonies", function(props) {
//     return (new Parse.Query(new Parse.Object('Testimonies'))
//         .find()
//         .then(results => {
//             console.log(results)
//             return Promise.resolve(results)
//         })
//     )
// })
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

export default withStyles(styles)(class extends Component {
    state = {
        data: [],
    }

    render(){
        const { classes, testimonies } = this.props
        console.log(testimonies)
        return(
            <div className={classes.background}>
                <Typography variant="display4" align="center" className={classes.title}>Testimonies</Typography>
                <Paper className={classes.details}>

                        <ExpansionPanel>
                            <ExpansionPanelSummary>
                                <Grid container direction="column">
                                    <Grid container direction="row">
                                        <Grid item>
                                        </Grid>
                                        <Grid item>
                                            <Typography>Test</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subheading"></Typography>
                                    </Grid>
                                </Grid>
                                <Typography className={classes.heading}>Expansion Panel 1</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                </Paper>
            </div>
        )
    }
})
// {getTestimonies().map(testimony => {
// })}
