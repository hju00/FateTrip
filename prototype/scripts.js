// Spring 백엔드 API URL
const BACKEND_API_URL = 'http://localhost:8080/api/visit-count';

// 사용자 방문 횟수 업데이트 함수
function updateVisitCount() {
    fetch(BACKEND_API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // 방문 횟수를 HTML에 반영
            document.getElementById('visit-count').innerText = data.count;
        })
        .catch(error => {
            console.error('Error fetching visit count:', error);
        });
}

// 페이지 로드 시 방문 횟수 업데이트
document.addEventListener('DOMContentLoaded', () => {
    updateVisitCount();
});

// 지도 초기화
var mapContainer = document.getElementById('map'); // 지도를 표시할 div
var mapOption = {
    center: new kakao.maps.LatLng(36.5, 127.5), // 초기 중심 좌표 (한국 중심)
    level: 7 // 초기 확대 수준
};
var map = new kakao.maps.Map(mapContainer, mapOption);

// "전국 랜덤 선택" 버튼 이벤트
document.getElementById('randomNationButton').addEventListener('click', function() {
    alert('전국 랜덤 선택 기능 실행');
    // 여기에 랜덤 위치 로직 추가
});

// "도 선택 후 랜덤 선택" 버튼 이벤트
document.getElementById('randomRegionButton').addEventListener('click', function() {
    alert('도 선택 후 랜덤 선택 기능 실행');
    // 여기에 도 선택 후 랜덤 로직 추가
});

// 카카오 로그인 버튼 이벤트
document.querySelector('.kakao-login').addEventListener('click', function() {
    alert('카카오 로그인 기능 실행');
    // 카카오 로그인 API 호출 로직 추가
});

// 네이버 로그인 버튼 이벤트
document.querySelector('.naver-login').addEventListener('click', function() {
    alert('네이버 로그인 기능 실행');
    // 네이버 로그인 API 호출 로직 추가
});
