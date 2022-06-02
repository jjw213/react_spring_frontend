import React from 'react';
import { useSelector } from 'react-redux';
import '../../css/modal.css';
import Share from '../KakaoLogout';
const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, dibs, isDibs, dibsCancel, dibsHandler } = props;
  const user = useSelector((state) => state.user)
  const dibsList = useSelector((state) => state.board.dibsList);
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <div>
              {user.userData ? isDibs ?
                (<button className="close" onClick={dibsCancel} style={{ margin: "0 10px" }} >
                찜 취소</button>
                ) : (<button className="close" onClick={dibs} style={{ margin: "0 10px" }}> 찜하기 </button>) : ""}
            <Share></Share>
            <button className="close" onClick={close}>
              close
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
};
export default Modal