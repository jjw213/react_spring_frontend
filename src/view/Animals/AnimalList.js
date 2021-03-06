import React from "react";
import GridCard from "./GridCard.js";
import { Row } from "antd";
function AnimalList(props) {
  const { animal, num , Selected2, kindcd } = props;
  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      <h2>
        전체 {num} 마리의 친구들이 검색되었습니다.
      </h2>
      <hr></hr>
      <Row gutter={[16, 16]}>
        {animal &&
          animal.map((ani, index) => (
            <React.Fragment key={ani.desertionNo}>
             
               <GridCard
                  image={ani.popfile}
                  kindCd={ani.kindCd.split("] ")[1]}
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
            </React.Fragment>
          ))}
      </Row>
    </div>
  );
}

export default AnimalList;
