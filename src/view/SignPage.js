import React from 'react';

function SignPage() {

    return (
        <div class="container">
            <form action="/members/new" method="post">
                <div class="form-group">
                    <label for="name">이름</label>
                    <input type="text" id="name" name="name" placeholder="이름을 입력하세요"></input>
                </div>
                <button type="submit">등록</button>
            </form>
        </div>
        // <div className='Write'>
        //     <form action="/members/new" method="post">
        //         <div>
        //         	<input type='text' id='title_txt' name='name' placeholder='제목'/> 
        //         </div>
        //         <div>
        //         	<input type='url' id='link_txt' name='url' placeholder='링크'/> 
        //         </div>
        //         <div>
        //         	<textarea id='ex_txt' name='content' placeholder='설문내용에 대해 설명해주세요'></textarea>    
        //         </div>
        //         <div>
        //             시작일자&nbsp;&nbsp;
        //                 <input type="date" name="startDate" id='date'/>
        //             	&nbsp;&nbsp;

        //             마감일자&nbsp;&nbsp;
        //                 <input type="date" name="endDate" id='date'/>    
        //         </div>
        //         <div id="submit_btn">
        //             <button type="submit">저장</button>&nbsp;&nbsp;
        //             <button>취소</button>
        //         </div>
        //     </form>
        // </div>
    );
}

export default SignPage;