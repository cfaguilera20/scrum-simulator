import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
    group: {
        margin: `${theme.spacing.unit}px 0`
    }
});

const Options = props => {
    const { items } = props;
    const options = [];

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
                control={<Checkbox checked={props.values[op.option]} />}
                label={label}
                key={op.option}
                disabled={props.verifiedAnswer}
                onChange={props.questionAnswered}
            />
        );
    });

    return (
        <FormGroup>
            {optionsOutput}
        </FormGroup>
    );
};

Options.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Options);
