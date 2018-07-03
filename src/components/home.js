import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FontAwesome from 'react-fontawesome';


import './home.css';

const styles = theme => ({
    root: {
         ...theme.mixins.gutters(),
         paddingTop: theme.spacing.unit * 2,
         paddingBottom: theme.spacing.unit * 2,
    },
    standard: {
        textAlign: 'center',
    },
    paper: {
        margin: '20px 200px',
    },
    flex: {
        flex: 1,
        fontSize: 35,
        fontFamily: 'Lato',
        letterSpacing: 1.5,
    },
    Typography: {
        textAlign: 'center',
        color: '#34314c',
        paddingTop: 5,
        paddingBottom: 15,
        textTransform: 'capitalize',
    },
    title: {
        fontWeight: 300,
        fontSize: 80,
        letterSpacing: 1.5,
        padding: '150px 100px',
    },
    church: {
        fontSize: 40,
        margin: 0,
        letterSpacing: 1.5,
        fontFamily: 'Ubuntu',
    },
    list: {
        paddingBottom: 0,
        paddingTop: 0,
        color: '#47b8e0',

    },
    grid: {
        padding: '20px 10px',
    },
    icon: {
        color: '#47b8e0',
        marginRight: 5,
    }
});

class Home extends React.Component {
    state = {
       expanded: null,
     };

     handleChange = panel => (event, expanded) => {
       this.setState({
         expanded: expanded ? panel : false,
       });
     };
    render() {
    const { classes } = this.props;
    const { expanded } = this.state;


        return (
            <div className="home">
                <div className="header">
                    <Typography variant="subheader" className={classes.title}>
                        <h3 className={classes.church}>Michiana</h3>
                        <h3 className={classes.church}>Chinese</h3>
                        <h3 className={classes.church}>Christian</h3>
                        <h3 className={classes.church}>Chruch</h3>
                    </Typography>
                </div>
                <section className="section">
                    <Typography variant="headline" className={classNames(classes.Typography, classes.church)}>Join us for worship</Typography>
                    <Paper className={classNames(classes.root, classes.paper)} elevation={5}>
                        <Grid container spacing={16} className={classes.grid}>
                            <Grid item md={6}>
                                <Typography variant="headline" className={classes.Typography}>Sunday Worship Procedure</Typography>
                                <List dense="true">
                                    <ListItem className={classes.list}><FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>Prelude</ListItem>
                                    <ListItem className={classes.list}><FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>Call to Worship</ListItem>
                                    <ListItem className={classes.list}><FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>Singspiration</ListItem>
                                    <ListItem className={classes.list}><FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>Pastoral Prayer</ListItem>
                                    <ListItem className={classes.list}><FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>Scripture Reading</ListItem>
                                    <ListItem className={classes.list}><FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>Message by Pastor</ListItem>
                                    <ListItem className={classes.list}><FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>Responding Hymn</ListItem>
                                    <ListItem className={classes.list}><FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>Bedediction</ListItem>
                                    <ListItem className={classes.list}><FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>Welcome & Announcements</ListItem>
                                    <ListItem className={classes.list}><FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>Postlude</ListItem>
                                </List>
                            </Grid>
                            <Grid item md={6}>
                            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                              <ExpansionPanelSummary>
                                <Typography className={classes.heading}>English Schedule</Typography>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails>
                                <Typography>
                                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                  maximus est, id dignissim quam.
                                </Typography>
                              </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                              <ExpansionPanelSummary>
                                <Typography className={classes.heading}>Chinese Schedule</Typography>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails>
                                <Typography>
                                  Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                  diam eros in elit. Pellentesque convallis laoreet laoreet.
                                </Typography>
                              </ExpansionPanelDetails>
                            </ExpansionPanel>


                            </Grid>
                        </Grid>
                    </Paper>
                </section>
            </div>
        );
    }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
