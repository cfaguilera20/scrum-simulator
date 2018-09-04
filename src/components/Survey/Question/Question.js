import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import RadioOptions from './RadioOptions/RadioOptions';
import CheckboxOptions from './CheckboxOptions/CheckboxOptions';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
    root: {
        display: 'flex'
    },
    formControl: {
        margin: theme.spacing.unit * 3
    }
});

const Question = props => {
    const { classes } = props;
    let formOptions = null;

    if (props.isRadio) {

        formOptions = (
            <RadioOptions
                items={props.options}
                current={props.current}
                questionAnswered={props.questionAnswered}
                values={props.questionOptionsSelected}
                verifiedAnswer={props.verifiedAnswer}
            />
        );
    } else {
        formOptions = (
            <CheckboxOptions
                items={props.options}
                current={props.current}
                questionAnswered={props.questionAnswered}
                values={props.questionOptionsSelected}
                verifiedAnswer={props.verifiedAnswer}
            />
        );
    }

    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">{props.title}</FormLabel>
            {formOptions}
        </FormControl>
    );
};

Question.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Question);
