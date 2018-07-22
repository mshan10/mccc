import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import building from '../../img/building.jpg'

const styles = theme => ({
})

export default withStyles(styles)(props => {
    const { classes } = props

    return (
        <div className={classes.header}>
            <Typography variant="headline" className={classes.aboutUs}>About Us</Typography>
            <div className="about-us-box">
                <Typography variant="display1" className={classes.bodyText}>
                    教会2018年度春季成人主日学从本周日(11/2)开始新的课程《从圣经的教导反省埋怨的教训》。本课程将以圣经中古代以色列民在出埃及至迦南途中因埋怨而遭受上帝惩罚所付上的生命代价为教训，检视当今信徒生活、生命中因抱怨所导致的毁坏性影响；伴随本课程亦将开展“不抱怨21天手环实践”活动。
                </Typography>
            </div>
            <Button variant="outline" size="large" className={classes.button}>
                About US
            </Button>
        </div>
    )
})
