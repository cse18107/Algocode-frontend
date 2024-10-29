import React, { useState } from 'react'
// Import the Slate editor factory.

import InputWithTitle from '../../components/InputWithTitle'
import axios from 'axios'

const AddProblem = () => {
    const [problem, setProblem] = useState<any>({
        title: '',
        topic: 'JAVA',
        description: '',
        testCases: [],
        codeStubs: [],
        editorial: ''
    });
    const [inputTestCase, setInputTestCase] = useState("");
    const [outputTestCase, setOutputTestCase] = useState("");
    const [starterCode, setStarterCode] = useState("");
    const [endCode, setEndCode] = useState("");
    const [userCode, setUserCode] = useState("");
    const [languages, setLanguages] = useState<string[]>([]);
    const [language, setLanguage] = useState<string>('');
    const saveProblem = async(e: Event) => {
        e.preventDefault();
        try{
            const res = axios.post('http://localhost:3005/api/v1/problems', problem);
            console.log(res); 
        }catch (error) {
            console.log(error);
        }
    }

    const onSubmitInputTestCases = (e:Event) => {
        e.preventDefault();
        if(inputTestCase && outputTestCase && inputTestCase.length > 0 && outputTestCase.length > 0){
            const testCase = {
                input: inputTestCase,
                output: outputTestCase
            }
            problem.testCases.push(testCase);
            setProblem({...problem});
        }else{
            console.log('Something is missing');
        }
    }

    const onSubmitLanguage = (value: string) => {
        languages.push(value);
        setLanguages(languages);
    }

    const onSubmitCodeStub = (e: Event) => {
        e.preventDefault();
        if(starterCode && endCode && starterCode.length > 0 && endCode.length > 0){
            const codeStub = {
                language: "JAVA",
                userSnippet: userCode,
                startSnippet: starterCode,
                endSnippet: endCode
            }
            problem.codeStubs.push(codeStub);
            setProblem({...problem});
        }
    }
    const addInputs = (e: Event, value: string, func: any) => {
        e.preventDefault();
        func(value);
    } 
    return (
        <div className='w-[100%] flex justify-center items-center'>
            <form className='flex w-[80%] flex-col justify-center'>
                <TopHeading title={"Enter Information"}>
                    <InputWithTitle header={"Enter Title"}>
                        <input type='text' onChange={(e) =>{
                            e.preventDefault();
                            setProblem({ ...problem, title: e.target.value, });
                        }} className='w-[100%] rounded-md h-[50px] border-[1px] border-solid border-white' />
                    </InputWithTitle>
                    <InputWithTitle header={"Enter Description"}>
                        <textarea onChange={(e) => {
                            e.preventDefault();
                            setProblem({ ...problem, description: e.target.value, });
                        }} className='w-[100%] h-[400px] rounded-md border-[1px] border-solid border-white' />
                    </InputWithTitle>
                    <InputWithTitle header={"Enter Topics"}>
                        <input type='text' onChange={(e) => addInputs(e, e.target.value, setLanguages)} className='w-[100%] rounded-md h-[50px] border-[1px] border-solid border-white' />
                    </InputWithTitle>
                    <div className='flex w-full justify-end mt-2'>
                        <button onClick={onSubmitInputTestCases} className='p-4 bg-green-500 text-black rounded-md'>Add Topics</button>
                    </div>
                </TopHeading>
                <TopHeading title={"Enter TestCases"}>
                    <div className='flex w-full'>
                        <InputWithTitle header={"Enter Input"}>
                            <textarea onChange={(e) => addInputs(e, e.target.value, setInputTestCase)} className='w-[96%] h-[300px] rounded-md border-[1px] border-solid border-white' />
                        </InputWithTitle>
                        <InputWithTitle header={"Enter Output"}>
                            <textarea onChange={(e) => addInputs(e, e.target.value, setOutputTestCase)} className='w-[100%] h-[300px] rounded-md border-[1px] border-solid border-white' />
                        </InputWithTitle>
                    </div>
                    <div className='flex w-full justify-end mt-2'>
                        <button onClick={onSubmitInputTestCases} className='p-4 bg-green-500 text-black rounded-md'>Add TestCases</button>
                    </div>
                </TopHeading>

                <TopHeading title={"Enter Code snippet"}>
                    <div className='flex w-full'>
                        <InputWithTitle header={"Enter Starter Snippet"}>
                            <textarea onChange={(e) => addInputs(e, e.target.value, setStarterCode)} className='w-[96%] h-[300px] border-[1px] rounded-md border-solid border-white' />
                        </InputWithTitle>
                        <InputWithTitle header={"Enter End Snippet"}>
                            <textarea onChange={(e) => addInputs(e, e.target.value, setEndCode)} className='w-[100%] h-[300px] border-[1px] rounded-md border-solid border-white' />
                        </InputWithTitle>
                    </div>
                    <InputWithTitle header={"Enter User Snippet"}>
                        <textarea onChange={(e) => addInputs(e, e.target.value, setUserCode)} className='w-[100%] h-[300px] border-[1px] rounded-md border-solid border-white' />
                    </InputWithTitle>
                    <div className='flex w-full justify-end mt-2'>
                        <select onChange={(e) => onSubmitLanguage(e.target.value)} className='mr-10 border-[1px] border-white border-dashed rounded-md p-3'>
                            <option value="">Select Language</option>
                            <option value="JAVA">Java</option>
                            <option value="CPP">C++</option>
                            <option value="JAVASCRIPT">Javascript</option>
                        </select>
                        <button onClick={onSubmitCodeStub} className='p-4 bg-green-500 text-black rounded-md'>Add CodeStubs</button>
                    </div>
                </TopHeading>

                <TopHeading title={"Enter Editorial"}>
                    <InputWithTitle header={"Enter Editorial"}>
                        <textarea onChange={(e) =>{
                            e.preventDefault();
                            setProblem({ ...problem, editorial: e.target.value, });
                        }} className='w-[100%] h-[300px]  border-[1px] rounded-md border-solid border-white' />
                    </InputWithTitle>
                </TopHeading>
                <div className='flex w-full justify-center mt-10 mb-10'>
                    <button onClick={(e)=>saveProblem(e)} className='p-4 bg-green-500 text-black rounded-md'>Submit Problem</button>
                </div>
            </form>
        </div>
    )
}

export default AddProblem

const TopHeading = ({ title, children }: any) => {
    return (
        <>
            <div className='mt-10 mb-1 text-[1.6rem] text-[white]'>{title}</div>
            {children}
        </>
    );
}