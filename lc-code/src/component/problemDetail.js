import SubmissionGraph from "./submissionGraph";

const ProblemDetail = ({questionID, QuestionTitle, QuestionDescription, QuestionAllowedLang}) => {
    return (
        <div className="h-screen w-screen flex">
            <div className="flex w-full">
                ok1
            </div>
            <div className="flex justify-content-center max-w-[300px] min-w-[300px]">
                <SubmissionGraph />
            </div>
        </div>
    )
}

export default ProblemDetail;