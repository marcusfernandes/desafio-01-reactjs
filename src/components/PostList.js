import React, {Component} from 'react'
import Post from './Post'

class PostList extends Component{
  state = {
    posts:[
      {
        id:1,
        author:{
          name:'Marcus Vinicius',
          avatar:'https://avatars0.githubusercontent.com/u/39469864?s=400&u=6a3d0bcac56154e252d8d219fece2dbbb8804e4b&v=4'
        },
        date:'07 Jun 2019',
        content:'Pessoal, alguém sabe se a Amale está contratando',
        comments:[
          {
            id:1,
            author:{
              name:'Diego Fernandes',
              avatar:'https://avatars0.githubusercontent.com/u/39469864?s=400&u=6a3d0bcac56154e252d8d219fece2dbbb8804e4b&v=4'
            },
            content:'Estamos!'
          }
        ],
      },
      {
        id:2,
        author:{
          name:'Rebecca Barreto de Matos',
          avatar:'https://avatars0.githubusercontent.com/u/3?v=4'
        },
        date:'07 Jun 2019',
        content:'Boa noite, comecei o bootcamp ontem e estou adorando',
        comments:[
          {
            id:1,
            author:{
              name:'Diego Fernandes',
              avatar:'https://avatars0.githubusercontent.com/u/39469864?s=400&u=6a3d0bcac56154e252d8d219fece2dbbb8804e4b&v=4'
            },
            content:'Ficamos felizes em saber'
          }
        ],
      },
      {
        id:3,
        author:{
          name:'Evlado Fernandes e Silva',
          avatar:'https://avatars0.githubusercontent.com/u/3?v=4'
        },
        date:'07 Jun 2019',
        content:'Pessoal, alguém sabe se a Amale está contratando',
        comments:[
          {
            id:1,
            author:{
              name:'Diego Fernandes',
              avatar:'https://avatars0.githubusercontent.com/u/39469864?s=400&u=6a3d0bcac56154e252d8d219fece2dbbb8804e4b&v=4'
            },
            content:'Estamos!'
          }
        ],
      },
    ]
  }

  render(){
    return (
      <div id="wrapper">
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    )
  }
      
}

export default PostList