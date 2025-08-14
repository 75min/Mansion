const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");

const FPS = 60;
const IntervalID = setInterval(game, 1000/FPS);
const scale = 16;
const scaleW = scale;
const scaleH = scale*1.5;
const GameSpeed  =6*scale/FPS //floor(8*scale/FPS) = 30프레임 기준으로 16픽셀을 1/8초 안에 이동
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let dev = 0;
let devMode = 1;
let devX = 0;
let devY = 0;
let devObj = [];
let devDel = [];

let stage = 0;

let frmCycle = [0,1,2,3];
let currentFrm = 0;
let frmHold = 0;

let char = {
    hp: 30,
    x: 3*scale,
    y: 6*scale,
    targetX: 0,
    targetY: 0,
    moving: -1,
    dir: 1
};
let stopper = 0;

let door = {
    x: 3*scale,
    y: 0*scale,
    close: 0
};

let keykey = {
    x: 0*scale,
    y: 0*scale
};

function stageSetup() {
    for (const obj of stageObj[stage]) { if (obj instanceof MoveSpine) {
        obj.on = obj.originOn;
    }}
    for (const obj of stageObj[stage]) { if (obj instanceof PushWall) {
        obj.x = obj.originX; obj.y = obj.originY;
    }}
    for (const obj of stageObj[stage]) { if (obj instanceof Enemy) {
        obj.x = obj.originX; obj.y = obj.originY; obj.alive = 1;
    }}
    switch (stage) { //스테이지 초기 설정
        case 0: //Main
            char.hp = 30;
            char.x = 3*scale;
            char.y = 6*scale;
            door.x = 3*scale;
            door.y = 0*scale;
            door.close = 0;
            document.getElementById("help").innerHTML = "화면을 스와이프 하거나<br>방향키를 눌러 이동할 수 있습니다.";
            break;
            
        case 1: //tutorial: Key
            char.hp = 13;
            char.x = 3*scale;
            char.y = 0*scale;
            door.x = 2*scale;
            door.y = 0*scale;
            door.close = 1;
            keykey.x = 3*scale;
            keykey.y = 6*scale;
            document.getElementById("help").innerHTML = "잠긴 문은 열쇠를 획득해<br>열 수 있습니다.";
            break;
        case 2: //tutorial: Spine
            char.hp = 10;
            char.x = 2*scale;
            char.y = 0*scale;
            door.x = 3*scale;
            door.y = 6*scale;
            door.close = 0;
            document.getElementById("help").innerHTML = "가시에 닿으면 한 스텝에<br>Hp가 한 번 더 깎입니다.";
            break;
        case 3: //tutorial: MoveSpine
            char.hp = 10;
            char.x = 3*scale;
            char.y = 6*scale;
            door.x = 0*scale;
            door.y = 0*scale;
            door.close = 0;
            document.getElementById("help").innerHTML = "점멸가시는 두 턴에 한 번 활성화됩니다.<br>벽에 부딪혀 한 턴을 소비할 수 있습니다.";
            break;
        case 4: //tutorial: Enemy
            char.hp = 16;
            char.x = 0*scale;
            char.y = 0*scale;
            door.x = 6*scale;
            door.y = 6*scale;
            door.close = 0;
            document.getElementById("help").innerHTML = "조각상은 밀 수 있습니다.<br>벽이나 가시로 밀면 부숴집니다.";
            break;
        case 5: //tutorial: PushWall
            char.hp = 13;
            char.x = 6*scale;
            char.y = 6*scale;
            door.x = 0*scale;
            door.y = 6*scale;
            door.close = 1;
            keykey.x = 3*scale;
            keykey.y = 3*scale;
            document.getElementById("help").innerHTML = "화분은 밀 수 있으나<br>벽이나 가시에 닿아도 부술 수 없습니다.";
            break;
        case 6:
            char.hp = 13;
            char.x = 0*scale;
            char.y = 6*scale;
            door.x = 6*scale;
            door.y = 0*scale;
            door.close = 1;
            keykey.x = 5*scale;
            keykey.y = 4*scale;
            document.getElementById("help").innerHTML = "화면을 스와이프 하거나<br>방향키를 눌러 이동할 수 있습니다.";
            break;
        case 7:
            char.hp = 15;
            char.x = 4*scale;
            char.y = 0*scale;
            door.x = 6*scale;
            door.y = 0*scale;
            door.close = 0;
            break;
        case 8:
            char.hp = 33;
            char.x = 3*scale;
            char.y = 6*scale;
            door.x = 3*scale;
            door.y = 3*scale;
            door.close = 1;
            keykey.x = 5*scale;
            keykey.y = 6*scale;
            break;
        case 9:
            char.hp = 15;
            char.x = 0*scale;
            char.y = 6*scale;
            door.x = 5*scale;
            door.y = 1*scale;
            door.close = 0;
            break;
        case 10:
            char.hp = 40;
            char.x = 3*scale;
            char.y = 3*scale;
            door.x = 3*scale;
            door.y = 3*scale;
            door.close = 1;
            keykey.x = 5*scale;
            keykey.y = 6*scale;
            break;
        case 11:
            char.hp = 1;
            char.x = 3*scale;
            char.y = 3*scale;
            door.x = 3*scale;
            door.y = 3*scale;
            door.close = 0;
            break;
    }
    document.getElementById("char.hp").textContent = `Hp: ${char.hp}`;
    document.getElementById("stage").textContent = `Lv: ${stage}`;
}

document.addEventListener("mousedown", (event) => { //개발자 모드: 맵 생성/수정/삭제
    if (dev == 1) {
        if (event.button === 0) { //마우스 좌클릭: 생성
            devX = Math.floor(event.offsetX/scale);
            devY = Math.floor(event.offsetY/scale);
            devObj = [];
            switch (devMode) {
                case 0: //캐릭터 위치 변경
                    console.log ("playerXY(",devX,",",devY,")");
                    char.x = devX*scale;
                    char.y = devY*scale;
                    break;
                case 1: //벽 생성
                    console.log ("new Wall(",devX,",",devY,")");
                    devObj = new Wall(devX, devY);
                    stageObj[stage].push(devObj);
                    break;
                case 2: //고정 가시 생성
                    console.log ("new Spine(",devX,",",devY,")");
                    devObj = new Spine(devX, devY);
                    stageObj[stage].push(devObj);
                    break;
                case 3: //점멸 가시 생성
                    console.log ("new MoveSpine(",devX,",",devY,")");
                    devObj = new MoveSpine(devX, devY, 0);
                    stageObj[stage].push(devObj);
                    break;
                case 4: //미는 벽 생성
                    console.log ("new PushWall(",devX,",",devY,")");
                    devObj = new PushWall(devX, devY, 0);
                    stageObj[stage].push(devObj);
                    break;
                case 5: //적 생성
                    console.log ("new Enemy(",devX,",",devY,")");
                    devObj = new Enemy(devX, devY);
                    stageObj[stage].push(devObj);
                    break;
                case 8: //열쇠 위치 변경
                    console.log ("KeyXY(",devX,",",devY,")");
                    if (door.close == 0) {
                        door.close = 1;
                    }
                    keykey.x = devX*scale;
                    keykey.y = devY*scale;
                    break;
                case 9: //문 위치 변경
                    console.log ("DoorXY(",devX,",",devY,")");
                    door.x = devX*scale;
                    door.y = devY*scale;
                    break;
            }
        }
        if (event.button === 1) { //마우스 휠 클릭: 점멸가시 상태 변경
            devX = Math.floor(event.offsetX/scale);
            devY = Math.floor(event.offsetY/scale);
            for (const obj of stageObj[stage]) {if (obj instanceof MoveSpine) {
                if (obj.x == devX*scale && obj.y == devY*scale) {
                    if (obj.on == 0) {obj.on = 1;}
                    else {obj.on = 0;}
                    obj.originOn = obj.on;
                }
            }}
        }
        if (event.button === 2) {
            devX = Math.floor(event.offsetX/scale);
            devY = Math.floor(event.offsetY/scale);

            devDel = stageObj[stage].findIndex(obj => obj instanceof Wall && obj.x == devX*scale && obj.y == devY*scale);
            if (devDel != -1) {
                stageObj[stage].splice(devDel, 1);
                console.log("Wall(",devX,",",devY,") Deleted!");
                devDel = [];
            }
            devDel = stageObj[stage].findIndex(obj => obj instanceof Spine && obj.x == devX*scale && obj.y == devY*scale);
            if (devDel != -1) {
                stageObj[stage].splice(devDel, 1);
                console.log("Spine(",devX,",",devY,") Deleted!");
                devDel = [];
            }
            devDel = stageObj[stage].findIndex(obj => obj instanceof MoveSpine && obj.x == devX*scale && obj.y == devY*scale);
            if (devDel != -1) {
                stageObj[stage].splice(devDel, 1);
                console.log("MoveSpine(",devX,",",devY,") Deleted!");
                devDel = [];
            }
            devDel = stageObj[stage].findIndex(obj => obj instanceof PushWall && obj.x == devX*scale && obj.y == devY*scale);
            if (devDel != -1) {
                stageObj[stage].splice(devDel, 1);
                console.log("PushWall(",devX,",",devY,") Deleted!");
                devDel = [];
            }
            devDel = stageObj[stage].findIndex(obj => obj instanceof Enemy && obj.x == devX*scale && obj.y == devY*scale);
            if (devDel != -1) {
                stageObj[stage].splice(devDel, 1);
                console.log("Enemy(",devX,",",devY,") Deleted!");
                devDel = [];
            }
            if (door.close == 1 && keykey.x == devX*scale && keykey.y == devY*scale) {
                console.log("Key Deleted!");
                door.close = 0;
            }

            canvas.addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });
        }
    }
});


function isColliding(sbjX, sbjY, content) { //주체XY가 배열 속 객체와 충돌할 경우
    for (const obj of stageObj[stage]) {
        if (obj instanceof content) {
            if (
                sbjX < obj.x + scale &&
                sbjX + scale > obj.x &&
                sbjY < obj.y + scale &&
                sbjY + scale > obj.y
            ) {return true;}
        }
    } return false;
}
function isCollidEnemy(sbjX, sbjY) { //주체XY가 살아있는 적과 충돌할 경우
    for (const obj of stageObj[stage]) {
        if (obj instanceof Enemy) {
            if (
                obj.alive == 1 &&
                sbjX < obj.x + scale &&
                sbjX + scale > obj.x &&
                sbjY < obj.y + scale &&
                sbjY + scale > obj.y
            ) {return true;}
        }
    } return false;
}
function isCollidSpine(sbjX, sbjY) { //주체XY가 솟은 가시와 충돌할 경우
    for (const obj of stageObj[stage]) {
        if (obj instanceof MoveSpine) {
            if (
                obj.on == 0 &&
                sbjX < obj.x + scale &&
                sbjX + scale > obj.x &&
                sbjY < obj.y + scale &&
                sbjY + scale > obj.y
            ) {return true;}
        }
    } return false;
}
function isCollidit(sbjX, sbjY, objX, objY) { //주체XY가 특정 객체에 충돌할 경우
    if (
        sbjX < objX + scale &&
        sbjX + scale > objX &&
        sbjY < objY + scale &&
        sbjY + scale > objY
    ) {return true;}
    return false;
}
function isCollide(obj) { //캐릭터 지정 객체에 충돌할 경우
    return (
        char.x == obj.x &&
        char.y == obj.y
    );
}
function isRoomOut(targetX, targetY) { //주체XY가 룸 밖을 나갈 예정일 경우
    if (
        targetX == -scale ||
        targetX == canvas.width ||
        targetY == -scale ||
        targetY == canvas.height
    ) {return true;}
    return false;
}

function startMove(dir) { //방향키 인풋이 들어온 경우 줄 함수
    if (char.hp > 0) {
        switch (dir) {
            case 0:
                char.targetX = char.x - scale;
                char.targetY = char.y;
                Moved();
                char.moving = dir;
                break;
            case 1:
                char.targetX = char.x;
                char.targetY = char.y-scale;
                Moved();
                char.moving = dir;
                break;
            case 2:
                char.targetX = char.x + scale;
                char.targetY = char.y;
                Moved();
                char.moving = dir;
                break;
            case 3:
                char.targetX = char.x;
                char.targetY = char.y+scale;
                Moved();
                char.moving = dir;
                break;
        }
        currentFrm = 0;
        char.dir = char.moving;
    } else {gameOver();}
}

document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });

let startX, startY;
let threshold = 30; // 스와이프 최소 거리(px)

document.addEventListener("touchstart", function(e) {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
}, false);

// 터치 끝
document.addEventListener("touchend", function(e) {
    const touch = e.changedTouches[0];
    let endX = touch.clientX;
    let endY = touch.clientY;

    let diffX = endX - startX;
    let diffY = endY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // 좌우 스와이프
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                stopper = 0;
                startMove(2);
                // 오른쪽 이동 로직
            } else {
                stopper = 0;
                startMove(0);
                // 왼쪽 이동 로직
            }
        }
    } else {
        // 상하 스와이프
        if (Math.abs(diffY) > threshold) {
            if (diffY > 0) {
                stopper = 0;
                startMove(3);
                // 아래 이동 로직
            } else {
                stopper = 0;
                startMove(1);
                // 위 이동 로직
            }
        }
    }
}, false);

function gameOver() { //캐릭터 HP가 1보다 작을 경우
    alert("Try Again");
    stageSetup();
}

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey) { //디벨로퍼 모드
        if (dev == 0) {
            dev = 1;
            console.log("devMode: ON\n1,2,3,4,5,8,9,0: 모드 변경\nLMB: 생성\nMMB: 가시 ON/OFF\nRMB: 삭제");
        } else {
            dev = 0;
            console.log("devMode: OFF");
        }
    }

    if (event.key == "0") {
        devMode = 0;
    }
    if (event.key == "1") {
        devMode = 1;
    }
    if (event.key == "2") {
        devMode = 2;
    }
    if (event.key == "3") {
        devMode = 3;
    }
    if (event.key == "4") {
        devMode = 4;
    }
    if (event.key == "5") {
        devMode = 5;
    }
    if (event.key == "8") {
        devMode = 8;
    }
    if (event.key == "9") {
        devMode = 9;
    }
    if (event.key == "r") {
	    if (char.moving == -1) {stageSetup();}
    }
    if (char.moving == -1) {
        //화면 클릭 인풋
        document.getElementById("restart-btn").addEventListener("click", () => stageSetup());

        //방향키 인풋
        if (event.key == 'ArrowLeft') {
            stopper = 0;
            startMove(0);
        }
        if (event.key == 'ArrowUp') {
            stopper = 0;
            startMove(1);
        }
        if (event.key == 'ArrowRight') {
            stopper = 0;
            startMove(2);
        }
        if (event.key == 'ArrowDown') {
            stopper = 0;
            startMove(3);
        }
    }
});

if (char.moving == -1) {
    document.getElementById('restart-btn').addEventListener('touchend', () => stageSetup());
}

function step() {
    if (
        !isColliding(char.targetX, char.targetY, Wall) 
        && !isColliding(char.targetX, char.targetY, PushWall)
        && !isCollidEnemy(char.targetX, char.targetY)
        && !isRoomOut(char.targetX, char.targetY)
        && stopper == 0
    ) {
        switch (char.moving) {
            case 0:
                char.x -= GameSpeed;
                break;
            case 1:
                char.y -= GameSpeed;
                break;
            case 2:
                char.x += GameSpeed;
                break;
            case 3:
                char.y += GameSpeed;
                break;
        }
    } else if (isColliding(char.targetX, char.targetY, PushWall) || isCollidEnemy(char.targetX, char.targetY)) {
        stopper = 1;
    }
    for (const obj of stageObj[stage]) { if (obj instanceof PushWall) {
        obj.push(char.targetX, char.targetY, char.moving);
    }}
    for (const obj of stageObj[stage]) { if (obj instanceof Enemy) {
        if (obj.alive == 1) {
            obj.attack(char.targetX, char.targetY, char.moving);
        }
    }}
}

function Moved() {
    setTimeout(() => {
        if ( //가려는 칸이 벽, 미는 벽, 적, 룸끝이 아닐 경우
            !isColliding(char.targetX, char.targetY, Wall) 
            && !isColliding(char.targetX, char.targetY, PushWall)
            && !isCollidEnemy(char.targetX, char.targetY)
            && !isRoomOut(char.targetX, char.targetY)
            && char.moving !== -1 && stopper == 0
        ) {
            char.x = char.targetX;
            char.y = char.targetY;
            char.hp -= 1;
        }
        if (isColliding(char.targetX, char.targetY, Wall) || isRoomOut(char.targetX, char.targetY)) { //벽이나 룸끝에 충돌시 HP -1
            char.hp -= 1;
        }
        if (isCollide(keykey)) { //열쇠와 충돌시
            if (door.close == 1) {door.close = 0;}
        }

        for (const obj of stageObj[stage]) { if (obj instanceof PushWall) { //밀 수 있는 벽과 충돌시
            obj.stop(char.targetX, char.targetY, char.moving);
            if (stopper == 1) {char.hp -= 1;}
            stopper = 0;
        }}
        for (const obj of stageObj[stage]) { if (obj instanceof Enemy) { //적과 충돌시
            obj.stop(char.targetX, char.targetY, char.moving);
            if (stopper == 1) {char.hp -= 1;}
            stopper = 0;
        }}
        stageObj[stage].forEach((obj, index) => { if (obj instanceof Spine) { //고정가시와 충돌시
            if (obj.check(char.x, char.y)) {char.hp -= 1;}
        }});
        stageObj[stage].forEach((obj, index) => { if (obj instanceof MoveSpine) { //점멸가시 상태전환, 점멸가시와 충돌시
            obj.onoff();
            if (obj.check(char.x, char.y)) {char.hp -= 1;}
        }});
        stageObj[stage].forEach((obj, index) => { if (obj instanceof Enemy) { //활성화된 점멸가시에 적 충돌시
            obj.check();
        }});
        if (isCollide(door)) { //문과 충돌시
            if (door.close == 0) {
                stage +=1 ;
                stageSetup();
            }
        }

        document.getElementById("char.hp").textContent = `Hp: ${char.hp}`;
        char.moving = -1;
        return false;
    }, 150);
}

//애니메이팅에 필요한 함수
function drawFrame(img, frmX, frmY, xPos, yPos) {
    ctx.drawImage(img, frmX*scaleW, frmY*scaleH, scaleW, scaleH, xPos, yPos, scaleW, scaleH);
}
function playFrame(img, Xcycle, Yset, xPos, yPos) {
    frmHold++;
    drawFrame(img, Xcycle[currentFrm], Yset, xPos, yPos);
    if (frmHold >= 3) {
        currentFrm++;
        frmHold = 0;
    }
    if (currentFrm >= Xcycle.lenght) {
        currentFrm = 3;
    }
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (i=0; i<columns; i++) {
        for (j=0; j<rows; j++) {
            ctx.drawImage(bck_tile, scale*2*0, 0, scale*2, scale*2, i*scale*2, j*scale*2, scale*2, scale*2);
        }
    }

    for (i=0; i<columns; i++) {
        stageObj[stage].forEach((obj, index) => { //draw empty black space
            if (obj instanceof Wall && obj.y == i*scale) {
                if (obj.w != 1 || obj.h != 1) {
                    ctx.fillStyle = "black";
                    ctx.fillRect(obj.x, obj.y, obj.w*scale, obj.h*scale);
                }
            }
        });

        ctx.save();
        ctx.translate(0, -scale/2);
        if (door.y == i*scale) {ctx.drawImage(spr_door, door.close*scale, 0, scaleW, scaleH, door.x, door.y, scaleW, scaleH);}
        if (door.close == 1) {
            if (keykey.y == i*scale) {ctx.drawImage(spr_key, keykey.x, keykey.y, scaleW, scaleH);}
        }

        stageObj[stage].forEach((obj, index) => {
            if (obj instanceof Wall && obj.y == i*scale) {
                if (obj.w == 1 || obj.h == 1) {
                    ctx.drawImage(spr_wall, obj.x, obj.y, scaleW, scaleH);
                }
            }
            if (obj instanceof PushWall && Math.floor(obj.y/scale)*scale == i*scale) {
                ctx.drawImage(spr_pushwall, obj.x, obj.y, scaleW, scaleH);
            }
            if (obj instanceof Spine && obj.y == i*scale) {
                ctx.drawImage(spr_spine, obj.x, obj.y, scaleW, scaleH);
            }
            if (obj instanceof MoveSpine && obj.y == i*scale) {
                if (char.moving != -1) {
                    if (obj.on == 0) {
                        drawFrame(spr_movespine, obj.frameA[currentFrm], 0, obj.x, obj.y);
                    } else {drawFrame(spr_movespine, obj.frameB[currentFrm], 0, obj.x, obj.y);}
                } else {ctx.drawImage(spr_movespine, obj.on*scale*3, 0, scaleW, scaleH, obj.x, obj.y, scaleW, scaleH);}
            }
            if (obj instanceof Enemy && Math.floor(obj.y/scale)*scale == i*scale) {
                ctx.drawImage(spr_enemy, Math.abs(obj.alive -1)*scale, 0, scaleW, scaleH, obj.x, obj.y, scaleW, scaleH);
            }
        });

        if (char.moving == -1) { //플레이어 draw
                if (char.y == i*scale) {ctx.drawImage(spr_char, char.dir*scaleW, 0, scaleW, scaleH, char.x, char.y, scaleW, scaleH);}
        } else {
            if (stopper == 0) {
                if (Math.floor(char.y/scale)*scale == i*scale) {playFrame(spr_char, frmCycle, char.dir+1, char.x, char.y);}
            } else {if (char.y == i*scale) {playFrame(spr_char, frmCycle, char.dir+5, char.x, char.y);}}
        }
        ctx.restore();
    }

    if (dev == 1) {
        ctx.fillStyle = "white";
        ctx.font = "11px 굴림";
        switch (devMode) {
            case 0:
                ctx.fillText("DevMode:" +devMode + "player", 0, 7*scale);
                break;
            case 1:
                ctx.fillText("DevMode:" +devMode + "벽", 0, 7*scale);
                break;
            case 2:
                ctx.fillText("DevMode:" +devMode + "가시", 0, 7*scale);
                break;
            case 3:
                ctx.fillText("DevMode:" +devMode + "점멸가시", 0, 7*scale);
                break;
            case 4:
                ctx.fillText("DevMode:" +devMode + "미는벽", 0, 7*scale);
                break;
            case 5:
                ctx.fillText("DevMode:" +devMode + "적", 0, 7*scale);
                break;
            case 8:
                ctx.fillText("DevMode:" +devMode + "열쇠", 0, 7*scale);
                break;
            case 9:
                ctx.fillText("DevMode:" +devMode + "문", 0, 7*scale);
                break;
        }
    }
}

function game() {
    step();
    draw();

}

