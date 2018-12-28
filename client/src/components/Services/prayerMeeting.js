import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'
import Picture from "../../img/history.png"

const styles = theme => ({
    background: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${Picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
    title: {
        paddingTop: 80,
        color: "#F1F1F2",
        [theme.breakpoints.down('sm')]: {
            fontSize: 50
        }
    },
    details: {
        width: '100wh',
        backgroundColor: '#f7f7f7',
        marginTop: 80,
        padding: '50px 0',
    },
    textE: {
        padding: '10px 100px',
        lineHeight: 2,
        letterSpacing: 1.5,
        color: theme.palette.primary.main
    },
    textC: {
        padding: '10px 100px',
        lineHeight: 2,
        letterSpacing: 1.5,
        fontSize: 18,
        color: theme.palette.secondary.dark
    }
})

export default withStyles(styles)(class extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.background}>
                <Typography variant="display4" align="center" className={classes.title}>Prayer Meeting</Typography>
                <Paper className={classes.details}>
                    <Typography variant="subheading" className={classes.textC}>
                        人有沒有失意、挫敗的時候？有沒有心裏煩躁、不知所措的時候？有沒有陷入困境、期待幫助的時候？有沒有軟弱無力，需要堅固扶持的時候？再從積極面來看，有沒有高興歡喜，想與人分享的時候？有沒有心存感激、知恩圖報的時候？有沒有惻隱之心，想為 “有需要的人”做一點事？有沒有想要“遠離塵囂“、洗滌心靈，寧靜片刻鐘？

                        週三晚上7：30在教會的禱告會，是為上述種種情況的人預備的。更正確的說，禱告會是神對人的呼召，祂說:「你們得救在乎歸回安息，你們得力在乎平靜安穩。」（賽30:15）什麼時候人來到神面前，就要領受祂寶貴的應許。神說 ：「我的殿必稱為萬民禱告的殿。」（賽56: 7）「你們要呼求我，禱告我，我就應允你們。你們尋求我，若專心尋求我，就必尋見。」（耶29: 12, 13）神給每個人都有機會親近祂，來到祂面前的，必得享平安與喜樂。歡迎你來，讓我們一起在禱告中經歷神奇妙的恩典。
                    </Typography>
                    <Typography variant="subheading" className={classes.textE}>
                        Have you ever had moments of disappointment, failure, anxiety and not knowing what to do? Have you ever felt trapped and longed for help? Have you ever felt weak and needed uplifting? On the other hand, are you feeling joyful and wanting to share your joy with others? Have you ever been thankful and wishing to give back, ever thought of the needy and wanted to do something for them? Do you need a quiet moment to get away from the hustle and bustle of the daily life?

                        The Wednesday night 7:30 prayer meeting at Church is for everyone that has had any of these experiences. Praying is God's calling to His own people. He said, "In repentance and rest is your salvation, in quietness and trust is your strength" (Isaiah 30:15). Whenever men turn to God, they will receive His promise. God said, "My house will be called a house of prayer for all nations" (Isaiah 56:7), "you will call upon me and come and pray to me, and I will listen to you. You will seek me and find me when you seek me with all your heart" (Jeremiah 29:12,13). God gives every one of us opportunities to come near Him. All who come near Him will have peace and joy. We welcome you to join us in prayers to experience His miraculous grace.
                    </Typography>
                </Paper>
            </div>
        )
    }
})
