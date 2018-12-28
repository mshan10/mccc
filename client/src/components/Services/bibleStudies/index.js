import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid } from '@material-ui/core'
import Picture from "../../../img/history.png"
import Study from "./bibleStudy"

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
    text: {
        lineHeight: 2,
        color: theme.palette.primary.main,
        fontSize: 20
    },
    deaconBoard: {
        padding: theme.spacing.unit *5
    },
    info: {
        padding: '0 40px',
        color: theme.palette.primary.main,
        lineHeight: 1.5
    }
})

export default withStyles(styles)(class extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.background}>
                <Typography variant="display4" align="center" className={classes.title}>Bible Studies</Typography>
                <Paper className={classes.details}>
                    <Typography className={classes.info} variant='title'>
                    Michiana Chinese Christian Church currently has bible study fellowships in the following groups. If you would like to join any of our bible study groups, please email the contact person of that particular group you want to be in or email/call Pastor Yang for assistance.
                    Email: rockwellyang@yahoo.com,
                    Church Phone: 574-256-9422
                    </Typography>
                    <Grid container spacing={40} justify="space-evenly" className={classes.deaconBoard}>
                        <Grid item md={4}>
                            <Study
                                title="喜乐小组 Happy Group"
                                name="Contact: Evie Zhang (eviezhang@hotmail.com)"
                                bio='喜樂小組歡迎每個慕道朋友或基督徒家庭來參加， 我們主要敬拜和查經的主題是圍繞在家庭， 親子及如何在基督裡長進， 過豐豐滿滿， 喜樂的生活。 我們組的主題歌為 " 常常喜樂"。'
                            />
                        </Grid>
                        <Grid item md={4}>
                            <Study
                                title="八福小组 Central Group"
                                name="Contact: 谭成梅 Chengmei Tan (shikai@omicronbio.com)"
                                bio="八福小組真誠邀請您參加我們的小組聚會。八福小組大部分是基督徒，也有幕道朋友有人執教於學校，有人忙碌於實驗室和機房 有人是會計師，有人是全職媽媽有兒女已讀大學的中年人，也有正背著書包的青年人。聚會的內容是查考聖經或觀看福音錄像，然后是茶點時間。大家在一起領受神的話語，堅固信仰，探討人生。平時也在家庭，工作和養育兒女各方面互相幫助和勉勵。"
                            />
                        </Grid>
                        <Grid item md={4}>
                            <Study
                                title="恩典小组 Grace Group"
                                name="Contact: Linda Zhang (linda54743@yahoo.com)"
                                bio='我們是一群喜愛 "游牧的" 朋友, 每一個月遷移到不同的家庭聯誼聚會. 我們一起查考神的話語, 探討生命的意義, 彼此分享生活上的酸甜苦辣. 朋友們, 歡迎您一起加入我們 "游牧" 的組,我們可以彼此學習,相互勉勵,共同成長.'
                            />
                        </Grid>
                        <Grid item md={4}>
                            <Study
                                title="新生命小組 New Life Group"
                                name="Contact: Simon Zhang (simonz15@hotmail.com)"
                                bio=""
                            />
                        </Grid>
                        <Grid item md={4}>
                            <Study
                                title="丰盛小组 Abundant Life Group"
                                name="Contact: Amy Ren (renamy@hotmail.com)"
                                bio="主耶稣来是要叫人得生命，并且得的更丰盛（约10:10）。丰盛小组成立不久，目前主要由70后和80后的家庭组成，上有40后50后的父母辈，下有00后10后的孩子们。我们热切地欢迎各个年龄段的慕道友或基督徒加入，彼此帮助扶持，共同在主内成长，仰望神丰盛的恩典，得着祂所应许的丰盛生命。"
                            />
                        </Grid>
                        <Grid item md={4}>
                            <Study
                                title="學生團契 Student Fellowship"
                                name="Contact: Jerry Wei (jwei@nd.edu)"
                                bio="學生團契主要是由Notre Dame 和 IUSB 的學生組成. 我們一般在禮拜五晚上(7:30pm) 或禮拜六晚上(7:00 pm) 聚會查經. 地點離Notre Dame 校園很近, 可以步行到研究生公寓. 我們每個月還有一次 potluck 聚餐, 不但分享各地美食, 也有娛樂活動. 歡迎您加入我們一起學習, 討論聖經. 希望我們能成為朋友!"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
})
