import React from 'react';
import { useSelector } from 'react-redux';
import '../../css/modal.css';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, deleteId } = props;
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
              <button className="close" onClick={deleteId} style={{ margin: "0 10px" }}>
                 탈퇴하기 </button>
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