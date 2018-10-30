import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'
import church from '../../img/church.jpg'

const styles = theme => ({
    aboutUs: {
        backgroundImage: `linear-gradient(to bottom, rgba(27, 77, 88,.2), rgba(27, 77, 88,.2)), url(${church})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontFamily: 'Open Sans',
    },
    header: {
        fontSize: 80,
        textTransform: 'uppercase',
        // transform: 'scaleY(1.3)',
        textAlign: 'center',
        color: '#F1F1F2',
        paddingTop: 30,
        fontWeight: 600,
        letterSpacing: '1px'
    },
    bodyText: {
        color: '#F1F1F2',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15,
    },
    boxLeft: {
        margin: '0 30px',
        borderRadius: '3%',
        width: 30,
        height: '100%',
        borderLeft: '10px solid #1995AD',
        borderTop: '10px solid #1995AD',
        borderBottom: '10px solid #1995AD',
    },
    boxRight: {
        margin: '0 30px',
        borderRadius: '3%',
        width: 30,
        height: '100%',
        borderRight: '10px solid #1995AD',
        borderTop: '10px solid #1995AD',
        borderBottom: '10px solid #1995AD',
    },
    container: {
        marginTop: '2%',
    },
    box: {
        width: '50%',
    },
    button: {
        marginBottom: 10,
        border: '4px solid #F1F1F2',
        fontSize: '20px',
        // letterSpacing: '1px',
        '&:hover': {
            transform: 'scale(1.05, 1.05)',
            border: '4px solid #F1F1F2',
            backgroundColor: 'rgba(25,149,173,.5)'
        },
        transition: '.5s'
    },
    buttonText: {
        color: '#F1F1F2',
        fontWeight: 700
    }
})

export default withStyles(styles)(props => {
    const { classes } = props

    return (
        <div className={classes.aboutUs}>
            <Typography variant="headline" className={classes.header}>About Us</Typography>
            <Grid container justify="center" className={classes.container}>
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
