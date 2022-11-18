import { Avatar } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Article } from '../types/Article.types'
import { Content } from '../types/Content.types'
import { fetchFromAPI } from '../utiliti/fetch';
import NewsCard from './NewsCard';


const NewsDetail: React.FC = () => {
    const { title } = useParams();

    const [content, setContent] = useState([]);
    const [related, setRelated] = useState([]);

    console.log('content', content);

    useEffect(() => {
        fetchFromAPI(`everything?q=apple`)
            .then((data: any) => setContent(data.articles.filter((item: Article) => item.title == title)));

        fetchFromAPI(`everything?q=apple`)
            .then((data: any) => setRelated(data.articles.slice(0, 6)));
    }, [title]);
    return (
        <div>
            <div>
                {content.map((cont: Content, index) => {
                    return (
                        <div key={index} className="bg-[#F0F0F0] box-shadow p-5 xl:max-w-[1280px] w-full mt-28 mx-auto">
                            <div className="p-1 flex items-center gap-2">
                                <Avatar style={{ backgroundColor: '#f56a00' }} src="https://joeschmoe.io/api/v1/random" />
                                <p className="font-poppins text=[18px]">{cont.author}, <span className='text-slate-400 ml-2'>{cont.publishedAt}</span></p>
                            </div>

                            <div className='flex justify-center gap-5'>
                                <div className="box-shadow">
                                    <img src={cont.urlToImage} alt={cont.title} />
                                </div>
                                <div>
                                    <h1 className="font-poppins font-bold text-[44px] leading-[48px] mb-5">{cont.title}</h1>
                                    <p className="font-poppins font-normal text-slate-800">{cont.content}</p>
                                </div>
                            </div>

                            <div className="mt-2">
                                <a href={cont.url}><p className="text-slate-400 italic">{cont.url}</p></a>
                            </div>
                        </div>
                    )
                })}


                    {/* Related */}
                <div className="bg-[#F0F0F0] p-5 xl:max-w-[1280px] w-full mx-auto pt-28">
                {related.length === 0 ? (<div></div>) : (<h1 className='py-10 text-[50px] leading-[54px] font-poppins font-bold'>Related <span className="text-red-500">News</span></h1>)}
                888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                <div className="flex gap-5 flex-wrap justify-between items-center">
                    {related.map((rel: Article, index) => {
                        return (
                            <div key={index} className="box-shadow">
                                <NewsCard news={rel} />
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>


        </div>
    )
}

export default NewsDetail