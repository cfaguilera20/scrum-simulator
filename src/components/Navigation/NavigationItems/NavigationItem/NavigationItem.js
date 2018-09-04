import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    item: {
        textDecoration: 'none',
    }
});

const navigationItem = props => {
    const { classes } = props;

    return (
        <NavLink to={props.link} exact={props.exact} className={classes.item} activeClassName={classes.active}>
            <Button className={classes.button}>{props.children}</Button>
        </NavLink>
    );
};

navigationItem.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(navigationItem);
