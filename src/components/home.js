import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


import './home.css';

const styles = theme => ({
    root: {
         ...theme.mixins.gutters(),
         paddingTop: theme.spacing.unit * 2,
         paddingBottom: theme.spacing.unit * 2,
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
        fontSize: 40,
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
    }

});

class Home extends React.Component {
    render() {
    const { classes } = this.props;

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
                    <Typography variant="headline" className={classes.Typography}>Join us for worship</Typography>
                    <Paper className={classNames(classes.root, classes.paper)} elevation={5}>
                        <Typography variant="headline">
                            This is a sheet of paper.
                        </Typography>
                        <Typography>
                            Paper can be used to build surface or other elements for your application.
                        </Typography>
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
