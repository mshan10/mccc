import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const theme = createMuiTheme({
    palette: {
        common: {
            // black: '#45a29e'
        },
        primary: {
            main: '#1f2833',
            // dark: '#0b0c10'
            dark: '#45a29e'
        },
        secondary: {
            main: '#66fcf1',
            dark: '#45a29e'
        },
        text: {
            primary: 'rgba(197,198,199,.87)',
            secondary: 'rgba(197,198,199,.6)'
        },
        background: {
            paper: '#1f2833',
            default: '#1f2833'
        }
    },
    typography: {
        fontFamily: "'Open Sans', 'Helvetica', 'Arial', sans-serif"
    }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
)
registerServiceWorker()
