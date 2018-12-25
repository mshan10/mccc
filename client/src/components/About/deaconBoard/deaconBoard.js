import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import Picture from "../../../img/deacon.jpg"

const styles = theme => ({
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    card: {
        minWidth: 350,
        maxHeight: 350,
    },
    secondary: {
        color: theme.palette.text.secondary
    }
})

export default withStyles(styles)(props => {
    const { classes, title, name, bio } = props
    return(
        <Fragment>
            <Grid item>
                <Card className={classes.card}>
                    <CardMedia
                        image={Picture}
                        className={classes.cardMedia}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="subheading">
                            {name}
                        </Typography>
                        <Typography className={classes.secondary} component="p">
                            {bio}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Bio
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Fragment>
    )
})
