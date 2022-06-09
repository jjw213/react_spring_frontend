import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showPost } from '../../../_actions/board_action';
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';

const PostList = props => {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(10);
  const [next, setNext] = useState(true);
  const dispatch = useDispatch();
  const onSubmitHandler = () => {
    dispatch(showPost(page))
      .then((response) => {
        if (response.payload.length < 10) {
          setNext(false);
        }
        else{
          setNext(true);
        }
        setDataList(response.payload)
      });
  }
  const prevHandler = () => {
    setPage(() => (page <= 10 ? page = 10 : page - 10));
  }
  const nextHandler = () => {
    setPage(page + 10);
  }
  useEffect(() => {
    onSubmitHandler();
  }, [page])

  return (
    <>
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{item.no}</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/postView/${item.no}`}>{item.title}</Link>
                </CommonTableColumn>
                <CommonTableColumn>{item.createDate}</CommonTableColumn>
                <CommonTableColumn>{item.readCount}</CommonTableColumn>
              </CommonTableRow>
            )
          }) : <div>데이터 없음!!</div>
        }
      </CommonTable>
      {page <= 10 ? "" : <button className='post-view-go-prev-btn' onClick={prevHandler}>Prev</button>}
      {next ? <button className='post-view-go-next-btn' onClick={nextHandler}>Next</button> : ""}
    </>
  )
}

export default PostList;