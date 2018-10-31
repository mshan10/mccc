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
        border: '5px solid #F1F1F2',
        marginTop: 40,
    },
    title: {
        textAlign: 'center',
        padding: 5,
        textTransform: 'uppercase',
        color: '#F2F2F2',
        fontWeight: 700,
        border: '5px solid #1995AD',
        width: '30%',
        margin: 'auto',
    },
    pictures: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '130vh',
        textAlign: 'center',
        fontFamily: 'Open Sans',
    },
    break: {
        height: 30,
    },
    button: {
        color: '#F1F1F2',
        backgroundColor: '#1995AD',
        '&:hover': {
            backgroundColor: '#157b8f'
        }
    },
    bar: {
        display: 'block',
        height: 4,
        backgroundColor: '#1995AD',
        content: " ",
        width: 500,
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
