import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { Typography, Paper, Button, TextField, Grid, RadioGroup, Radio, FormControl, FormLabel, FormControlLabel } from '@material-ui/core'
import Picture from "../img/history.png"

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
        backgroundColor: '#f7f7f7',
        marginTop: 80,
        padding: '50px 0',
    },
    text: {
        lineHeight: 2,
        color: theme.palette.primary.main,
        fontSize: 20
    },
    formPaper: {
        width: '50vw',
        padding: '30px 0'
    },
    input: {
        width: '30vw',
    },
    button: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        borderRadius: 0
    }
})

export default withStyles(styles)(class extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        newMember: '',
        contact: '',
        message: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onClick = () => {
        const { name, email, phone, newMember, contact, message } = this.state
        return axios.post('/api/email', { name, email, phone, newMember, contact, message })
            .then(data =>
                console.log(data)
            ).catch(error =>
                console.log(error)
            )
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.background}>
                <Typography variant="display4" align="center" className={classes.title}>Contact</Typography>
                <Paper className={classes.details}>
                    <Grid container alignItems='center' justify='space-around'>
                        <Paper className={classes.formPaper}>
                            <form>
                                <Grid
                                    alignItems="center"
                                    container
                                    direction="column"
                                    justify="center"
                                    spacing={16}
                                >
                                    <Grid item>
                                        <TextField
                                            label="Name"
                                            name="name"
                                            onChange={this.onChange}
                                            variant="outlined"
                                            className={classes.input}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Email"
                                            name="email"
                                            type="email"
                                            onChange={this.onChange}
                                            variant="outlined"
                                            className={classes.input}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Phone"
                                            name="phone"
                                            onChange={this.onChange}
                                            variant="outlined"
                                            className={classes.input}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <Grid container direction="row" alignItems='center' spacing={40}>
                                                <Grid item>
                                                    <FormLabel component="legend">Are you new to this Church?</FormLabel>
                                                </Grid>
                                                <Grid item>
                                                    <RadioGroup
                                                        aria-label="New Member"
                                                        name="newMember"
                                                        className={classes.group}
                                                        value={this.state.newMember}
                                                        onChange={this.onChange}
                                                        style={{ display: 'flex', flexDirection: 'row' }}
                                                     >
                                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                                    </RadioGroup>
                                                </Grid>
                                            </Grid>
                                        </FormControl>
                                    </Grid>
                                    <Grid item>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <Grid container direction="row" alignItems='center' spacing={40}>
                                                <Grid item>
                                                    <FormLabel component="legend">Do you need us to contact you?</FormLabel>
                                                </Grid>
                                                <Grid item>
                                                    <RadioGroup
                                                        aria-label="Contact"
                                                        name="contact"
                                                        className={classes.group}
                                                        value={this.state.contact}
                                                        onChange={this.onChange}
                                                        style={{ display: 'flex', flexDirection: 'row' }}
                                                     >
                                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                                    </RadioGroup>
                                                </Grid>
                                            </Grid>
                                        </FormControl>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Message"
                                            name="message"
                                            onChange={this.onChange}
                                            variant="outlined"
                                            className={classes.input}
                                            multiline
                                            rows="10"
                                        />
                                    </Grid>
                                    <Button
                                        className={classes.button}
                                        color="primary"
                                        onClick={e =>
                                            this.onClick()
                                        }
                                        variant="contained"
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Paper>
            </div>
        )
    }
})
