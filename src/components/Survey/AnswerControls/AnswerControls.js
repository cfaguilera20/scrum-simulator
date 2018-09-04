import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const controls = [
    { label: 'Prev', color: 'secondary', onclick: 'questionPrev' },
    { label: 'Verify question', color: 'default', onclick: 'questionVerify' },
    //{ label: 'Saltar', color: 'default', onclick: 'questionSkip' },
    { label: 'Finish', color: 'default', onclick: 'finishSurvey' },
    { label: 'Next', color: 'primary', onclick: 'questionNext' }
];

const styles = theme => ({
    controlsPaper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center'
    },
    button: {
        margin: theme.spacing.unit
    }
});

const answerControls = props => {
    const { classes } = props;

    return (
        <Grid container spacing={24} justify="center">
            <Grid item xs={8}>
                <Paper elevation={0} className={classes.controlsPaper}>
                    <p>
                        Current question: <strong>{props.current}</strong> of{' '}
                        <strong>{props.total}</strong>
                    </p>
                    {controls.map(ctrl => {
                        const disabled =
                            (ctrl.onclick === 'questionPrev' &&
                                props.current === 1) ||
                            (ctrl.onclick === 'questionVerify' &&
                                props.verifiedAnswer) ||
                            (ctrl.onclick === 'questionNext' &&
                                props.isLastQuestion)
                                ? true
                                : false;
                        return (
                            <Button
                                key={ctrl.label}
                                className={classes.button}
                                disabled={disabled}
                                variant="outlined"
                                color={ctrl.color}
                                onClick={() => props[ctrl.onclick]()}
                            >
                                {ctrl.label}
                            </Button>
                        );
                    })}
                </Paper>
            </Grid>
        </Grid>
    );
};

answerControls.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(answerControls);
