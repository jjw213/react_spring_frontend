import React, { useEffect, useState } from "react";
const Profile = () => {
    // const code = new URL(window.location.href).searchParams.get("code");
    const [user_id, setUserId] = useState();
    const [nickName, setNickName] = useState();
    const [profileImage, setProfileImage] = useState();
    const REST_API_KEY = "170293c1b046c874abd5476ddf3dba3a";
    let a = false;
    function onLoadProfile() {
        a = true;
    }
    const getProfile = async () => {
        try {
            if (!window.Kakao.isInitialized()) {
                // Kakao Javascript SDK 초기화
                window.Kakao.init(REST_API_KEY);
                console.log(window.Kakao.isInitialized());
            }
            // Kakao SDK API를 이용해 사용자 정보 획득
            let data = await window.Kakao.API.request({
                url: "/v2/user/me",
            });

            // 사용자 정보 변수에 저장
            setUserId(data.id);
            setNickName(data.properties.nickname);
            setProfileImage(data.properties.thumbnail_image);
        } catch (err) {

            console.log(err);
            console.log(user_id);
        }
    };
    useEffect(() => {
        if(a)
        getProfile();
    }, [a]);
    return (
        <div>
            <button onClick={onLoadProfile()}>프로필 불러오기</button>
            <h2>{user_id}</h2>
            <h2>{nickName}</h2>
            <img src={profileImage}></img>
        </div>
    );
};
export default Profile;