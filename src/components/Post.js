import React from 'react'

import Comment from './Comment'

function Post({data}){
  return(
    <>
    
      <div id="wrapper-post">
        <div>
          <span>
            <img src={data.author.avatar} alt=""/>
          </span>        
          <div>
            <strong>{data.author.name}</strong>
            <small>{data.date}</small>
          </div>
        </div>
        <div className="content">
          {data.content}
        </div>
        <hr/>
        {data.comments.map(comment => <Comment key={comment.id} data={comment}/>)}
        
      </div>
    </>
  )
} 

export default Post