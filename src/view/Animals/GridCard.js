import React, { useState } from 'react'
import { Col } from 'antd';
import Modal from "./Modal.js";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dibsAnimal } from '../../_actions/board_action.js';

function GridCard(props) {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const user = useSelector((state) => state.user)
  const openModal = () => {
    setModalOpen(true);
    console.log(modalOpen);
  };
  const closeModal = () => {
    setModalOpen(false);
    console.log(modalOpen);
  };
  const onDibsHandler=()=>{
    
    let body = {
      age : props.age, careAddr:props.careAddr, careNm:props.careNm,careTel:props.careTel,
        kindCd : props.kindCd, desertionNo : props.desertionNo, popfile:props.image,sexCd:props.sexCd,processState:props.processState,
        specialMark:props.specialMark,weight:props.weight, user:user.userData
    };
    // var str = body.kindCd;
    // var arr = str.split("]");
    console.log(props.kindCd);
    // body.kindCd=arr[1];
    
    // const str = "안녕 하세";
    // str.split(" ");
    // console.log(body.kindcd);
    dispatch(dibsAnimal(body)).then((response) => {
      console.log(response.payload);
      if (response.payload != null) {
        alert("찜 완료")
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
        <Modal open={modalOpen} close={closeModal} header="저와 친구가 되어요!" dibs={onDibsHandler}>
          {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달 */}
          <div style={{ textAlign:'center' }}>
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
        {/* </a> */}

      </div>
    </Col>
  )
}

export default GridCard
