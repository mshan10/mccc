import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faWeixin } from '@fortawesome/free-brands-svg-icons'


const styles = theme => ({
    footer: {
        width: '100wh',
        height: '10vh',
        padding: '20px 150px',
        backgroundColor: '#1995AD'
    },
    footerText: {
        color: '#F1F1F2'
    },
    icon: {
        display: 'inline',
        color: '#F1F1F2',
        margin: '0 10px',
        fontSize: '20px'
    }
})
export default withStyles(styles)(props => {
    const { classes } = props
    return(
        <div className={classes.footer}>
            <Grid container>
                <Grid item md={6}>
                    <Typography variant="subheading" className={classes.footerText}>© 2018 Michiana Chinese Christian Church, Indiana. </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography align="right">
                        <FontAwesomeIcon icon={faFacebookF} className={classes.icon}/>
                        <FontAwesomeIcon icon={faWeixin} className={classes.icon}/>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
})
