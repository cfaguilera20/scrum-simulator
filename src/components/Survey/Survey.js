import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Question from './Question/Question';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Aux from '../../hoc/Aux/Aux';
import AnswerControls from './AnswerControls/AnswerControls';
import Timer from 'react.timer';

const styles = theme => ({
    paperQuestion: {
        padding: theme.spacing.unit * 2,
        minHeight: 320
    },
    paperVerify: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center'
    },
    button: {
        margin: theme.spacing.unit
    }
});

const Survey = props => {
    const { classes } = props;

    let verifiedText = null;
    if (props.verifiedAnswer) {
        verifiedText = (
            <Grid item xs={8} className={classes.root}>
                <Paper elevation={0} className={classes.paperVerify}>
                    La respuesta correcta es: {props.correctAnswer}
                </Paper>
            </Grid>
        );
    }

    return (
        <Aux>
            <Grid container spacing={24} justify="center">
                <Grid item xs={8} className={classes.root}>
                    <Paper elevation={0} className={classes.paperVerify}>
                        <Timer />
                    </Paper>
                    <Paper elevation={1} className={classes.paperQuestion}>
                        <Question
                            title={props.questionTitle}
                            options={props.questionOptions}
                            questionOptionsSelected={
                                props.questionOptionsSelected
                            }
                            current={props.current}
                            questionAnswered={props.questionAnswered}
                            verifiedAnswer={props.verifiedAnswer}
                            isRadio={props.isRadio}
                        />
                    </Paper>
                </Grid>
            </Grid>
            <AnswerControls
                current={props.currentHuman}
                total={props.questionTotal}
                questionPrev={props.questionPrev}
                questionVerify={props.questionVerify}
                questionSkip={props.questionSkip}
                questionNext={props.questionNext}
                finishSurvey={props.finishSurvey}
                verifiedAnswer={props.verifiedAnswer}
                isLastQuestion={props.isLastQuestion}
            />
            <Grid container spacing={0} justify="center">
                {verifiedText}
            </Grid>
        </Aux>
    );
};

Survey.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Survey);
