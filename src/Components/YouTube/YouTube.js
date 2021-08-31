import React, { useEffect, useState } from "react";
import "../YouTube/YouTube.css";

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=1

function Youtube() {
  const [youTubeVideos, setyouTubeVideos] = useState([])
   

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyC0evJQpObbmJXwjHO1G4agT2T4ngdL0aY&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideos = setyouTubeVideos(data.items);
      });
  }, [])

  
    return (
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              {/* <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div> */}
              <div className="letest-videos">
                Latest Videos
              </div>
            </div>
            {youTubeVideos.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    );
  }


export default Youtube;
// AIzaSyA356l8MDvC - FZgxeWfe0qgk_wwfpcomvY;

// https://www.googleapis.com/youtube/v3/channels?key=AIzaSyA356l8MDvC - FZgxeWfe0qgk_wwfpcomvY&forUsername=Apple&part=id
// "id": "UCE_M8A5yxnLfW0KghEeajjw"

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyA356l8MDvC - FZgxeWfe0qgk_wwfpcomvY&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6
