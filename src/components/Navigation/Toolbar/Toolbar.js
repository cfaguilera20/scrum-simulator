import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavigationItems from "../NavigationItems/NavigationItems";

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flexGrow: 1,
    },
};

const toolbar = props => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        SMS
                    </Typography>
                    <NavigationItems />
                </Toolbar>
            </AppBar>
        </div>
    );
};

toolbar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(toolbar);
