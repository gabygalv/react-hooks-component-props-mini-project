import Article from './Article.js';

export default function ArticleList ({posts}) {

const oneArticle = posts.map((article) => (
    <Article key={article.id}
    title={article.title}
    date={article.date}
    preview={article.preview}
    minutes={article.minutes}
    />
));

return <main>
    {oneArticle}
</main>
}
