import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support


import Lottie from 'lottie-web-react'
// import Grid from '@material-ui/core/Grid';
import * as demoConstants from './demoConstants'
let watchAnimationData = require('./stopwatch.json')

// Proper splash page:
//https://auth0.com/blog/creating-a-splash-screen-for-your-react-apps/

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "hidden"
        // border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
}));

// const Fade = React.forwardRef(function Fade(props, ref) {
//     const { in: open, children, onEnter, onExited, ...other } = props;
//     const style = useSpring({
//         from: { opacity: 0 },
//         to: { opacity: open ? 1 : 0 },
//         onStart: () => {
//             if (open && onEnter) {
//                 onEnter();
//             }
//         },
//         onRest: () => {
//             if (!open && onExited) {
//                 onExited();
//             }
//         },
//     });

//     return (
//         <animated.div ref={ref} style={style} {...other}>
//             {children}
//         </animated.div>
//     );
// });

// Fade.propTypes = {
//     children: PropTypes.element,
//     in: PropTypes.bool.isRequired,
//     onEnter: PropTypes.func,
//     onExited: PropTypes.func,
// };

export default function ModalTest() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
        <div>
            <button type="button" onClick={handleOpen}>
                react-spring
            </button>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                {/* <Fade in={open}> */}
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
                                setOpen(false);
                            }
                        }]}
                    />
                {/* </Fade> */}
            </Modal>
        </div>
    );
}