import CollapsableTopicProblem from "./CollapsableTopicProblems";
import { ProblemData } from "../../types/problem.types";
import { listWithTopic } from "../../constants/SampleProblemList";

type Topic = {
    topic: string;
    topicId: string;
    problems: ProblemData[];
}

function ProblemList() {

    return (
        <div className="flex justify-center items-center w-[100vw]">

            <div className="topic-list flex flex-col w-[60%]">
                    
                   {listWithTopic.map((topic: Topic) => <CollapsableTopicProblem topicName={topic.topic} key={topic.topicId} problems={topic.problems}/>)}
            </div>


        </div>
    )
}

export default ProblemList;