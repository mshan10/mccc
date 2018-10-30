import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, List, ListItem, Grid, Tabs, Tab } from '@material-ui/core'
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';


const styles = theme => ({
    list: {
        padding: '0 1%',
        color: '#34314c',
    },
    paper: {
        margin: '2% 2% 5% 2%',
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
        color: '#F1F1F2'
    },
    section: {
        paddingTop: 20,
        maxWidth: '100%',
        backgroundColor: '#f2f2f2'
    },
    title: {
        textAlign: 'center',
        margin: '20px auto',
        textTransform: 'capitalize',
    },
    bar: {
        display: 'block',
        height: 2,
        backgroundColor: '#1995AD',
        content: " ",
        width: 150,
        margin: '5px auto',
    },
    heading: {
        width: '100%',
        margin: 0,
        padding: 10,
        backgroundColor: '#1995AD'
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
        color: '#A1D6E2',
    },
    textColor: {
        color: '#BCBABE'
    },
    // scheduleList: {
    // },
    map: {
        color: '#A1D6E2',
        '&:hover': {
            color: '#1995AD',
            textDecoration: 'none',
        }
    }
})

const Schedule = ({procedure, styling}) => {
    return procedure.map((procedureItem, index) => {
        return(
            <ListItem className={`${styling}`} key={index}>
                <Typography variant="subheading" color="primary">{procedureItem}</Typography>
            </ListItem>
        )
    })
}

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
                <Typography variant="subheading" align="center">
                    <a className={classes.map} href="https://goo.gl/maps/wVAjBPkX4Fk">
                        11085 Loughlin Dr  -  Mishawaka, IN 46530
                    </a>
                </Typography>
                <Grid container spacing={16} className={classes.grid} justify="center">
                    <Paper className={classes.paper} elevation={15}>
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
                                            styling={classes.procedure}
                                        />
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper className={classes.paper} elevation={15}>
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
                                    <List>
                                        <Schedule
                                            procedure={['English Sunday School', 'English Worship', 'Fellowship Lunch', 'Choir', 'Sports']}
                                            styling={classes.scheduleList}
                                        />
                                    </List>
                                </Grid>
                                <Grid item md={5}>
                                    <List>
                                        <Schedule
                                            procedure={['10:00 A.M.', '11:30 A.M.', '12:30 P.M.', '1:30 P.M.', '2:00 P.M.']}
                                            styling={classes}
                                        />
                                    </List>
                                </Grid>
                            </Grid>
                        }
                        {value === 1 &&
                            <Grid container className={classes.schedules}>
                                <Grid item md={7}>
                                    <List>
                                        <Schedule
                                            procedure={['Chinese Worship', 'Chinese Sunday School', 'Fellowship Lunch', 'Choir', 'Sports']}
                                            styling={classes.scheduleList}
                                        />
                                    </List>
                                </Grid>
                                <Grid item md={5}>
                                    <List>
                                        <Schedule
                                            procedure={['10:00 A.M.', '11:30 A.M.', '12:30 P.M.', '1:30 P.M.', '2:00 P.M.']}
                                            styling={classes.scheduleList}
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
