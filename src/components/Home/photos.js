import React from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'
import church from '../../img/building.jpg'
import Carousel from 'react-responsive-carousel/lib/components/Carousel.js'

const styles = theme => ({
    img: {
        width: 'auto',
        height: 'auto',
    },
    carousel: {
        margin: '30px auto',
        width: 700,
        border: '5px solid #F1F1F2',
    },
    title: {
        textAlign: 'center',
        padding: 5,
        fontFamily: 'Helvetica',
        textTransform: 'uppercase',
        transform: 'scaleY(1.3)',
        textAlign: 'center',
        color: '#1995AD',
        fontWeight: 600,
        border: '2px solid #1995AD',
        width: '30%',
        margin: 'auto'
    },
    pictures: {
        backgroundColor: '#A1D6E2',
        height: '100vh',
    },
    break: {
        height: 50,
    }
})

export default withStyles(styles)(props => {
    const { classes } = props
    return(
        <div className={classes.pictures}>
            <div className={classes.break}/>
            <Typography variant="display1" className={classes.title}>Photos</Typography>
            <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop centerMode centerSlidePercentage={80} className={classes.carousel}>
                <img src={church} className={classes.img}/>
                <img src={church} className={classes.img}/>
                <img src={church} className={classes.img}/>
            </Carousel>
        </div>
    )
})
