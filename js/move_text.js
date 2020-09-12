// 랜덤한 정수를 생성합니다.
function nextrandomInteger(limit) {
    return Math.round(Math.random() * limit);
}

// 랜덤한 알파벳을 리턴하는 함수입니다. (클로저 활용)
var randomAlphabet = (function () {
    // var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var names = "박이김하연최정지남상인성형현혜양윤헌은혁석희일우원주";
    return function () {
        return names.charAt(nextrandomInteger(25));
    }
})();

// 양수와 음수로 랜덤한 속도를 생성하는 함수입니다.
function randomSpeed(maxSpeed) {
    return Math.random() * maxSpeed - Math.random() * maxSpeed;
}

// MovingText의 생성자 함수
var canvasWidth = 500;
var canvasHeight = 30;

function MovingText() {
    // 위치와 속도 속성
    this.x = nextrandomInteger(canvasWidth);
    this.y = nextrandomInteger(canvasHeight);
    this.vx = randomSpeed(10);
    this.vy = randomSpeed(10);

    // 문서 객체를 생성합니다.
    // this.body = document.createElement("h1");
    // this.body.innerHTML = randomAlphabet();
    // this.body.style.position = "absolute";

    // 문서 객체를 document.body에 추가합니다.
    // document.body.appendChild(this.body);

    this.h1 = document.createElement("h1");
    this.h1.innerHTML = randomAlphabet();
    this.h1.style.position = "absolute";

    var move_text = document.getElementById("move_text");
    move_text.appendChild(this.h1);
}

MovingText.prototype.move = function () {
    // 범위 검사
    var is_left = this.x < 0 || this.x > canvasWidth;
    if (is_left) { this.vx *= -1; }

    var is_top = this.y < 0 || this.y > canvasHeight;
    if (is_top) { this.vy *= -1; }

    // 이동
    this.x += this.vx;
    this.y += this.vy;

    // 화면에 이동 표시
    // this.body.style.left = `${this.x}px`;
    // this.body.style.top = `${this.y}px`;
    
    this.h1.style.left = `${this.x}px`;
    this.h1.style.top = `${this.y}px`;
}

// window.onload = function () {
    // 변수를 선언합니다.
    var movingTexts = [];

    // 배열에 MovingText 객체 100개를 생성합니다.
    var randomCount = Math.round(Math.random() * 10 + 7);
    for (var i = 0; i < randomCount; i++) {
        movingTexts.push(new MovingText());
    }

    // 움직입니다.
    setInterval(function () {
        for (var i in movingTexts) {
            movingTexts[i].move();
        }
    }, 1000 / 30);
// }