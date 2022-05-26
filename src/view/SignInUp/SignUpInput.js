import React from "react";

function SignUpInput(props) {
  const { submit, name, pw, pwc } = props;
  return (
    <main className="signContainer">
      {/* <h2>신규 회원가입</h2> */}
      <div className="signForm">
        <form action="" method="" className="sign-form" onSubmit={submit}>
          <div className="signForm-group">
            <label htmlFor="name" className="signName">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={name}
              placeholder="이름을 입력하세요"
            ></input>
          </div>
          <div>
            <label htmlFor="password" className="signPassword">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={pw}
              placeholder="비밀번호를 입력하세요"
            ></input>
          </div>
          <div>
            <label htmlFor="passwordConfirm" className="signPasswordCon">
              비밀번호 재입력
            </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              onChange={pwc}
              placeholder="비밀번호를 다시 입력하세요"
            ></input>
          </div>
          <button onSubmit={submit}>등록</button>
        </form>
      </div>
    </main>
  );
}

export default SignUpInput;
