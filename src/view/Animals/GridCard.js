import React, { useState, useCallback, useEffect } from 'react'
import { Col } from 'antd';
import Modal from "./Modal.js";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dibsAnimal, dibsCancel, dibsList } from '../../_actions/board_action.js';

function GridCard(props) {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [isDibs, setIsDibs] = useState(false);
  const user = useSelector((state) => state.user);
  const dibs = useSelector((state) => state.board)
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(()=>{
      dibs.dibsList.map((ani)=>{
        if(ani.desertionNo == props.desertionNo){
          setIsDibs(true)
        }
      })
      // console.log("딥스 설정한거 우얘됐노"+isDibs)
    },[]);
  
    
  const onDibsHandler = () => {

    let body = {
      age: props.age, careAddr: props.careAddr, careNm: props.careNm, careTel: props.careTel,
      kindCd: props.kindCd, desertionNo: props.desertionNo, popfile: props.image, sexCd: props.sexCd, processState: props.processState,
      specialMark: props.specialMark, weight: props.weight, user: user.userData
    };
    dispatch(dibsAnimal(body)).then((response) => {
      if (response.payload != null) {
        dispatch(dibsList(user.userData))
          .then((response) => {
          })
        alert("찜 완료")
        setIsDibs(true);
        // dibs.isDibs=true;
        // console.log("찜 버튼 눌렀을 때 딥스"+dibs.isDibs);
      } else {
        alert("동물들을 불러오지 못했어요");
      }
    });
  }
  // const dibsHandler = () => {
  //   setIsDibs(true);
  //   console.log("딥스 핸들러 작동!!")
  // }
  const onDibsCancelHandler = () => {
    setIsDibs(false);
    let body = {
      desertionNo: props.desertionNo
    };
    console.log("desertionNo 숫자 입니다!!"+props.desertionNo);
    dispatch(dibsCancel(body)).then((response) => {
      if (response.payload != null) {
        dispatch(dibsList(user.userData))
          .then((response) => {
          })
        alert("찜 취소 완료")
      } else {
        alert("동물들을 불러오지 못했어요");
      }
    });
  }
  return (
    <Col lg={4} md={8} xs={24}>
      <div style={{ position: 'relative' }}>
        {/* <a href='#'> */}
        <img onClick={openModal} style={{ width: '100%', height: '320px' }} src={props.image} alt={props.processState} />
        <p>품종 : {props.kindCd}</p>
        <Modal open={modalOpen} close={closeModal} header="저와 친구가 되어요!" dibs={onDibsHandler}
          dibsCancel={onDibsCancelHandler} desertionNo={props.desertionNo} isDibs={isDibs} >
          <div style={{ textAlign: 'center' }}>
            <img style={{ width: '60%', height: '100%' }} src={props.image} />
          </div>
          <p>나이 : {props.age}</p>
          <p>품종 : {props.kindCd}</p>
          <p>보호소 : {props.careNm}</p>
          <p>보호소 위치 : {props.careAddr}</p>
          <p>보호소 연락처 : {props.careTel}</p>
          <p>상태 : {props.processState}</p>
          <p>특징 : {props.specialMark}</p>
        </Modal>
        {/* {dibs.dibsList.map((ani) => (
          <React.Fragment key={ani.id}>{props.desertionNo == ani.desertionNo ?
            <Modal open={modalOpen} close={closeModal} header="저와 친구가 되어요!" dibs={onDibsHandler}
              dibsCancel={onDibsCancelHandler} desertionNo={props.desertionNo} isDibs={isDibs} >
              <div style={{ textAlign: 'center' }}>
                <img style={{ width: '60%', height: '100%' }} src={props.image} />
              </div>
              <p>나이 : {props.age}</p>
              <p>품종 : {props.kindCd}</p>
              <p>보호소 : {props.careNm}</p>
              <p>보호소 위치 : {props.careAddr}</p>
              <p>보호소 연락처 : {props.careTel}</p>
              <p>상태 : {props.processState}</p>
              <p>특징 : {props.specialMark}</p>
            </Modal>
            
            : 
            <Modal open={modalOpen} close={closeModal} header="저와 친구가 되어요!" dibs={onDibsHandler}
              dibsCancel={onDibsCancelHandler} desertionNo={props.desertionNo} isDibs={isDibs} >
              <div style={{ textAlign: 'center' }}>
                <img style={{ width: '60%', height: '100%' }} src={props.image} />
              </div>
              <p>나이 : {props.age}</p>
              <p>품종 : {props.kindCd}</p>
              <p>보호소 : {props.careNm}</p>
              <p>보호소 위치 : {props.careAddr}</p>
              <p>보호소 연락처 : {props.careTel}</p>
              <p>상태 : {props.processState}</p>
              <p>특징 : {props.specialMark}</p>
            </Modal>
            }</React.Fragment>))} */}


        {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달 */}
        {/* </a> */}

      </div>
    </Col>
  )
}

export default React.memo(GridCard)
