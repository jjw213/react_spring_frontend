import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showPost } from '../../../_actions/board_action';
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';

const PostList = props => {
  const [ dataList, setDataList ] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showPost())
      .then((response) => {
        console.log(response.payload);
        setDataList(response.payload)
      });
  }, [ ])

  return (
    <>
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.no }</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/postView/${item.no}`}>{ item.title }</Link>
                </CommonTableColumn>
                <CommonTableColumn>{ item.createDate }</CommonTableColumn>
                <CommonTableColumn>{ item.readCount }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : <div>데이터 없음!!</div>
        }
      </CommonTable>
    </>
  )
}

export default PostList;