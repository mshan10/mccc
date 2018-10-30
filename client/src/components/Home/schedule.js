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
        margin: '2% 2% 5% 2%',
        padding: 0,
        width: '40%',
    },
    section: {
        paddingTop: 20,
        maxWidth: '100%',
        backgroundColor: '#f2f2f2'
    },
    title: {
        textAlign: 'center',
        margin: '20px auto',
        textTransform: 'capitalize',
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
        height: '250px'
    },
    headline: {
        fontSize: '20px',
        color: '#A1D6E2',
        letterSpacing: '2px'

    },

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

export default withStyles(styles)(props => {
    const { classes } = props
    return(
        <div className={classes.section}>
            <Typography variant="display3" className={classes.title}>Join us for worship</Typography>
            <div className={classes.bar}/>
            <Typography variant="subheading" align="center">
                <a className={classes.map} href="https://goo.gl/maps/wVAjBPkX4Fk">
                    11085 Loughlin Dr  -  Mishawaka, IN 46530
                </a>
            </Typography>
            <Grid container direction="row" className={classes.grid} justify="center" alignItems="center">
                <Grid item>
                    <Grid container className={classes.circle} direction="column" justify="center" alignItems="center">
                        <Grid item>
                            <FontAwesomeIcon icon={faGlobeAsia} className={classes.icon}></FontAwesomeIcon>
                        </Grid>
                        <Grid item>
                            <Typography variant="headline" className={classes.headline}>Chinese</Typography>
                        </Grid>
                    </Grid>
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
})
