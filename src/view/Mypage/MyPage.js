import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import GridCard from "../Animals/GridCard";
import { Row } from "antd";
import "../../css/MyPage.css";


function MyPage() {
    const user = useSelector((state) => state.user);
    const dibs = useSelector((state) => state.board);


    const [boardList, setboardList] = useState([]);
    useEffect(() => {
        fetch(`/board/boardList`)
            .then((res) => {
            return res.json();
            })
            .then((data) => {
            setboardList(data);
            });
            
    }, []);

    const deleteID = () =>{
        console.log("deleteID");
        
    }

    console.log(dibs.dibsList);

    return (
        <div>
            <section className="UserName">회원이름 : {user.userData} </section>
            <section className="DibsList">찜목록</section>
                <Row gutter={[16, 16]}>
                        {dibs.dibsList &&
                        dibs.dibsList.map((ani, index) => (
                            <React.Fragment key={ani.desertionNo}>
                            {user.userData==ani.name ? 
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
            <section className="DeleteID">
                <button onClick={deleteID}> 버튼 </button>
            </section>

            <section className="WriteList">자기가 쓴 글 목록</section>
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