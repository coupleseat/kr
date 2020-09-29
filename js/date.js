// Date 생성자 함수의 프로토타입에 메서드를 추가합니다.
Date.prototype.getInterval = function (otherDate) {
    // 변수를 선언합니다.
    var interval;
    // 양수로 날짜 간격을 구하려고 조건문을 사용합니다.
    if (this > otherDate) {
        interval = this.getTime() - otherDate.getTime();
    } else {
        interval = otherDate.getTime() - this.getTime();
    }
    // 리턴합니다.
    return Math.floor(interval / (1000 * 60 * 60 * 24));
};

// 변수를 선언합니다.
var now = new Date();
var before = new Date('December 31, 2020');

// 출력합니다.
// alert(`올해 남은 일수 : ${now.getInterval(before)}일`);

// window.onload = function() {        
    var thisYear = document.getElementById("thisYear");
    thisYear.innerHTML = `2020년은 <b>${now.getInterval(before)}일</b> 남았다`;
// };


