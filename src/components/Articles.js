import React, { useEffect, useState } from 'react'
import SkeletonArticles from '../skeletons/SkeletonArticles';



function Articles() {
    const [articles, setArticles] = useState(null);
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setArticles(data);
        }, 4000)
    }, []);

    return (
        <div className="articles">
            <h2>Articles</h2>


            {articles && articles.map(article => (
                <div className="article" key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
            ))}

            {!articles && [1, 2, 3, 4, 5].map((n) => <SkeletonArticles key={n} theme="light" />)}
        </div>
    )
}

export default Articles
