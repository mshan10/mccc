import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import Picture from "../../../img/deacon.jpg"

const styles = theme => ({
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    card: {
        // minWidth: 300,
        // maxWidth: 300,
        // margin: 50
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
                        <Typography component="p">
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
