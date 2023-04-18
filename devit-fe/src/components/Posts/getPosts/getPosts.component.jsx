import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../../../services/index";
import Item from "../Item/item.component";
import "./getPosts.component.scss";

const GetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setLoading(true);
    getPosts(3, offset)
      .then((res) => {
        setPosts([...posts, ...res.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [offset]);

  const delPost = (id) => {
    deletePost(id).then((res) =>
      setPosts(posts.filter((item) => item._id !== id))
    );
  };
  const loadMore = (e) => {
    e.preventDefault();
    setOffset(offset + 3); 
  };

  let postsArr = posts.map((item, index) => {
    return (
      <Item
        deletePost={delPost}
        key={index}
        id={item._id}
        title={item.title}
        description={item.description}
        link={item.link}
        author={item.author}
        published={item.published}
        created={item.created}
        category={item.category}
        content={item.content}
        enclosures={item.enclosures}
        media={item.media}
      />
    );
  });

  return (
    <div className="main">
      {loading ? (
        <div className="loading">
          <div className="container">Loading...</div>
        </div>
      ) : (
        <div className="posts">
          <div className="container">
            <div className="posts-inner">{postsArr}</div>
            <div className="button">
              <button onClick={loadMore}>
                  Load +3
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetPosts;
