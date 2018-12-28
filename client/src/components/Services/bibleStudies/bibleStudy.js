import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Card, CardHeader, CardContent, CardActions, Button, Avatar } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChurch } from '@fortawesome/free-solid-svg-icons'

// import Picture from "../../../img/deacon.jpg"

const styles = theme => ({
    // cardMedia: {
    //     height: 0,
    //     paddingTop: '56.25%', // 16:9
    // },
    card: {
        minWidth: 350,
        maxHeight: 350,
    },
    secondary: {
        color: theme.palette.text.secondary
    },
    avatar: {
        backgroundColor: theme.palette.secondary.dark
    },
    icon: {

    }
})

export default withStyles(styles)(props => {
    const { classes, title, name, bio } = props
    return(
        <Fragment>
            <Grid item>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar className={classes.avatar}>
                                <FontAwesomeIcon icon={faChurch} className={classes.icon}></FontAwesomeIcon>
                            </Avatar>
                        }
                        title={title}
                        subheader={name}
                    />
                    <CardContent>
                        <Typography className={classes.secondary} component="p">
                            {bio}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Fragment>
    )
})
