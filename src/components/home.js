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
import Button from '@material-ui/core/Button';



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
        fontSize: 25,

    },
    title: {
        fontWeight: 300,
        fontSize: 80,
        letterSpacing: 1.5,
        padding: '150px 100px',
    },
    church: {
        fontSize: 60,
        margin: 0,
        letterSpacing: -2,
        fontFamily: 'Helvetica',
        textTransform: 'uppercase',
        fontWeight: 600,
        transform: 'scaleY(1.3)',

    },
    list: {
        padding: '0 20px',
        color: '#47b8e0',

    },
    grid: {
        padding: '20px 10px',
    },
    icon: {
        color: '#47b8e0',
        marginRight: 7,
    },
    heading: {
        color: '#47b8e0',
        fontSize: 20,
    },
    scheduleGrid: {
        marginTop: 60,
    },
    aboutUs: {
        fontSize: 80,
        fontFamily: 'Helvetica',
        textTransform: 'uppercase',
        transform: 'scaleY(1.3)',
        textAlign: 'center',
        color: '#fff',
        paddingTop: 60,
        fontWeight: 600,
    },
    font: {
        fontFamily: 'Helvetica',
        fontWeight: 600,
        transform: 'scaleY(1.3)',
    },
    bodyText: {
        color: '#fff',
    },
    button: {
        backgroundColor: '#ffc952',
        '&:hover': {
            backgroundColor: '#ffb91f',
        }
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
                            <Grid item md={6} className={classes.scheduleGrid}>
                            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                                <ExpansionPanelSummary>
                                    <Typography className={classes.heading}>English Schedule</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Grid container>
                                        <Grid item md={7}>
                                            <List dense="true">
                                                <ListItem className={classes.list}>English Sunday School</ListItem>
                                                <ListItem className={classes.list}>English Worship</ListItem>
                                                <ListItem className={classes.list}>Fellowship Lunch</ListItem>
                                                <ListItem className={classes.list}>Choir</ListItem>
                                                <ListItem className={classes.list}>Sports</ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item md={5}>
                                            <List dense="true">
                                                <ListItem className={classes.list}>10:00 A.M.</ListItem>
                                                <ListItem className={classes.list}>11:30 A.M.</ListItem>
                                                <ListItem className={classes.list}>12:30 P.M.</ListItem>
                                                <ListItem className={classes.list}>1:30 P.M.</ListItem>
                                                <ListItem className={classes.list}>2:00 P.M.</ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                                <ExpansionPanelSummary>
                                    <Typography className={classes.heading}>Chinese Schedule</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Grid container>
                                        <Grid item md={7}>
                                            <List dense="true">
                                                <ListItem className={classes.list}>Chinese Worship</ListItem>
                                                <ListItem className={classes.list}>Chinese Sunday School</ListItem>
                                                <ListItem className={classes.list}>Fellowship Lunch</ListItem>
                                                <ListItem className={classes.list}>Choir</ListItem>
                                                <ListItem className={classes.list}>Sports</ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item md={5}>
                                            <List dense="true">
                                                <ListItem className={classes.list}>10:00 A.M.</ListItem>
                                                <ListItem className={classes.list}>11:30 A.M.</ListItem>
                                                <ListItem className={classes.list}>12:30 P.M.</ListItem>
                                                <ListItem className={classes.list}>1:30 P.M.</ListItem>
                                                <ListItem className={classes.list}>2:00 P.M.</ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                                <ExpansionPanelSummary>
                                    <Typography className={classes.heading}>Children Schedule</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Grid container>
                                        <Grid item md={7}>
                                            <List dense="true">
                                                <ListItem className={classes.list}>Children Worship</ListItem>
                                                <ListItem className={classes.list}>Children Sunday School</ListItem>
                                                <ListItem className={classes.list}>Fellowship Lunch</ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item md={5}>
                                            <List dense="true">
                                                <ListItem className={classes.list}>10:00 A.M.</ListItem>
                                                <ListItem className={classes.list}>11:30 A.M.</ListItem>
                                                <ListItem className={classes.list}>12:30 P.M.</ListItem>
                                                <ListItem className={classes.list}>1:30 P.M.</ListItem>
                                                <ListItem className={classes.list}>2:00 P.M.</ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            </Grid>
                        </Grid>
                    </Paper>
                </section>
                <section className="about-us">
                    <Typography variant="headline" className={classes.aboutUs}>About Us</Typography>
                    <div className="about-us-box">
                        <Typography variant="display1" className={classes.bodyText}>
                            教会2018年度春季成人主日学从本周日(11/2)开始新的课程《从圣经的教导反省埋怨的教训》。本课程将以圣经中古代以色列民在出埃及至迦南途中因埋怨而遭受上帝惩罚所付上的生命代价为教训，检视当今信徒生活、生命中因抱怨所导致的毁坏性影响；伴随本课程亦将开展“不抱怨21天手环实践”活动。
                        </Typography>
                    </div>
                    <Button variant="extendedFab" size="large" className={classes.button}>
                        About US
                    </Button>
                </section>
                <section>
                    <div className="center">
                        <h1>1</h1>
                        <div>2</div>
                        <div>3</div>
                    </div>
                </section>
            </div>
        );
    }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
