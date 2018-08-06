import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import Picture from "../../../img/deacon.jpg"

const styles = theme => ({
})

export default withStyles(styles)(props => {
    const { classes } = props
    return(
        <Fragment>
            <Grid item>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={Picture}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Pastor
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
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
