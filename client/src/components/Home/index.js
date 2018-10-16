import React from 'react'
import Main from './main'
import Schedule from './schedule'
import About from './aboutus'
import Photos from './photos'

export default (props => {
    return (
        <div>
            <Main/>
            <Schedule/>
            <About/>
            <Photos/>
        </div>
    )
})
