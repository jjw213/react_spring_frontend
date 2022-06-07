import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { showPostOne } from '../../../_actions/board_action';
import './Post.css';
import Comment from "../comment/Comment";

const PostView = () => {
  const [ data, setData ] = useState([]);
  const board = useSelector((state) => state.board)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {no} = useParams();
  const {no} = useParams();
  // const no  = params.no;
  useEffect(() => {
    dispatch(showPostOne(no))
      .then((response) => {
        setData(response.payload)
      });
  }, []);

  return (
    <div className='App'>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {
          data ? (
            <>
              <div className="post-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
              </div>
              <div className="post-view-row">
                <label>작성자</label>
                <label>{ data.writer }</label>
              </div>
              <div className="post-view-row">
                <label>작성일</label>
                <label>{ data.createDate }</label>
              </div>
              <div className="post-view-row">
                <label>조회수</label>
                <label>{ data.readCount }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
                  {
                    data.content
                  }
                </div>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="post-view-go-list-btn" onClick={()=>navigate("/community")}>목록으로 돌아가기</button>
        <Comment no={no}/>
      </div>
    </div>
  )
}

export default PostView;