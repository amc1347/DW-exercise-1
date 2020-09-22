import React from 'react';
 
import { Link } from 'react-router-dom';

const days = [
    "Sunday",
    "Monday", 
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const months = [
    "January", 
    "February",
    "March", 
    "April", 
    "May", 
    "June", 
    "July",
    "September",
    "October", 
    "November", 
    "Decemeber"
]

function ArticleCard({ articleData }) {
    const date = new Date(articleData.publishedDate);

    const dayOfWeek = date.getDay();
    const calendarDate = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    console.log('Full Date:' ,`${days[dayOfWeek]}, ${months[month]} ${calendarDate} ${year}`)

    return(
        <div className="ArticleCard">
            <div className="ArticleCardImage">
                <img src={articleData.image.url} alt={articleData.image.alt} /> 
            </div>
            <div className="ArticleCardText">
                <h2>{articleData.title}</h2>
                <p>{`${days[dayOfWeek]}, ${months[month]} ${calendarDate}, ${year}`}</p>
                {/* <p> {articleData.publishedDate}</p> */}
                <p> {articleData.blurb}</p>
                <Link to={`article/${articleData.id}`}> Read More</Link>
            </div>


        </div>
    );
}

export default ArticleCard

// const sampleObject = {
//     key: 'value',
//     objectKey: {
//         key2: 'value2'
//     }
// }

// const coolObject = {
//     key1: '',
//     key2: '',
//     key3: ''
// }

// const { key1, key2} = coolObject;
// console.log(key1, key2)