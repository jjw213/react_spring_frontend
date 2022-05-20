import React from "react";
import GridCard from "./GridCard.js";
import { Row } from "antd";
function AnimalList(props) {
  const { animal, Selected, Selected2, kindcd } = props;
  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      <h2>
        상태 : '{Selected2}' 인 {kindcd} 친구들
      </h2>
      <hr></hr>
      <Row gutter={[16, 16]}>
        {animal &&
          animal.map((ani, index) => (
            <React.Fragment key={ani.desertionNo}>
              {Selected2 == "전체" ? (
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
                />
              ) : ani.processState == Selected2 ? (
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
                />
              ) : (
                ""
              )}
            </React.Fragment>
          ))}
      </Row>
    </div>
  );
}

export default AnimalList;
