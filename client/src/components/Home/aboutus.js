import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'
import church from '../../img/church.jpg'

const styles = theme => ({
    aboutUs: {
        backgroundImage: `linear-gradient(to bottom, rgba(11,12,16,.3), rgba(11,12,16,.3)), url(${church})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        // height: '100vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: '70px',
        textAlign: 'center',
    },
    header: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 50,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 80,
        },
        textTransform: 'uppercase',
        transform: 'scaleY(1.3)',
        textAlign: 'center',
        color: '#F1F1F2',
        padding: '20px 0',
        fontWeight: 600,
        letterSpacing: '1px'
    },
    bodyText: {
        color: theme.palette.text.primary,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15,
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
        }
    },
    boxLeft: {
        [theme.breakpoints.down('sm')]: {
            margin: '0 10px',
        },
        [theme.breakpoints.up('sm')]: {
            margin: '0 30px',
        },
        width: 30,
        height: '100%',
        borderLeft: `10px solid ${theme.palette.secondary.main}`,
        borderTop: `10px solid ${theme.palette.secondary.main}`,
        borderBottom: `10px solid ${theme.palette.secondary.main}`,
    },
    boxRight: {
        [theme.breakpoints.down('sm')]: {
            margin: '0 10px',
        },
        [theme.breakpoints.up('sm')]: {
            margin: '0 30px',
        },
        width: 30,
        height: '100%',
        borderRight: `10px solid ${theme.palette.secondary.main}`,
        borderTop: `10px solid ${theme.palette.secondary.main}`,
        borderBottom: `10px solid ${theme.palette.secondary.main}`,
    },
    container: {
        marginTop: '2%',
    },
    box: {
        width: '50%',
    },
    button: {
        marginBottom: 10,
        border: `3px solid ${theme.palette.secondary.dark}`,
        fontSize: '20px',
        borderRadius: '0px',
        '&:hover': {
            transform: 'scale(1.05, 1.05)',
            border: `3px solid ${theme.palette.secondary.dark}`,
            backgroundColor: 'rgba(31,40,51,.6)'
        },
        transition: '.5s'
    },
    buttonText: {
        color: theme.palette.secondary.dark,
        fontWeight: 700
    }
})

export default withStyles(styles)(props => {
    const { classes } = props

    return (
        <div className={classes.aboutUs}>
            <Typography variant="headline" className={classes.header}>About Us</Typography>
            <Grid container justify="space-evenly" className={classes.container}>
                <Grid item>
                    <div className={classes.boxLeft}/>
                </Grid>
                <Grid item className={classes.box}>
                    <Typography variant="headline" className={classes.bodyText}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut neque turpis. Quisque pretium gravida est lobortis tincidunt. Quisque et nisi euismod, iaculis lectus quis, venenatis justo. Mauris at ultrices massa, id finibus dui. Phasellus feugiat, elit non iaculis tincidunt, felis odio scelerisque mauris, accumsan pulvinar metus massa quis nisi.                     </Typography>
                    <Button variant="outlined" size="large" className={classes.button}>
                        <Typography variant="subheading" className={classes.buttonText}>
                            More
                        </Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <div className={classes.boxRight}/>
                </Grid>

            </Grid>

        </div>
    )
})
