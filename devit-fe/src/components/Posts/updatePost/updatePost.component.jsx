import { useEffect, useState } from "react";
import { updatePost, getPost } from "../../../services";
import './updatePost.component.scss';

const UpdatePost = (props) => {
  const [post, setPost] = useState({
    id: '',
    title: '',
    description: '',
    link: '',
    author: '',
    published: '',
    created: '',
    category: [],
    content: '',
    enclosures: [{url: ''}],
    media: {thumbnail: {url: ''}},
  })
  
  useEffect(() => {
    const id = window.location.href.split("/")[4].slice(4);  
    getPost(id).then((res) => {
      const Post = res.data
      setPost({...Post
      }); 
    })
  }, [])
  
  const onSubmit= (e) => {
    e.preventDefault();
    updatePost(post)
    .then(() => {
        window.location = "/";
        console.log(`POST was changed`)
      }
    ).catch(err => {console.log(err)})
  }

  const inputArr = ['title', 'description', 'link', 'author', 'category', 'content'];

  
  const renderInputs = () => {
    return inputArr.map(item => {
      return (
        <div key={item}>
          <label htmlFor={item}>{item}</label>
          <input
          name={item}
          type="text"
          id={item}
          onChange={(e) => setPost({...post, [`${item}`]: e.target.value})}
          defaultValue={post[item] }/>
        </div>

      )
    })
  } 


  return (
    <section className="edit-post">
      <div className="container">
        <h3 className="edit-post__header">Edit post #{post._id}</h3>
        <div className="edit">
          <form className="edit__form">
           
            {renderInputs()}
            <div>
              <label htmlFor="enclosures">Enclosures</label>
              <input
                name="enclosures"
                type="text"
                id="enclosures"
                onChange={(e) => setPost({...post, enclosures: [{url: e.target.value}]})}
                defaultValue={post.enclosures.map(i=> i.url)}
              />
            </div>
            <div>
              <label htmlFor="media">Media</label>
              <input
                name="media"
                type="text"
                id="media"
                onChange={(e) => setPost({...post, media: {thumbnail: {url: e.target.value}} })}
                defaultValue={post.media.thumbnail.url}
              />
            </div>
            <div className="buttons">
              <button type="submit" onClick={(e) => onSubmit(e)}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UpdatePost;
