import React from "react";

function SignUpInput(props) {
  const { submit, name, pw, pwc,email,disabled} = props;
  return (
    <main className="signContainer">
      {/* <h2>신규 회원가입</h2> */}
      <div className="signForm">
        <form action="" method="" className="sign-form" onSubmit={submit}>
          <div className="signForm-group">
            <label htmlFor="email" className="email">
              이메일
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={email}
              placeholder="@가 포함된 이메일 형식"
            ></input>
          </div>
          <div className="form-group2">
            <label htmlFor="name" className="signname">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={name}
              placeholder="10자 이하"
            ></input>
          </div>
          <div className="form-group2">
            <label htmlFor="password" className="passwordName">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={pw}
              placeholder="8자리 이상 비밀번호"
            ></input>
          </div>
          <div className="form-group2">
            <label htmlFor="passwordConfirm" className="passwordName">
              비밀번호 재입력
            </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              onChange={pwc}
              placeholder="비밀번호 재입력"
            ></input>
          </div>
          {disabled ? <div>중복된 이름!</div> : 
          <button disabled={disabled} onSubmit={submit}>등록</button>}
        </form>
      </div>
    </main>
  );
}

export default SignUpInput;
