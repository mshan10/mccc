import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core'
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';


const styles = theme => ({
    root: {
         ...theme.mixins.gutters(),
         paddingTop: theme.spacing.unit * 2,
         paddingBottom: theme.spacing.unit * 2,
    },
    list: {
        padding: '0 1%',
        color: '#34314c',
    },
    paper: {
        margin: '5% 2%',
        padding: 0,
        width: '40%',
    },
    procedure: {
        fontSize: 30,
        padding: '0 8%',
    },
    header: {
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
    },
    section: {
        paddingTop: 20,
        backgroundColor: '#f2f2f2'
    },
    title: {
        textAlign: 'center',
        margin: '10px auto',
    },
    bar: {
        display: 'block',
        height: 2,
        backgroundColor: '#e67e22',
        content: " ",
        width: 150,
        margin: '0 auto',
    },
    heading: {
        width: '100%',
        margin: 0,
        padding: 10,
        backgroundColor: '#e67e22'
    },
    listGroup: {
        padding: '7% 10%',
    },
    schedules: {
        margin: 20,
    },
    icon: {
        fontSize: 100,
        margin: '75px 50px',
        color: '#e67e22',
    }
})

const Schedule = ({procedure, classes}) => {
    return procedure.map((procedureItem, index) => {
        return(
            <ListItem className={classes} key={index}>
                <Typography variant="subheading">{procedureItem}</Typography>
            </ListItem>
        )
    })
}
// <FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>

export default withStyles(styles)(class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    handleChange = (event, value) => {
      this.setState({ value });
    };
    render(){
        const { classes } = this.props
        const { value } = this.state;
        return(
            <div className={classes.section}>
                <Typography variant="display3" className={classes.title}>Join us for worship</Typography>
                <div className={classes.bar}/>
                <Grid container spacing={16} className={classes.grid} justify="center">
                    <Paper className={classNames(classes.root, classes.paper)} elevation={5}>
                        <Grid item>
                            <Paper className={classes.heading} elevation={2}>
                                <Typography variant="headline" className={classes.header}>Sunday Worship Procedure</Typography>
                            </Paper>
                            <Grid container>
                            <Grid item md={4}>
                                <FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>
                            </Grid>
                            <Grid item md={8}>
                            <List className={classes.listGroup}>
                                <Schedule
                                    procedure={['Prelude', 'Call to Worship', 'Singspiration', 'Pastoral Prayer', 'Scripture Reading', 'Message by Pastor', 'Responding Hymn', 'Bedediction', 'Welcome & Announcements', 'Postlude']}
                                    classes={classes.procedure}
                                />
                            </List>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper className={classNames(classes.root, classes.paper)} elevation={5}>
                        <Grid item>
                        <Paper>
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                fullWidth
                                indicatorColor="primary"
                            >
                                <Tab label="English" />
                                <Tab label="Chinese" />
                            </Tabs>
                        </Paper>
                        {value === 0 &&
                            <Grid container className={classes.schedules}>
                                <Grid item md={7}>
                                    <List dense="true">
                                        <Schedule
                                            procedure={['English Sunday School', 'English Worship', 'Fellowship Lunch', 'Choir', 'Sports']}
                                            classes={classes}
                                        />
                                    </List>
                                </Grid>
                                <Grid item md={5}>
                                    <List dense="true">
                                        <Schedule
                                            procedure={['10:00 A.M.', '11:30 A.M.', '12:30 P.M.', '1:30 P.M.', '2:00 P.M.']}
                                            classes={classes}
                                        />
                                    </List>
                                </Grid>
                            </Grid>
                        }
                        {value === 1 &&
                            <Grid container className={classes.schedules}>
                                <Grid item md={7}>
                                    <List dense="true">
                                        <Schedule
                                            procedure={['Chinese Worship', 'Chinese Sunday School', 'Fellowship Lunch', 'Choir', 'Sports']}
                                            classes={classes}
                                        />
                                    </List>
                                </Grid>
                                <Grid item md={5}>
                                    <List dense="true">
                                        <Schedule
                                            procedure={['10:00 A.M.', '11:30 A.M.', '12:30 P.M.', '1:30 P.M.', '2:00 P.M.']}
                                            classes={classes}
                                        />
                                    </List>
                                </Grid>
                            </Grid>
                        }
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        )
    }
})
