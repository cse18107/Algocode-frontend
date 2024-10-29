import React, { useEffect, useState } from 'react'
import HeaderList from '../../components/HeaderList'
import { topicsList } from '../../constants/TopicsList'
import Chip from '../../components/Chip'
// import { problemsList } from '../../constants/SampleProblemList'
import ProblemList from '../../components/ProblemList'
import axios from 'axios'

const Home = () => {
    const [problemsList, setProblemsList] = useState([]);
    const getAllQuestions = async() => {
        const res = await axios.get('http://localhost:3005/api/v1/problems');
        console.log(res.data);
        setProblemsList(res.data.data);
    }

    useEffect(() => {
        getAllQuestions();
    },[])

    return (
        <div className='w-[100%] flex justify-center items-center mt-2'>
            <div className='w-[80%] '>
                <HeaderList header={'All Topics'}>
                    <div className='w-[100%] flex justify-start items-center flex-wrap'>
                        {topicsList.map((topics) => {
                            return <Chip text={topics.title} border={100} color={'#343434'} />
                        })}
                    </div>
                </HeaderList>
                <HeaderList header={'All Problems'}>
                    <div className='w-[100%] flex justify-start items-center flex-col pl-[0.8rem] pr-[0.8rem]'>
                        {problemsList.map((problem) => {
                            return <ProblemList title={problem.title} link={`/problem/${problem._id}`} color={'#343434'}/>
                        })}
                    </div>
                </HeaderList>
            </div>
        </div>
    )
}

export default Home