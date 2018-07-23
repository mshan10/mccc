import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'
import church from '../../img/church.jpg'

const styles = theme => ({
    aboutUs: {
        backgroundImage: `linear-gradient(to bottom, rgba(161,214,226,.5), rgba(161,214,226,.3)), url(${church})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
    },
    header: {
        fontSize: 80,
        fontFamily: 'Helvetica',
        textTransform: 'uppercase',
        transform: 'scaleY(1.3)',
        textAlign: 'center',
        color: '#F1F1F2',
        paddingTop: 30,
        fontWeight: 600,
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
        border: '3px solid #F1F1F2',
        color: '#F1F1F2'
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
                        教会2018年度春季成人主日学从本周日(11/2)开始新的课程《从圣经的教导反省埋怨的教训》。本课程将以圣经中古代以色列民在出埃及至迦南途中因埋怨而遭受上帝惩罚所付上的生命代价为教训，检视当今信徒生活、生命中因抱怨所导致的毁坏性影响；伴随本课程亦将开展“不抱怨21天手环实践”活动。
                    </Typography>
                    <Button variant="outlined" size="large" className={classes.button}>
                        About Us
                    </Button>
                </Grid>
                <Grid item>
                    <div className={classes.boxRight}/>
                </Grid>

            </Grid>

        </div>
    )
})
