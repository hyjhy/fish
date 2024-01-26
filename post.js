function submitPost() {
    // 입력된 제목과 내용 가져오기
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;

    // 여기서는 간단히 콘솔에 출력하는 것으로 대체
    console.log("제목: " + title);
    console.log("내용: " + content);

    // 실제로는 서버로 데이터를 전송하고, 서버에서 데이터를 처리하는 로직이 추가되어야 합니다.
    // 서버로의 데이터 전송은 AJAX 또는 Fetch API 등을 사용할 수 있습니다.
}