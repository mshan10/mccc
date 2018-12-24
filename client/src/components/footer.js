import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeixin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'



const styles = theme => ({
    footer: {
        // width: '100wh',
        height: '45vh',
        fontFamily: 'Open Sans',
    },
    // footerText: {
    //     color: theme.palette.text.primary
    // },
    info: {
        // padding: '20px 150px',
        backgroundColor: theme.palette.primary.main,
        height: '35vh'
    },
    icon: {
        display: 'inline',
        color: theme.palette.secondary.main,
        margin: '0 10px',
        // fontSize: '20px'
    },
    copyright: {
        backgroundColor: theme.palette.primary.dark,
        height: '10vh'
    },
    section: {
        // padding: '30px 150px'
    },
    headline: {
        color: theme.palette.secondary.main,
        fontWeight: 700,
        paddingBottom: '15px'
    },
    subheading: {
        color: theme.palette.text.primary,
        letterSpacing: '.5px',
        lineHeight: '30px',
        fontSize: '15px',
    }
})
export default withStyles(styles)(props => {
    const { classes } = props
    return(
        <Grid container className={classes.footer}>
            <Grid container className={classes.info} item direction="row" alignItems='center' justify='space-around'>
                <Grid item container md={4} direction="column" className={classes.section} alignItems='flex-start' justify='center'>
                        <Grid item>
                            <Typography variant="headline" className={classes.headline}>Michiana Chinese Christian Church</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subheading" className={classes.subheading}>11085 Loughlin Dr</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subheading" className={classes.subheading}>Mishawaka, IN 46530</Typography>
                        </Grid>
                </Grid>
                <Grid item container md={4} direction="column" className={classes.section} alignItems='flex-start' justify='center'>
                        <Grid item>
                            <Typography variant="headline" className={classes.headline}>Contact</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subheading" className={classes.subheading}>
                                <FontAwesomeIcon icon={faPhone} className={classes.icon} />
                                (574) 574-5744
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subheading" className={classes.subheading}>
                                <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
                                mcccin@gmail.com
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subheading" className={classes.subheading}>
                                <FontAwesomeIcon icon={faWeixin} className={classes.icon} />
                                MCCCIN
                            </Typography>
                        </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.copyright} item justify="center" alignItems="center">
                <Grid item>
                    <Typography variant="subheading" className={classes.subheading}>© 2018 Michiana Chinese Christian Church, Indiana. </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
})
