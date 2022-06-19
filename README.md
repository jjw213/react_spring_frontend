![Node](https://img.shields.io/badge/node-v14.17.1-blue)
![NPM](https://img.shields.io/badge/npm-v7.19.0-blue)

![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![js](https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white)
![css](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![kakao](https://img.shields.io/badge/Kakao-FFCD00?style=for-the-badge&logo=Kakao&logoColor=white)

![JAVA](https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white)
![Spring](https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Oracle DB](https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)

### **실행을 위해서 [react_spring_backend](https://github.com/jjw213/react_spring_backend) 가 필요합니다.**
### 가급적 위의 backend 먼저 git clone 후 생성된 react_spring_backend > frontend 아래에서 git clone 해주세요.
___

# Run

## react_spring_frontend

**개발환경 Visual Studio Code at Windows 10**
1. 터미널에서 git clone https://github.com/jjw213/react_spring_frontend.git
2. node 설치
3. npm i로 node_module 설치
4. 생성된 react_spring_frontend 폴더 바로 밑에 .env 파일 생성 후 kakao developers에서 생성한 앱의 키를 아래 코드에 맞춰서 입력
```c
REACT_APP_FEED_KEY=발급받은 JAVASCRIPT 키
REACT_APP_REST_API_KEY=발급받은 REST API 키
REACT_APP_CLIENT_SECRET=발급받은 CLIENT SECRET 키
```
4. npm start 로 실행


## react_spring_backend

**개발환경 IntelliJ IDEA at Windows 10**
1. 터미널에서 git clone https://github.com/jjw213/react_spring_backend.git
2. build.gradle 설치 후 file > settings > Build, Execution, Deployment > Compiler > Annotation Processors 에서 Enable annotation processing 체크 후 OK
3. Edit Configurations... > Build and run 에서 JAVA 11 버전과 hello.spring.main 설정 후 main class 는 hello.hellospring.HelloSpringApplication로 설정
4. resources 폴더 하위에 **application.properties** 파일 생성 후 아래 코드 작성
```c
#datasource (oracle)
spring.datasource.driver-class-name=oracle.jdbc.driver.OracleDriver
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:XE
spring.datasource.username=오라클 유저 이름
spring.datasource.password=오라클 유저 비밀번호
spring.http.encoding.charset=UTF-8
spring.http.encoding.enabled=true
spring.http.encoding.force=true

#mail
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=구글 이메일
spring.mail.password=구글 앱 키
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.auth=true
```

5. 실행


# setting port

frontend : http://localhost:3000

backend : http://localhost:8080


# Run Screen

### main & animal List

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/88258840/174488781-a997a1c3-84fd-46ee-9fb3-68111c9d18de.gif)


### Sign in & myPage

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/88258840/174488980-297b55a1-10e3-46d5-bd52-095ddc541aec.gif)
