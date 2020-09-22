import React from 'react';

import { useParams } from 'react-router-dom';

import Data from '../components/data';

import { days, months } from '../components/dateValues';

function Article(){
    let {id } = useParams();

    const articleData = Data.find((article) => article.id === id);

    if (!articleData) return null;

    const date = new Date(articleData.publishedDate);
    const dayOfWeek = date.getDay();
    const calendarDate = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
        <section className="Article">
            <header className="ArticleHeaderWrapper" 
            style={{backgroundImage: `url('${articleData.image.url}')`}}>
                <div className="ArticleHeader">
                    <h1>{articleData.title}</h1>
                    <p>{`${days[dayOfWeek]}, ${months[month]} ${calendarDate}, ${year}`}</p>
                    <p className = "ArticleHeaderBlurb">{articleData.blurb}</p>
                    {/* <p>{id}</p> */}
                </div>
            </header>
            <article className = "ArticleBody">
                {articleData.articleText.map((article, i) => {
                    switch (article.type) {
                        case "p":
                            return <p key = {i}> {article.data}</p>;
                        case "h2":
                            return <p key = {i}> {article.data}</p>;
                        case "h3":
                            return <p key = {i}> {article.data}</p>;
                    }
            })}
            </article>
        </section>
    );
}

export default Article;

