import {FiTrash2, FiEdit2} from "react-icons/fi";
import './item.component.scss';
import { NavLink } from "react-router-dom";


const Item = (props) => {

  const deleteThisPost = () => {
    props.deletePost(props.id);
  };
  
  return (
    <div className="post">
      <div className="post__buttons">
          <NavLink to={`/edit/?id=${props.id}`}><FiEdit2 className="post__button edit-button" /></NavLink>
          <FiTrash2 className="post__button del-button" onClick={deleteThisPost}/>
      </div>
      <div className="post-info post__id"><span>ID:</span> {props.id}</div>
      <div className="post-info post__title"><span>TITLE:</span> {props.title}</div>
      <div className="post-info post__description" dangerouslySetInnerHTML={{__html: `<span>DESCRIPTION:</span> ${props.description}`}}></div>
      <div className="post-info post__link"><span>LINK:</span> <NavLink to={props.link}>{props.link}</NavLink></div>
      <div className="post-info post__author"><span>AUTHOR:</span> {props.author}</div>
      <div className="post-info post__published"><span>PUBLISHED DATE & TIME:</span> {props.published}</div>
      <div className="post-info post__created"><span>CREATED DATE & TIME:</span> {props.created}</div>
      <div className="post-info post__category"><span>CATEGORIES:</span> {props.category.map(i => i + ', ')}</div>
      <div className="post-info post__content"><span>CONTENT:</span> {props.content !== undefined ? props.content : ('Content is undefined')}</div>
      <div className="post-info post__enclosures"><span>ENCLOSURES:</span> {props.enclosures.map((i, index) => <NavLink key={index} to={i.url}>{i.url}</NavLink>)}</div>
      <div className="post-info post__media"><span>MEDIA:</span> <NavLink to={props.media !== undefined ? props.media.thumbnail.url : ''}>{props.media !== undefined ? props.media.thumbnail.url : ''}</NavLink></div>

    </div>
  )
}

export default Item;