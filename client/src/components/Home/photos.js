import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import church from '../../img/building.jpg'
import Carousel from 'react-responsive-carousel/lib/components/Carousel.js'

const styles = theme => ({
    img: {
        width: 'auto',
        height: 'auto',
    },
    carousel: {
        margin: '15px auto',
        width: '65%',
        border: '5px solid #F1F1F2',
        marginTop: 40,
    },
    title: {
        textAlign: 'center',
        padding: 5,
        fontFamily: 'Helvetica',
        textTransform: 'uppercase',
        transform: 'scaleY(1.3)',
        color: '#1995AD',
        fontWeight: 600,
        border: '4px solid #1995AD',
        width: '30%',
        margin: 'auto',
    },
    pictures: {
        background: 'linear-gradient(#F1F1F2, #A1D6E2)',
        height: '140vh',
        textAlign: 'center',
    },
    break: {
        height: 50,
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
            <Typography variant="display1" className={classes.title}>Photos</Typography>
            <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop  className={classes.carousel}>
                <img src={church} alt="1" className={classes.img}/>
                <img src={church} alt="2" className={classes.img}/>
                <img src={church} alt="3" className={classes.img}/>
            </Carousel>
            <div className={classes.bar}/>
            <Button variant="contained" size="large" className={classes.button}>View Gallery</Button>
        </div>
    )
})
