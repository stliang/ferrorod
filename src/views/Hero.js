import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      padding: "100px"
    }
  }));

export default function Hero() {
  const classes = useStyles();
 
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom>
          Material UI Demo
        </Typography>
 
        <Typography variant="p" gutterBottom>
          Hero Component
        </Typography>
      </div>
    </Container>
  );
}