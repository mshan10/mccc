import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid } from '@material-ui/core'
// import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faChurch } from '@fortawesome/free-solid-svg-icons'


const styles = theme => ({
    paper: {
        padding: '30px 20px',
        margin: '0px 40px'
    },
    section: {
        paddingTop: 20,
        maxWidth: '100%',
        backgroundColor: '#f2f2f2',
        fontFamily: 'Open Sans',
    },
    title: {
        textAlign: 'center',
        margin: '20px auto',
        textTransform: 'capitalize',
        fontWeight: 800,
    },
    bar: {
        display: 'block',
        height: 2,
        backgroundColor: '#1995AD',
        content: " ",
        width: 150,
        margin: '5px auto',
    },
    icon: {
        fontSize: 120,
        // margin: '75px 50px',
        color: '#A1D6E2',
        textAlign:  'center',
        marginBottom: '7px'
    },
    textColor: {
        color: '#BCBABE'
    },
    map: {
        color: '#A1D6E2',
        '&:hover': {
            color: '#1995AD',
            textDecoration: 'none',
        }
    },
    circle: {
        borderRadius: '50%',
        border: '10px solid #1995AD',
        width: '250px',
        height: '250px',
        marginBottom: '18px'
    },
    headline: {
        fontSize: '20px',
        color: '#A1D6E2',
        letterSpacing: '2px',
        fontWeight: 700
    },
    grid: {
        padding: '40px 0px'
    },
    caption: {
        fontSize: '20px',
        // color: '#A1D6E2',
        // letterSpacing: '2px',
        fontWeight: 700
    }
})

// const Schedule = ({procedure, styling}) => {
//     return procedure.map((procedureItem, index) => {
//         return(
//             <ListItem className={`${styling}`} key={index}>
//                 <Typography variant="subheading" color="primary">{procedureItem}</Typography>
//             </ListItem>
//         )
//     })
// }

export default withStyles(styles)(class extends Component {
    state = {
        e1: 1,
    }
    onHover() {
        this.setState({ e1: 10 })
    }
    onLeave() {
        this.setState({ e1: 1 })
    }
    render() {
        const { classes } = this.props
        let { e1 } = this.state
        return(
            <div className={classes.section}>
                <Typography variant="display3" className={classes.title}>Join us for worship</Typography>
                <div className={classes.bar}/>
                <Typography variant="headline" align="center">
                    <a className={classes.map} href="https://goo.gl/maps/wVAjBPkX4Fk">
                        11085 Loughlin Dr  -  Mishawaka, IN 46530
                    </a>
                </Typography>
                <Grid container direction="row" className={classes.grid} justify="center" alignItems="center">
                    <Grid item>
                        <Paper elevation={e1} onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} className={classes.paper}>
                        <Grid container item direction="column" alignItems="center">
                            <Grid container className={classes.circle} direction="column" justify="center" alignItems="center">
                                <Grid item>
                                    <FontAwesomeIcon icon={faGlobeAsia} className={classes.icon}></FontAwesomeIcon>
                                </Grid>
                                <Grid item>
                                    <Typography variant="headline" className={classes.headline}>Chinese</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="caption" className={classes.caption}>10:00 AM - 11:15 AM</Typography>
                            <Typography variant="caption" className={classes.caption}>Pastor Rocky Yang</Typography>
                            <Typography variant="caption" className={classes.caption}>{e1}</Typography>

                        </Grid>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Grid container className={classes.circle} direction="column" justify="center" alignItems="center">
                            <Grid item>
                                <FontAwesomeIcon icon={faGlobeAmericas} className={classes.icon}></FontAwesomeIcon>
                            </Grid>
                            <Grid item>
                                <Typography variant="headline" className={classes.headline}>English</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container className={classes.circle} direction="column" justify="center" alignItems="center">
                            <Grid item>
                                <FontAwesomeIcon icon={faChurch} className={classes.icon}></FontAwesomeIcon>
                            </Grid>
                            <Grid item>
                                <Typography variant="headline" className={classes.headline}>Sunday School</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
})
