import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import anniversary from '../../img/anniversary.jpg'
import front from '../../img/front.jpg'
import night from '../../img/night.jpg'
import sing from '../../img/sing.jpg'
import snow from '../../img/snow.jpg'
import background from '../../img/bluewhite.jpg'
import Carousel from 'react-responsive-carousel/lib/components/Carousel.js'

const styles = theme => ({
    img: {
        width: 'auto',
        height: 'auto',
    },
    carousel: {
        margin: '15px auto',
        width: '50%',
        border: `10px solid ${theme.palette.primary.main}`,
        marginTop: 40,
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 50
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 80
        },
        padding: '5px 10px',
        textTransform: 'uppercase',
        color: theme.palette.primary.main,
        // border: `10px solid ${theme.palette.primary.dark}`,
        // width: '30%',
        // margin: 'auto',
        textAlign: 'center',
        fontWeight: 600,
        letterSpacing: '1px',
    },
    pictures: {
        // background: 'linear-gradient(rgba(31,40,51,.9), rgba(31,40,51,.8))',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        fontFamily: 'Open Sans',
        paddingBottom: '20px'
    },
    break: {
        height: 30,
    },
    button: {
        color: theme.palette.text.primary,
        borderRadius: '0px',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
        transition: '.5s'
    },
    bar: {
        display: 'block',
        height: 4,
        backgroundColor: theme.palette.primary.main,
        content: " ",
        width: '40vw',
        margin: '20px auto',
    },
})

export default withStyles(styles)(props => {
    const { classes } = props
    return(
        <div className={classes.pictures}>
            <div className={classes.break}/>
            <Typography variant="display2" className={classes.title}>Photos</Typography>
            <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop className={classes.carousel}>
                <img src={snow} alt="1" className={classes.img}/>
                <img src={night} alt="2" className={classes.img}/>
                <img src={anniversary} alt="3" className={classes.img}/>
                <img src={front} alt="4" className={classes.img}/>
                <img src={sing} alt="5" className={classes.img}/>
            </Carousel>
            <div className={classes.bar}/>
            <Button variant="contained" size="large" className={classes.button}>View Gallery</Button>
        </div>
    )
})
