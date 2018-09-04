import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const styles = theme => ({
    group: {
        margin: `${theme.spacing.unit}px 0`
    }
});

const Options = props => {
    const { classes, items } = props;
    const options = [];
    const radioName = 'question-' + props.current;
    const values = Object.keys(props.values);

    for (let option in items) {
        options.push({
            option: option,
            label: items[option]
        });
    }

    const optionsOutput = options.map(op => {
        const label = op.option + ') ' + op.label;
        return (
            <FormControlLabel
                value={op.option}
                control={<Radio />}
                label={label}
                key={op.option}
                disabled={props.verifiedAnswer}
            />
        );
    });

    return (
        <RadioGroup
            aria-label="Question"
            name={radioName}
            className={classes.group}
            value={values[0]}
            onChange={props.questionAnswered}
        >
            {optionsOutput}
        </RadioGroup>
    );
};

Options.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Options);
