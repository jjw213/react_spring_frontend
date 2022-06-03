import React from 'react';
import PostList from './PostList';
import { useNavigate, withRouter } from 'react-router-dom';

const PostMain = props => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h2 align="center">입양 후기 및 질문 게시판</h2>
      <PostList />
      <button className="post-view-go-list-btn" onClick={()=>navigate("/write")}>
        글쓰기</button>
    </div>
  )
}

export default PostMain;