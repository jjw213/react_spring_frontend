import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";

import { saveReply, editReply, removeReply, showReply } from "../../../_actions/reply_action";
import ReplyComment from "./ReplyComment";

// dot icon
//import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Stack, Button, Divider, Paper } from "@mui/material";

import { Box } from "@mui/system";

// markdown, toast editor
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import Markdown from "../component/Markdown";

import {
  check_kor,
  timeForToday,
  Item,
  ProfileIcon
} from "../component/CommentTool";

const Comment = ({ no }) => {
  const dispatch = useDispatch();
  const user=useSelector((state)=>state.user.userData);
  const code=useSelector((state)=>state.user.userCode);
  const [local, setLocal] = useState([]);
  const [render, setRender]=useState(true);
  // const comments = useSelector((state) => state.comment);
  const [display, setDisplay] = useState(false);
  const editorRef = useRef();
  const date = new Date(); // 작성 시간

  // open editor to edit comment
  const [openEditor, setOpenEditor] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // 마크다운 변환
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    setDisplay(!display);

    // 데이터 저장
    // setCommentValule(text);
    const data = {
      content: getContent,
      writer: user,
      postId: no,
      responseTo: "root",
      commentId: uuid(),
      created_at: `${date}`
    };
    if (code != null) {
      console.log(code);
      return alert("마이 페이지에서 인증 번호를 입력하세요.");
    }
    dispatch(saveReply(data))
    .then((response) => {
      if (response.payload != null) {
        alert("작성 완료!");
        setRender(!render);
      } else {
        alert("에러 발생!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  // Edit comment
  const onEdit = (commentId) => {
    // console.log(commentId);
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    console.log(getContent);

    let data = { commentId: commentId, content: getContent };
    dispatch(editReply(data))
    .then((response) => {
      if (response.payload != null) {
        alert("수정 완료!");
        setRender(!render);
      } else {
        alert("에러 발생!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  // Remove comment
  const onRemove = (commentId) => {
    dispatch(removeReply(commentId))
    .then((response) => {
      if (response.payload != null) {
        alert("삭제 완료!");
        setRender(!render);
      } else {
        alert("에러 발생!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    dispatch(showReply(no))
      .then((response)=>{
        setLocal(response.payload.filter((comment) => comment.responseTo === "root"))
      })
    // setLocal(comments.filter((comment) => comment.responseTo === "root"));
  }, [no, render]);

  return (
    <Paper sx={{ m: "5%", p: 3  }}>
      <Button
        onClick={() => {
          setDisplay(!display);
        }}
        sx={{ width: "10rem", backgroundColor: "mistyrose", marginBottom:"10px" }}
      >
        답변 달기
      </Button>

      {display && (
        <>
          <Editor ref={editorRef} placeholder='명예훼손, 개인정보 유출, 분쟁 유발, 허위사실 유포등의
          글은 이용약관에 의해 제재는 물론 법률에 의해 처벌 받을 수 있습니다. 건전한 커뮤니티를 위해
          자재를 당부 드립니다.' 
          initialEditType='wysiwyg' textAlign="left"/>
          <div>
            <Button sx={{marginTop:"10px", backgroundColor: "revert" }} onClick={onSubmit}>저장</Button>
          </div>
        </>
      )}

      {local.map((comment, index) => (
        <Box sx={{ m: 2 }} key={comment.commentId}>
          {/* writer 정보, 작성 시간 */}
          <Stack direction="row" spacing={2}>
            <ProfileIcon>
              {check_kor.test(comment.writer)
                ? comment.writer.slice(0, 1)
                : comment.writer.slice(0, 2)}
            </ProfileIcon>
            <Item>{comment.writer}</Item>
            
            <Item>{timeForToday(comment.date)}</Item>
          </Stack>

          {/* comment 글 내용 */}
          <Box
            key={index}
            sx={{ padding: "0px 20px", color: comment.exist || "grey", 
            textAlign:"left",marginTop:"1em", marginLeft:"2em" }}
            
            // exist는 초기값으로 true를 가지며, removeComment를 통해 false로 변경된다.
          >
            <Markdown comment={comment} />
          </Box>

          {/* comment 수정 */}
          {comment.exist==1 && user == comment.writer && (
            <>
              {openEditor === comment.commentId && (
                <Editor initialValue={comment.content} ref={editorRef} />
              )}
              <Button sx={{ float:"right" }}
                onClick={() => {
                  if (comment.commentId === openEditor) {
                    onEdit(comment.commentId);
                    setOpenEditor("");
                  } else {
                    setOpenEditor(comment.commentId);
                  }
                }}
              >
                수정
              </Button>

              {/* comment 삭제 */}
              <Button sx={{ float:"right" }}
                onClick={() => {
                  onRemove(comment.commentId);
                }}
              >
                삭제
              </Button>
            </>
          )}

          {/* 대댓글 컴포넌트 */}
          <ReplyComment responseTo={comment.commentId} user={user} no={no}/>

          <Divider variant="middle" />
        </Box>
      ))}
    </Paper>
  );
};

export default Comment;
