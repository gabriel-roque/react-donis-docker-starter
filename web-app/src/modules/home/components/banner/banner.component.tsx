import React from 'react';

import ReactdonisLogo from 'assets/img/logos/reactdonis.jpg';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './banner.styles';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      {/* <div className={classes.bgcover}> */}
      <Container maxWidth="sm">
        <Grid item>
          <img src={ReactdonisLogo} alt="Reactdonis logo" className={classes.reactdonis} />
        </Grid>
        <Typography variant="h5" align="justify" color="textSecondary" paragraph>
          A simple project starter with (Ngnix, ReactJS, Redux, Redux Thunk, React Router, AdonisJS, PostgreSQL, Docker,
          PM2) + (Conventional Changelog with Commitlint, Husky, Git CZ)
        </Typography>
        <div className={classes.buttons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link href="https://github.com/gabriel-roque" target="_blank">
                <Button variant="contained" color="default" size="large" className={classes.btnGithub}>
                  <FontAwesomeIcon icon={faGithub} size="lg" className={classes.githubIcon} /> <b>Get started</b>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
      {/* </div> */}
    </div>
  );
}
