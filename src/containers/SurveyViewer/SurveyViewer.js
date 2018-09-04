import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Survey from '../../components/Survey/Survey';
import * as actions from '../../store/actions/index';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit
    }
});

export class SurveyViewer extends Component {
    finishSurveyHandler = () => {
        this.props.onFinishSurvey();
        this.props.history.push('/results');
    };

    render() {
        const questionTitle = this.props.questions[this.props.current].question;
        const questionOptions = this.props.questions[this.props.current]
            .options;
        const questionOptionsSelected =
            this.props.answers[this.props.current] || [];
        const questionTotal = this.props.questions.length;
        const currentHuman = this.props.current + 1;
        const correctAnswer = this.props.questions[
            this.props.current
        ].correct.join(', ');
        const verifiedAnswer = this.props.current in this.props.verified;
        const isRadio = !this.props.questions[this.props.current].isMultiple;
        const isLastQuestion = questionTotal === currentHuman;

        let value = null;
        if (questionOptionsSelected.length > 0) {
            value = questionOptionsSelected[0];
        }

        return (
            <div className={this.props.classes.root}>
                <Survey
                    questions={this.props.questions}
                    answers={this.props.answers}
                    questionTitle={questionTitle}
                    questionOptions={questionOptions}
                    questionOptionsSelected={questionOptionsSelected}
                    questionTotal={questionTotal}
                    isRadio={isRadio}
                    value={value}
                    current={this.props.current}
                    currentHuman={currentHuman}
                    questionPrev={this.props.onQuestionPrev}
                    questionVerify={this.props.onQuestionVerify}
                    questionSkip={this.props.onQuestionSkip}
                    questionNext={this.props.onQuestionNext}
                    finishSurvey={this.finishSurveyHandler}
                    questionAnswered={this.props.onQuestionAnswered}
                    correctAnswer={correctAnswer}
                    verifiedAnswer={verifiedAnswer}
                    isLastQuestion={isLastQuestion}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        answering: state.surveyViewer.answering,
        answers: state.surveyViewer.answers,
        current: state.surveyViewer.currentQuestion,
        questions: state.surveyViewer.survey,
        verified: state.surveyViewer.verified,
        isMultiple: state.surveyViewer.isMultiple
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onQuestionPrev: () => dispatch(actions.questionPrev()),
        onQuestionVerify: () => dispatch(actions.questionVerify()),
        onQuestionSkip: () => dispatch(actions.questionSkip()),
        onQuestionNext: () => dispatch(actions.questionNext()),
        onQuestionAnswered: event => dispatch(actions.questionAnswered(event)),
        onFinishSurvey: () => dispatch(actions.finishSurvey())
    };
};

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(SurveyViewer);
