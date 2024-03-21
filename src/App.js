import React from "react"
import { Container, AppBar,Typography, Grow,Grid} from  "@mui/material";

import memories from './images/memories.png'
import Form from './components/Form/Form.js'
import Posts from './components/Posts/Posts.js'
import useStyles from './styles.js'

const App = ()=>{
    const classes = useStyles()
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color ="inherit">
               <Typography className= {classes.heading} variant="h2" align= "center">Memories</Typography>
                <img src ={memories} alt ="memories" height="400px"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify ="space-between" alignItems= "stretch" spacing={3}></Grid>
                    <Grid item xs= {12} sm={4}>
                        <Posts />
                    </Grid>
                    <Grid item xs= {12} sm={4}>
                        <Form />
                    </Grid>

                </Container>
            </Grow>
        </Container>
    )
}

export default App

