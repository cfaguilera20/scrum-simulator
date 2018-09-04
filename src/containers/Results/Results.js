import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit
    },
    paper: {
        padding: theme.spacing.unit * 2
    },
    button: {
        margin: theme.spacing.unit
    },
    center: {
        textAlign: 'center'
    },
    underLine: {
        textDecoration: 'underline'
    }
});

export class Results extends Component {
    render() {
        let correctCounter = [];

        const responseOutput = this.props.questions.map(
            (question, questionIndex) => {
                const options = [];

                for (let option in question.options) {
                    options.push({
                        option: option,
                        label: question.options[option]
                    });
                }

                let reponseCorrect = true;
                const optionsOutput = options.map((option, optionIndex) => {
                    const unionIndex = questionIndex + '-' + optionIndex;
                    let optionClassName = null;
                    let optionColor = 'inherit';

                    // Is the expected response? Asign the color
                    if (
                        question.correct.indexOf(option.option) !== -1 &&
                        this.props.finished
                    ) {
                        optionColor = 'primary';
                    }

                    // Has responses?
                    if (this.props.answers[questionIndex] !== undefined) {
                        // Has the current options
                        if (
                            this.props.answers[questionIndex][option.option] !==
                            undefined
                        ) {
                            // The current options is true
                            if (
                                this.props.answers[questionIndex][option.option]
                            ) {
                                optionClassName = this.props.classes.underLine;

                                // The current options is false?
                                if (
                                    question.correct.indexOf(option.option) ===
                                    -1
                                ) {
                                    optionColor = 'secondary';
                                    reponseCorrect = false;
                                }
                            }
                        }
                    } else {
                        reponseCorrect = false;
                    }

                    return (
                        <Typography
                            component="p"
                            key={unionIndex}
                            color={optionColor}
                            className={optionClassName}
                        >
                            {option.option}) {option.label}
                        </Typography>
                    );
                });

                if (reponseCorrect) {
                    correctCounter[questionIndex] = reponseCorrect;
                }

                return (
                    <Grid item xs={8} key={questionIndex}>
                        <Paper
                            elevation={0}
                            className={this.props.classes.paper}
                        >
                            <Typography variant="headline" component="h5">
                                {question.question}
                            </Typography>
                            {optionsOutput}
                        </Paper>
                    </Grid>
                );
            }
        );

        let percent =
            (correctCounter.length * 100) / this.props.questions.length;

        return (
            <div className={this.props.classes.root}>
                <Typography
                    variant="headline"
                    component="h1"
                    justify="center"
                    className={this.props.classes.center}
                >
                    Correct answer: {correctCounter.length} -{' '}
                    {percent.toFixed(2)} %
                </Typography>
                <Grid container spacing={24} justify="center">
                    {responseOutput}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        answers: state.surveyViewer.answers,
        questions: state.surveyViewer.survey,
        finished: state.surveyViewer.finished
    };
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Results);
