// 61defb37e48646238a47306a0f8fefbb

import React, { useEffect, useState } from "react";

function News() {
  const [News, setNews] = useState([]);
  useEffect(() => {
    fetch(
      " https://newsapi.org/v2/everything?q=apple&from=2021-07-14&to=2021-07-14&sortBy=popularity&pageSize=6&apiKey=61defb37e48646238a47306a0f8fefbb"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div>
      <div className="allnews-wraper">
        <div className="apple-title">Apple News</div>
        <div className="container-fluid row">
          {News.map((AppleNews, id) => {
            const newswraper = (
              <div className="col-sm-12 col-md-4">
                <div
                  key={id}
                  className=" justify-content-center text-center h-100"
                >
                  <div className="singelNews">
                    <div className="title">
                      <a href={AppleNews.url} target="_blank">
                        {AppleNews.title}
                      </a>
                    </div>
                    <div className="urlToImage">
                      <a href={AppleNews.url} target="_blank">
                        <img src={AppleNews.urlToImage} />
                      </a>
                    </div>
                    <div className="description">{AppleNews.description}</div>
                    <div className="url">{AppleNews.url}</div>

                    {/* <div className="publishedAt">{AppleNews.publishedAt}</div>
                    <div className="content">{AppleNews.content}</div> */}
                  </div>
                </div>
              </div>
            );
            return newswraper;
          })}
        </div>
      </div>
    </div>
  );
}

export default News;