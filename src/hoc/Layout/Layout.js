import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <main className={this.props.classes.root}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default compose(withStyles(styles))(Layout);
