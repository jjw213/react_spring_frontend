import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";




function MyPage() {
    const user = useSelector((state) => state.user)
    console.log(user)


    const [boardList, setboardList] = useState([]);
    useEffect(() => {
        fetch(`/board/boardList`)
            .then((res) => {
            return res.json();
            })
            .then((data) => {
            setboardList(data);
            console.log(data);
            });
        }, []);



    return (
        <div>
            <section>회원이름 : {user.userData}</section>
            <section>찜목록</section>
            <section>
                탈퇴버튼
                <button> 버튼 </button>
            </section>

            <section>자기가 쓴 글 목록</section>
            <table
                className="table table--vertical"
                cellPadding={"0"}
                cellSpacing="0"
                >
                {boardList.map((ele) => (
                    <div key={ele.idx}>
                    <th className="title">
                        <h4>{ele.title}</h4>
                    </th>
                    <th>
                        <div>{ele.content}</div>
                    </th>
                    <th>
                        <div>작성자 : {ele.writer}</div>
                    </th>
                    <hr></hr>
                    </div>
                ))}
                </table>
            
        </div>
    )
}

export default MyPage