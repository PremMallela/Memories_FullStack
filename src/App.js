import React, { useEffect } from "react"
import { Container, AppBar,Typography, Grow,Grid} from  "@mui/material";
import { useDispatch } from  'react-redux'

import memories from './images/memories.png'
import Form from './components/Form/Form.js'
import Posts from './components/Posts/Posts.js'
import useStyles from './styles.js'
import { getPosts } from './actions/posts'

const App = ()=>{
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color ="inherit">
               <Typography className= {classes.heading} variant="h2" align= "center">Memories</Typography>
                <img className = {classes.image} src ={memories} alt ="memories" height="60px"/>
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

