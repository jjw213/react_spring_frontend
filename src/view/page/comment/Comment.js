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
  const [local, setLocal] = useState([]);
  const dispatch = useDispatch();
  // const comments = useSelector((state) => state.comment);
  const user=useSelector((state)=>state.user.userData);
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
    console.log("no입니다!!"+no);
    console.log("user입니다!!"+user);
    const data = {
      content: getContent,
      writer: user,
      postId: no,
      responseTo: "root",
      commentId: uuid(),
      created_at: `${date}`
    };
    dispatch(saveReply(data))
    .then((response) => {
      if (response.payload != null) {
        alert("작성 완료!");
      } else {
        alert("아이디 혹은 비밀번호가 틀렸어요:X");
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
    dispatch(editReply(data));
  };

  // Remove comment
  const onRemove = (commentId) => {
    dispatch(removeReply(commentId));
  };

  useEffect(() => {
    dispatch(showReply(no))
      .then((response)=>{
        setLocal(response.payload.filter((comment) => comment.responseTo === "root"))
      })
    // setLocal(comments.filter((comment) => comment.responseTo === "root"));
  }, [no]);

  return (
    <Paper sx={{ m: 15, p: 3 }}>
      <Button
        onClick={() => {
          setDisplay(!display);
        }}
        sx={{ width: "10rem" }}
      >
        답변 달기
      </Button>

      {display && (
        <>
          <Editor ref={editorRef} />
          <div>
            <Button onClick={onSubmit}>저장</Button>
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

            <Item>{timeForToday(comment.created_at)}</Item>
          </Stack>

          {/* comment 글 내용 */}
          <Box
            key={index}
            sx={{ padding: "0px 20px", color: comment.exist || "grey" }}
            // exist는 초기값으로 true를 가지며, removeComment를 통해 false로 변경된다.
          >
            <Markdown comment={comment} />
          </Box>

          {/* comment 수정 */}
          {comment.exist && user === comment.writer && (
            <>
              {openEditor === comment.commentId && (
                <Editor initialValue={comment.content} ref={editorRef} />
              )}
              <Button
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
              <Button
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
