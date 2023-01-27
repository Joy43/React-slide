import React, { useEffect, useState } from 'react';
import News from '../News';


const TopHeadline = () => {
 
    
    const[articles,setArticles]=useState([]);
    useEffect(()=>{
const url =('https://newsapi.org/v2/top-headlines?country=us&apiKey=6974bc724f8448dcb975516b7755704d');
fetch(url)
.then(res=>res.json())
.then(data=>setArticles(data.articles))
    },[])
    
   console.log(articles);
    return (
        <div>
            
           <h2>{articles.length}</h2>
          {
            // articles.map(article=><News article={article}></News>)
            

            articles.map(article=><News article={article}></News>)
          }
           
        </div>
    );
};




  

export default TopHeadline;
