import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import GridCard from "../Animals/GridCard";
import { Row } from "antd";



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

console.log(dibs.dibsList);

    return (
        <div>
            <section>회원이름 : {user.userData}</section>
            <section>찜목록</section>
            {/* {dibsList && dibsList.map((ele) => (
                    <div key={ele.id}>
                    {user.userData==ele.name ? <div>
                    
                    {ele.age}
                    </div> : ""}
                    
                    <hr></hr>
                    </div>
                ))} */}
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
               :
                ""
              }
            </React.Fragment>
          ))}
      </Row>
            <section>
                탈퇴버튼
                <button> 버튼 </button>
            </section>

            <section>자기가 쓴 글 목록</section>
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