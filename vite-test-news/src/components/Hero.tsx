import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react'
import { Headline } from '../types/Headline.types'
import { fetchFromAPI } from '../utiliti/fetch';


const Hero: React.FC = () => {
    const [headLine, setHeadLine] = useState([]);

    console.log('headline', headLine);

    useEffect(() => {
        fetchFromAPI(`top-headlines?country=us&category=business`)
            .then((data: any) => setHeadLine(data.articles.slice(0, 4)));
    }, []);

    const contentStyle: React.CSSProperties = {
        height: '360px',
        width: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        border: '1px solid #E5E5E5',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    };

    return (
        <Carousel autoplay>
            {headLine.map((top: Headline) => {
                return (
                    <div key={top.title}>
                            <div style={contentStyle}>
                                <img src={top.urlToImage} alt={top.title} style={{ width: '100%' }}  />
                            </div>
                            <div className='pb-10 pl-10 mb-5'>
                                <h3 className='text-3xl text-slate-100 font-poppins font-semibold'>{top.title}</h3>
                            </div>
                    </div>
                )
            })}

        </Carousel>
    );
}

export default Hero