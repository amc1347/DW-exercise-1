import React from 'react';
 


function ArticleCard({articleData}) {
    console.log('articleData', articleData);

    return(
        <div>
            <h2>{articleData.title}</h2>
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