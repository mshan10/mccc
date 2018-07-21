import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, List, ListItem, ListItemText, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';


const styles = theme => ({
    root: {
         ...theme.mixins.gutters(),
         paddingTop: theme.spacing.unit * 2,
         paddingBottom: theme.spacing.unit * 2,
    },
    list: {
        padding: '0 8%',
        color: '#34314c',
    },
    icon: {
        color: '#47b8e0',
        marginRight: 7,
    },
    paper: {
        margin: '2% 15%',
    },

})

const Schedule = ({procedure, classes}) => {
    return procedure.map((procedureItem, index) => {
        return(
            <ListItem className={classes.list} key={index}>
                <Typography variant="subheading">{procedureItem}</Typography>
            </ListItem>
        )
    })
}
// <FontAwesome name="far fa-church" className={classes.icon}></FontAwesome>

export default withStyles(styles)(props => {
    const { classes } = props

    return(
        <div>
            <Typography variant="display3" className={classes.title}>Join us for worship</Typography>
            <Paper className={classNames(classes.root, classes.paper)} elevation={5}>
                <Grid container spacing={16} className={classes.grid}>
                    <Grid item md={6}>
                        <List>
                            <Schedule
                                procedure={['Prelude', 'Call to Worship', 'Singspiration', 'Pastoral Prayer', 'Scripture Reading', 'Message by Pastor', 'Responding Hymn', 'Bedediction', 'Welcome & Announcements', 'Postlude']}
                                classes={classes}
                            />
                        </List>
                    </Grid>
                        <ExpansionPanel expanded='true'>
                           <ExpansionPanelSummary>
                               <Typography className={classes.heading}>English Schedule</Typography>
                           </ExpansionPanelSummary>
                           <ExpansionPanelDetails>
                               <Grid container>
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
                    <Grid item md={6}>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
})
// <section className="section">
//     <Typography variant="headline" className={classNames(classes.Typography, classes.church)}>Join us for worship</Typography>
//     <Paper className={classNames(classes.root, classes.paper)} elevation={5}>
//         <Grid container spacing={16} className={classes.grid}>
//             <Grid item md={6}>
//                 <Typography variant="headline" className={classes.Typography}>Sunday Worship Procedure</Typography>
//                 <List dense="true">
//                     {Schedule([
//                         'Prelude',
//                         'Call to Worship',
//                         'Singspiration',
//                         'Pastoral Prayer',
//                         'Scripture Reading',
//                         'Message by Pastor',
//                         'Responding Hymn',
//                         'Bedediction',
//                         'Welcome & Announcements',
//                         'Postlude',
//                     ])}
//                 </List>
//             </Grid>
//             <Grid item md={6} className={classes.scheduleGrid}>
//             <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
//                 <ExpansionPanelSummary>
//                     <Typography className={classes.heading}>English Schedule</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <Grid container>
//                         <Grid item md={7}>
//                             <List dense="true">
//                                 <ListItem className={classes.list}>English Sunday School</ListItem>
//                                 <ListItem className={classes.list}>English Worship</ListItem>
//                                 <ListItem className={classes.list}>Fellowship Lunch</ListItem>
//                                 <ListItem className={classes.list}>Choir</ListItem>
//                                 <ListItem className={classes.list}>Sports</ListItem>
//                             </List>
//                         </Grid>
//                         <Grid item md={5}>
//                             <List dense="true">
//                                 <ListItem className={classes.list}>10:00 A.M.</ListItem>
//                                 <ListItem className={classes.list}>11:30 A.M.</ListItem>
//                                 <ListItem className={classes.list}>12:30 P.M.</ListItem>
//                                 <ListItem className={classes.list}>1:30 P.M.</ListItem>
//                                 <ListItem className={classes.list}>2:00 P.M.</ListItem>
//                             </List>
//                         </Grid>
//                     </Grid>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
//                 <ExpansionPanelSummary>
//                     <Typography className={classes.heading}>Chinese Schedule</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <Grid container>
//                         <Grid item md={7}>
//                             <List dense="true">
//                                 <ListItem className={classes.list}>Chinese Worship</ListItem>
//                                 <ListItem className={classes.list}>Chinese Sunday School</ListItem>
//                                 <ListItem className={classes.list}>Fellowship Lunch</ListItem>
//                                 <ListItem className={classes.list}>Choir</ListItem>
//                                 <ListItem className={classes.list}>Sports</ListItem>
//                             </List>
//                         </Grid>
//                         <Grid item md={5}>
//                             <List dense="true">
//                                 <ListItem className={classes.list}>10:00 A.M.</ListItem>
//                                 <ListItem className={classes.list}>11:30 A.M.</ListItem>
//                                 <ListItem className={classes.list}>12:30 P.M.</ListItem>
//                                 <ListItem className={classes.list}>1:30 P.M.</ListItem>
//                                 <ListItem className={classes.list}>2:00 P.M.</ListItem>
//                             </List>
//                         </Grid>
//                     </Grid>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
//                 <ExpansionPanelSummary>
//                     <Typography className={classes.heading}>Children Schedule</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <Grid container>
//                         <Grid item md={7}>
//                             <List dense="true">
//                                 <ListItem className={classes.list}>Children Worship</ListItem>
//                                 <ListItem className={classes.list}>Children Sunday School</ListItem>
//                                 <ListItem className={classes.list}>Fellowship Lunch</ListItem>
//                             </List>
//                         </Grid>
//                         <Grid item md={5}>
//                             <List dense="true">
//                                 <ListItem className={classes.list}>10:00 A.M.</ListItem>
//                                 <ListItem className={classes.list}>11:30 A.M.</ListItem>
//                                 <ListItem className={classes.list}>12:30 P.M.</ListItem>
//                                 <ListItem className={classes.list}>1:30 P.M.</ListItem>
//                                 <ListItem className={classes.list}>2:00 P.M.</ListItem>
//                             </List>
//                         </Grid>
//                     </Grid>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             </Grid>
//         </Grid>
//     </Paper>
// </section>
