fetch("https://jsonplaceholder.typicode.com/posts/100")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`response: ${response.status}`);
            //상태코드 200 성공적, 200번대가 아니면 에러를 발생시킴
        }
        //json 형식으로 변환된 응답데이터 반환
        return response.json();
    })
    //위의 then 메소드에서 반환된 json 데이터를 받아옴
    .then((post) => {
        //받아온 데이터가 없다면 에러를 발생시킴
        if (!post) {
            throw new Error(`none result`);
        }
        //받아온 데이터가 있다면 id와 title 정보를 반환
        return { id: post.id, title: post.title };
    })
    //최종적으로 받아온 데이터를 콘솔에 출력
    .then(console.log)
    //위에 then메소드에서 발생한 에러를 처리함
    .catch((error) => {
        console.log(error);
        console.log(`error`);
    });
