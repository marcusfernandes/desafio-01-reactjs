import React from 'react'

function Comment({data}){
  return(
    <div id="wrapper-comments">
      <div>
        <span>
          <img  src={data.author.avatar}alt=""/>
        </span>
        <span className="content-comment">
          {data.content}
        </span>
      </div>
    </div>
  )
}

export default Comment