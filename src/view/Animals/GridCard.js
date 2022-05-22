import React, { useState } from 'react'
import { Col } from 'antd';
import Modal from "./Modal.js";

function GridCard(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log(modalOpen);
  };
  const closeModal = () => {
    setModalOpen(false);
    console.log(modalOpen);
  };
  return (
    <Col lg={4} md={8} xs={24}>
      <div style={{ position: 'relative' }}>
        {/* <a href='#'> */}
        <img onClick={openModal} style={{ width: '100%', height: '320px' }} src={props.image} alt={props.processState} />
        <Modal open={modalOpen} close={closeModal} header="저와 친구가 되어요!">
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
