import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utiliti/fetch';
import Hero from './Hero'

import { Article } from '../types/Article.types'
import NewsCard from './NewsCard';
import Loader from './Loader';

const Feed: React.FC = () => {
    const [project, setProject] = useState([]);

    console.log('data', project);

    useEffect(() => {
        fetchFromAPI(`everything?q=apple`)
            .then((data: any) => setProject(data.articles));

    }, []);
    return (
        <div>
            <div className="bg-[#DFDFDF] flex justify-center items-center mt-28">
                <div className="xl:max-w-[1280px] w-full">
                    <Hero />
                </div>
            </div>

            <div className="bg-[#DFDFDF] flex justify-center items-center mt-24">
                <div className="bg-[#F0F0F0] p-5 xl:max-w-[1280px] w-full flex gap-5 flex-wrap justify-between items-center box-shadow rounded-[20px]">
                    {project.length === 0 ? ('') : (<h1 className='w-[380px] box-shadow p-5 text-[50px] leading-[54px] font-poppins font-bold'>Latest <br /> <span className="text-red-500 ml-10">News</span> </h1>)}
                    {project.length > 0 ? (project.map((news: Article, index) => {
                        return (
                            <div key={index} className="box-shadow">
                                <NewsCard news={news} />
                            </div>
                        )
                    })) : (<Loader />)}
                </div>
            </div>
        </div>
    )
}

export default Feed