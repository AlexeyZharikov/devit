import { useState } from "react";
import { createPost } from "../../../services";

const CreatePost = () => {

  const [post, setPost] = useState({})

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
          // defaultValue={post[item] }
          />
        </div>

      )
    })
  } 

  const onSubmit = (e) => {
    e.preventDefault();
    createPost(post)
    .then(() => {
        window.location = "/";
        console.log(`POST was created`)
      }
    ).catch(err => {console.log(err)})
  }


  return(
    <section className="create-post">
      <div className="container">
        <h3 className="create-post__header">Create new post</h3>
        <div className="create">
          <form className="create__form">
            {renderInputs()}
            <label htmlFor="enclosures">Enclosures</label>
            <input
              name="enclosures"
              type="text"
              id="enclosures"
              onChange={(e) => setPost({...post, enclosures: [{url: e.target.value}]})}
              // value={post.enclosures.url}
            />
            <label htmlFor="media">Media</label>
            <input
              name="media"
              type="text"
              id="media"
              onChange={(e) => setPost({...post, media: {thumbnail: {url: e.target.value}} })}
              // value={post.media}
            />
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

export default CreatePost;