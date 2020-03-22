import React, { useState } from 'react'
import Lottie from 'lottie-web-react'
import Grid from '@material-ui/core/Grid';
import * as demoConstants from './demoConstants'
let watchAnimationData = require('./stopwatch.json')


// https://stackoverflow.com/questions/58079525/how-to-show-page-after-animation-complete-with-lottie-and-javascript
// https://www.freecodecamp.org/news/how-to-create-a-beautifully-animated-loader-in-react-native-21da37a8f6b0/
// https://reactnative.dev/docs/modal#docsNav

// SAMPLE SPLASH PAGE
// https://auth0.com/blog/creating-a-splash-screen-for-your-react-apps/
// https://stackoverflow.com/questions/57709842/apploading-splashscreen-with-hooks

const Logo = () => {
    const [playingState, setPlayingState] = useState('play')
    const [loopCounter, setLoopCounter] = useState(0)
    const [autoplay, setAutoplay] = useState(false)
    const [loop, setLoop] = useState(false)
    const [path, setPath] = useState('https://assets2.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json')
    const [animationData, setAnimationData] = useState(watchAnimationData)
    const [speed, setSpeed] = useState(0.8)
    const [direction, setDirection] = useState(1)

    //Segment example variables
    const [activeSegment, setActiveSegment] = useState([0, 10])

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>
            <Lottie
                options={{
                    renderer: demoConstants.renderer,
                    loop: loop,
                    autoplay: autoplay,
                    path: path,
                    animationData: animationData,
                    rendererSettings: demoConstants.rendererSettings
                }}
                playingState={playingState}
                speed={speed}
                direction={direction}
                eventListeners={[{
                    eventName: 'complete',
                    callback: () => {
                        console.log('completed');
                    }
                }]}
            />
         </Grid>
    )
}

export default Logo