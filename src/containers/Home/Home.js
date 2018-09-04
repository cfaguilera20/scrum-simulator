import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import * as actions from '../../store/actions/index';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center'
    },
    button: {
        margin: theme.spacing.unit
    },
    left: {
        textAlign: 'left'
    }
});

export class Home extends Component {
    initSurveyHandler = () => {
        this.props.onInitSurvey();
        this.props.history.push('/survey');
    };

    stopSurveyHandler = () => {
        this.props.onStopSurvey();
        this.props.history.push('/');
    };

    continueSurveyHandler = () => {
        this.props.onContinueSurvey();
        this.props.history.push('/survey');
    };

    render() {
        let buttons = (
            <div>
                {' '}
                <Button
                    variant="outlined"
                    onClick={this.initSurveyHandler}
                    color="primary"
                    className={this.props.classes.button}
                >
                    START
                </Button>
            </div>
        );

        if (this.props.answering) {
            buttons = (
                <div>
                    {' '}
                    <Button
                        onClick={this.stopSurveyHandler}
                        className={this.props.classes.button}
                    >
                        Leave questionnaire
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={this.continueSurveyHandler}
                        color="primary"
                        className={this.props.classes.button}
                    >
                        Continue
                    </Button>
                </div>
            );
        }

        return (
            <div className={this.props.classes.root}>
                <Grid container spacing={24} justify="center">
                    <Grid item xs={12} className={this.props.classes.root}>
                        <Paper
                            elevation={0}
                            className={this.props.classes.paper}
                        >
                            <Typography variant="headline" component="h1">
                                SCRUM MASTER SIMULATOR
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} className={this.props.classes.root}>
                        <Paper
                            elevation={0}
                            className={this.props.classes.paper}
                        >
                            <Typography
                                variant="headline"
                                component="h3"
                                className={this.props.classes.left}
                            >
                                Assess your basic Scrum knowledge
                            </Typography>
                            <Typography
                                component="p"
                                className={this.props.classes.left}
                            >
                                The Scrum Simulator assessment is a tool for
                                validating your basic knowledge of the Scrum
                                framework. Taking the Scrum Simulator will allow
                                you to create a baseline of your current Scrum
                                knowledge, from which you can start improving
                                immediately. It is free of charge and does not
                                include any certification.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={this.props.classes.root}>
                        <Paper
                            elevation={0}
                            className={this.props.classes.paper}
                        >
                            {buttons}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        answering: state.surveyViewer.answering
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onInitSurvey: () => dispatch(actions.initSurvey()),
        onStopSurvey: () => dispatch(actions.stopSurvey()),
        onContinueSurvey: () => dispatch(actions.continueSurvey())
    };
};

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Home);
