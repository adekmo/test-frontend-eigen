import React from 'react'
import { Card, Button } from 'antd';
const { Meta } = Card;
import { Article } from '../types/Article.types'
import { Link } from 'react-router-dom';

interface Props {
  news: Article;
}

const NewsCard: React.FC<Props> = ({ news,  }) => {


  return (
    <section>
      <Card
        hoverable
        style={{ width: 380, height: 420 }}
        cover={<img alt={news.title} src={news.urlToImage} style={{ width: '380px', height: '190px' }} />}
      >
        <div className='p-3 flex flex-col'>
          <h2 className='text-[18px] font-semibold mb-2'>{news.title}</h2>
          <p className='text-[14px] font-normal text-slate-500 truncate mb-10'>{news.description}</p>
          <Link to={`/news-detail/${news.title}`}>
            <Button type="primary" ghost>
              Read More
            </Button>
          </Link>
        </div>
      </Card>
    </section>
  )
}

export default NewsCard