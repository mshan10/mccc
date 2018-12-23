import React, { Component } from 'react'
import Parse from 'parse'
import { withStyles } from '@material-ui/core/styles'
import {
    Typography,
    Paper,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    // Avatar,
    Grid
} from '@material-ui/core'
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
Parse.initialize("FC6cpsUs8zlFdwysXMgGbxopflQdO4g2KKlnAJNp", "5T4ZMeffojFJV49trkjxsJ64jpWlDNmLQQjTMPyo")
Parse.serverURL = "https://parseapi.back4app.com/"
export default withStyles(styles)(class extends Component {
    state = { testimonies: [] }
    componentDidMount() {
        return new Parse.Query(new Parse.Object('Testimonies'))
            .find()
            .then(results => {
                console.log(results)
                const testimonies = results
                console.log('testimonies', testimonies)
                this.setState({ testimonies })
            })
    }
    render(){
        const { classes } = this.props
        const { testimonies } = this.state
        testimonies.map(testimony => {
            console.log('hi')
        })
        return(
            <div className={classes.background}>
                <Typography variant="display4" align="center" className={classes.title}>Testimonies</Typography>
                <Paper className={classes.details}>

                        <ExpansionPanel>
                            <ExpansionPanelSummary>
                                <Grid container direction="column">
                                    <Grid container direction="row">
                                        <Grid item>
                                            {testimonies[0].id}
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
