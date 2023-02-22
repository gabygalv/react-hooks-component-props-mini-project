import React from "react";
import blogData from "../data/blog";
import About from "./About.js";
import Header from "./Header.js";
import ArticleList from "./Article List";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
