import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { savePost } from "../../../_actions/board_action";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";

// import Header from "../../Header";

function CommunityPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code=useSelector((state)=>state.user.userCode);
  
  const [board, setBoardContent] = useState({
    title: "",
    content: "",
  });

  const [formErrorMessage, setFormErrorMessage] = useState("");
  const user = useSelector((state) => state.user);
  const [boardList, setboardList] = useState([]);

  const getValue = (e) => {
    const { title, value } = e.target;
    setBoardContent({
      ...board,
      title: value,
    });
  };
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    let body = {
      title: board.title,
      content: board.content,
      writer: user.userData,
    };
    if (body.writer == null) {
      return alert("로그인 해야 합니다.");
    }else if(body.content==null){
      return alert("내용을 입력하세요.");
    }
    if (code != null) {
      
      return alert("마이 페이지에서 인증 번호를 입력하세요.");
    }

    dispatch(savePost(body))
      .then((response) => {
        if (response.payload != null) {
          console.log( code);
          navigate("/community");
        } else {
          setFormErrorMessage("포스팅 실패");
          alert("포스팅 실패");
        }
      })
      .catch((err) => {
        console.log(err);
        setFormErrorMessage("서버 연결이 불안정합니다.");
        setTimeout(() => {
          setFormErrorMessage("");
        }, 3000);
      });
  };

  return (
    <div>
      <div className="App">
        <h2>게시글 작성</h2>
        <div className="form-wrapper">
          <input
            className="title-input"
            type="text"
            placeholder="제목"
            onChange={getValue}
            name="title"
          />
          <CKEditor
            editor={ClassicEditor}
            config={{placeholder: "게시글 사용 수칙을 준수해주세요."}} 
            data="<p></p>"
            onChange={(event, editor) => {
              const data = editor.getData();
              setBoardContent({
                ...board,
                content: ReactHtmlParser(data)[0].props.children[0],
              });
            }}
            // onBlur={(event, editor) => {
            //   console.log('Blur.', editor);
            // }}
            // onFocus={(event, editor) => {
            //   console.log('Focus.', editor);
            // }}
          />
        </div>
        <button className="submit-button" onClick={onSubmitHandler}>
          등록
        </button>
      </div>
    </div>
  );
}

export default CommunityPage;
