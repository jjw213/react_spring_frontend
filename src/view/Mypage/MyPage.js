import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GridCard from "../Animals/GridCard";
import { Row } from "antd";
import Modal from "./Modal";

import "../../css/MyPage.css";
import { deleteUser } from "../../_actions/user_action";


function MyPage() {
    const user = useSelector((state) => state.user);
    const dibs = useSelector((state) => state.board);
    const [boardList, setboardList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [reModalOpen, setReModalOpen] = useState(false);
    const [Password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };
    useEffect(() => {
        fetch(`/board/boardList`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setboardList(data);
            });

    }, []);

    const deleteID = (event) => {
        event.preventDefault();
        let body = {
            name: user.userData,
            password: Password,
        };
        dispatch(deleteUser(body))
            .then((response) => {
                if (response.payload.name == null) { 
                    console.log(response.payload.data);
                    alert("정상적으로 탈퇴가 완료되었습니다!");
                    navigate('/'); }
                    else {
                        closeModal();
                        setReModalOpen(true);
                        setModalOpen(true);
                        setTimeout(() => {
                            setReModalOpen(false);
                        }, 4000);
                }
            })
            .catch(err => {
                console.log(err);
                setTimeout(() => {
                }, 3000);
            });

    }

    // console.log(dibs.dibsList);

    return (
        <div>
            <section className="UserName">회원이름 : {user.userData} </section>
            <section className="DeleteID">
                <button onClick={openModal}> 탈퇴 버튼 </button>
            </section>
            <Modal
                open={modalOpen}
                close={closeModal}
                header="정말 탈퇴하시겠습니까?"
                deleteId={deleteID}
            >
                <div style={{ textAlign: "center" }}>
                {reModalOpen ? <p>비밀번호가 일치하지 않습니다.</p>:""}
                    <p>아이디 : {user.userData}</p>
                    <p>비밀번호 : <input type="password" onChange={onPasswordHandler} /></p>
                </div>

            </Modal>

            <section className="DibsList">찜목록</section>
            <Row gutter={[16, 16]}>
                {dibs.dibsList &&
                    dibs.dibsList.map((ani, index) => (
                        <React.Fragment key={ani.desertionNo}>
                            {user.userData == ani.name ?
                                <GridCard
                                    image={ani.popfile}
                                    kindCd={ani.kindCd}
                                    age={ani.age}
                                    careAddr={ani.careAddr}
                                    careNm={ani.careNm}
                                    careTel={ani.careTel}
                                    processState={ani.processState}
                                    sexCd={ani.sexCd}
                                    specialMark={ani.specialMark}
                                    weight={ani.weight}
                                    desertionNo={ani.desertionNo}
                                    id={ani.id}
                                />
                                : ""
                            }
                        </React.Fragment>
                    ))}
            </Row>

            <section className="WriteList">내가 쓴 글</section>
            {/* <table
                className="table table--vertical"
                cellPadding={"0"}
                cellSpacing="0"
                >
                {boardList.map((ele) => (
                    <div key={ele.idx}>
                    {user.userData==ele.writer ? <div>
                    <th className="title">
                        <h4>{ele.title}</h4>
                    </th>
                    <th>
                        <div>{ele.content}</div>
                    </th>
                    <th>
                        <div>작성자 : {ele.writer}</div>
                    </th>
                    </div> : ""}
                    
                    <hr></hr>
                    </div>
                ))}
                </table> */}

        </div>
    )
}

export default MyPage