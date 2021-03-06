import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import GridCard from "../Animals/GridCard";
import { Row } from "antd";
import Modal from "./Modal";
import Modal2 from "./Modal2";



import "../../css/MyPage.css";
import { deleteUser } from "../../_actions/user_action";
import { codeCheck } from "../../_actions/user_action";
import { showPost } from "../../_actions/board_action";


function MyPage() {
    const user = useSelector((state) => state.user);
    const dibs = useSelector((state) => state.board);
    const [boardList, setboardList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [reModalOpen, setReModalOpen] = useState(false);
    const [reModalOpen2, setReModalOpen2] = useState(false);
    const [Password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const [page, setPage] = useState(10);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const openModal = () => {
        setModalOpen(true);
    };
    const openModal2 = () => {
        setModalOpen2(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const closeModal2 = () => {
        setModalOpen2(false);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };
    const onCodeHandler = (event) => {
        setCode(event.currentTarget.value);
    };

    useEffect(() => {
        dispatch(showPost(page))
            .then((response) => {
                setboardList(response.payload)
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
                    alert("??????????????? ????????? ?????????????????????!");
                    navigate('/');
                }
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
    const PassID = (event) => {
        event.preventDefault();
        let body = {
            name: user.userData,
            code: code,
        };
        dispatch(codeCheck(body))
            .then((response) => {
                if (response.payload != null) {
                    alert("?????????????????????!");
                    closeModal2();
                }
                else {
                    closeModal2();
                    setReModalOpen2(true);
                    setModalOpen2(true);
                    setTimeout(() => {
                        setReModalOpen2(false);
                    }, 4000);
                }
            })
            .catch(err => {
                console.log(err);
                setTimeout(() => {
                }, 3000);
            });

    }

    return (
        <div>
            <section className="UserName">???????????? : {user.userData} </section>

            <section className="PassID">
                {user.userCode==null ? "":<button className="w-btn w-btn-gra1" onClick={openModal2}>????????????</button>}
            </section>
            <Modal2
                open={modalOpen2}
                close={closeModal2}
                header2="?????? ????????? ???????????????."
                PassId={PassID}
            >
                <div style={{ textAlign: "center" }}>
                {reModalOpen2 ? <p style={{ color: "red" }}> ??????????????? ????????? ?????????</p> : ""}
                    <p>????????? : {user.userData}</p>
                    <p>?????? : <input type="text" onChange={onCodeHandler} /></p>
                </div>

            </Modal2>


            <section className="DeleteID">
                <button className="w-btn w-btn-gra1" onClick={openModal}> ?????? ?????? </button>
            </section>
            <Modal
                open={modalOpen}
                close={closeModal}
                header="?????? ?????????????????????????"
                deleteId={deleteID}
            >
                <div style={{ textAlign: "center" }}>
                    {reModalOpen ? <p style={{ color: "red" }}>??????????????? ???????????? ????????????.</p> : ""}
                    <p>????????? : {user.userData}</p>
                    <p>???????????? : <input type="password" onChange={onPasswordHandler} /></p>
                </div>

            </Modal>

            <section className="DibsList">?????????</section>
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

            <section className="WriteList">?????? ??? ???</section>
            <div id="Alllist">
                <div>??????</div>
                <div>??????</div>
            </div>
            <div
                className="Listboard"
            >
                {boardList && boardList.map((ele) => (
                    <div className="key" key={ele.no}>
                        {user.userData == ele.writer ? <div className="showview">
                            <div className="title">
                                <Link to={`/postView/${ele.no}`}><div>{ele.title}</div></Link>
                            </div>
                            <div className="content">
                                <div>{ele.content}</div>
                            </div>
                        </div> : <div className="none"></div>}
                    </div>

                ))}
            </div>

        </div>
    )
}

export default MyPage