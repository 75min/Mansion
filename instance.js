class Wall {
    constructor(x,y) {
        this.x = x*scale;
        this.y = y*scale;
    }
}

class Spine {
    constructor(x,y) {
        this.x = x*scale;
        this.y = y*scale;
    }
    check(objX, objY) {//가시에 플레이어가 닿을 예정일지 확인
        return (objX == this.x && objY == this.y);
    }
}

class PushWall {
    constructor(x,y,style) {
        this.x = x*scale;
        this.y = y*scale;
        this.originX = this.x;
        this.originY = this.y;
        this.move = 0;
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;
        this.style = style;
    }
    push(targetX, targetY, dir) {
        if (isCollidit(targetX, targetY, this.x, this.y) && this.move < 3) {
            if (this.move == 0) {
                this.startX = this.x;
                this.startY = this.y;
            }
            switch (dir) {
                case 0:
                    if (
                        !isColliding(this.x-scale, this.y, Wall)
                        && !isRoomOut(this.x-scale, this.y)
                        && !isColliding(this.x-scale, this.y, PushWall)
                        && !isCollidEnemy(this.x-scale, this.y)
                        || this.move > 0 && this.move < 3
                    ) {
                        this.endX = this.startX-scale;
                        this.endY = this.startY;
                        this.x -= scale/3;
                        this.move += 1;
                    }
                    break;
                case 1:
                    if (
                        !isColliding(this.x, this.y-scale, Wall)
                        && !isRoomOut(this.x, this.y-scale)
                        && !isColliding(this.x, this.y-scale, PushWall)
                        && !isCollidEnemy(this.x, this.y-scale)
                        || this.move > 0 && this.move < 3
                    ) {
                        this.endX = this.startX;
                        this.endY = this.startY-scale;
                        this.y -= scale/3;
                        this.move += 1;
                    }
                    break;
                case 2:
                    if (
                        !isColliding(this.x+scale, this.y, Wall)
                        && !isRoomOut(this.x+scale, this.y)
                        && !isColliding(this.x+scale, this.y, PushWall)
                        && !isCollidEnemy(this.x+scale, this.y)
                        || this.move > 0 && this.move < 3
                    ) {
                        this.endX = this.startX+scale;
                        this.endY = this.startY;
                        this.x += scale/3;
                        this.move += 1;
                    }
                    break;
                case 3:
                    if (
                        !isColliding(this.x, this.y+scale, Wall)
                        && !isRoomOut(this.x, this.y+scale)
                        && !isColliding(this.x, this.y+scale, PushWall)
                        && !isCollidEnemy(this.x, this.y+scale)
                        || this.move > 0 && this.move < 3
                    ) {
                        this.endX = this.startX;
                        this.endY = this.startY+scale;
                        this.y += scale/3;
                        this.move += 1;
                    }
                    break;
            }
        }
    }
    stop(targetX, targetY, dir) {
        if (this.move == 3) {
            this.x = this.endX;
            this.y = this.endY;

            this.startX = 0;
            this.startY = 0;
            this.endX = 0;
            this.endY = 0;
            this.move = 0;
        }
    }
}

class MoveSpine { //2턴에 한 번 활성화되는 점멸 가시
    constructor(x,y, on) {
        this.x = x*scale;
        this.y = y*scale;
        this.on = on;
        this.originOn = this.on;
        this.frameA = [0,1,2,3];
        this.frameB = [3,2,1,0];
    }
    onoff() {
        if (this.on == 0) {this.on = 1;} else {this.on = 0;}
    }
    check(objX, objY) {//가시에 플레이어가 닿을 예정일지 확인
        return (objX == this.x && objY == this.y && this.on == 1);
    }
}

class Enemy {
    constructor(x,y) {
        this.alive = 1;
        this.x = x*scale;
        this.y = y*scale;
        this.originX = this.x;
        this.originY = this.y;
        this.move = 0;
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;
    }
    attack(targetX, targetY, dir) {
        if (isCollidit(targetX, targetY, this.x, this.y) && this.move < 3) {
            if (this.move == 0) {
                this.startX = this.x;
                this.startY = this.y;
            }
            switch (dir) {
                case 0:
                    if (
                        !isColliding(this.x-scale, this.y, Wall)
                        && !isRoomOut(this.x-scale, this.y)
                        && !isColliding(this.x-scale, this.y, PushWall)
                        && !isColliding(this.x-scale, this.y, Spine)
                        && !isCollidSpine(this.x-scale, this.y)
                        && !isCollidEnemy(this.x-scale, this.y)
                        || this.move > 0 && this.move < 3
                    ) {
                        this.endX = this.startX-scale;
                        this.endY = this.startY;
                        this.x -= scale/3;
                        this.move += 1;
                    } else if (
                        isColliding(this.x-scale, this.y, Wall)
                        || isRoomOut(this.x-scale, this.y)
                        || isColliding(this.x-scale, this.y, PushWall)
                        || isColliding(this.x-scale, this.y, Spine)
                        || isCollidSpine(this.x-scale, this.y)
                        || isCollidEnemy(this.x-scale, this.y)
                    ) {
                        if (this.alive == 1) {this.alive = 0;}
                    }
                    break;
                case 1:
                    if (
                        !isColliding(this.x, this.y-scale, Wall)
                        && !isRoomOut(this.x, this.y-scale)
                        && !isColliding(this.x, this.y-scale, PushWall)
                        && !isColliding(this.x, this.y-scale, Spine)
                        && !isCollidSpine(this.x, this.y-scale)
                        && !isCollidEnemy(this.x, this.y-scale)
                        || this.move > 0 && this.move < 3
                    ) {
                        this.endX = this.startX;
                        this.endY = this.startY-scale;
                        this.y -= scale/3;
                        this.move += 1;
                    } else if (
                        isColliding(this.x, this.y-scale, Wall)
                        || isRoomOut(this.x, this.y-scale)
                        || isColliding(this.x, this.y-scale, PushWall)
                        || isColliding(this.x, this.y-scale, Spine)
                        || isCollidSpine(this.x, this.y-scale)
                        || isCollidEnemy(this.x, this.y-scale)
                    ) {
                        if (this.alive == 1) {this.alive = 0;}
                    }
                    break;
                case 2:
                    if (
                        !isColliding(this.x+scale, this.y, Wall)
                        && !isRoomOut(this.x+scale, this.y)
                        && !isColliding(this.x+scale, this.y, PushWall)
                        && !isColliding(this.x+scale, this.y, Spine)
                        && !isCollidSpine(this.x+scale, this.y)
                        && !isCollidEnemy(this.x+scale, this.y)
                        || this.move > 0 && this.move < 3
                    ) {
                        this.endX = this.startX+scale;
                        this.endY = this.startY;
                        this.x += scale/3;
                        this.move += 1;
                    } else if (
                        isColliding(this.x+scale, this.y, Wall)
                        || isRoomOut(this.x+scale, this.y)
                        || isColliding(this.x+scale, this.y, PushWall)
                        || isColliding(this.x+scale, this.y, Spine)
                        || isCollidSpine(this.x+scale, this.y)
                        || isCollidEnemy(this.x+scale, this.y)
                    ) {
                        if (this.alive == 1) {this.alive = 0;}
                    }
                    break;
                case 3:
                    if (
                        !isColliding(this.x, this.y+scale, Wall)
                        && !isRoomOut(this.x, this.y+scale)
                        && !isColliding(this.x, this.y+scale, PushWall)
                        && !isColliding(this.x, this.y+scale, Spine)
                        && !isCollidSpine(this.x, this.y+scale)
                        && !isCollidEnemy(this.x, this.y+scale)
                        || this.move > 0 && this.move < 3
                    ) {
                        this.endX = this.startX;
                        this.endY = this.startY+scale;
                        this.y += scale/3;
                        this.move += 1;
                    } else if (
                        isColliding(this.x, this.y+scale, Wall)
                        || isRoomOut(this.x, this.y+scale)
                        || isColliding(this.x, this.y+scale, PushWall)
                        || isColliding(this.x, this.y+scale, Spine)
                        || isCollidSpine(this.x, this.y+scale)
                        || isCollidEnemy(this.x, this.y+scale)
                    ) {
                        if (this.alive == 1) {this.alive = 0;}
                    }
                    break;
            }
        }
    }
    stop(targetX, targetY, dir) {
        if (this.move == 3) {
            this.x = this.endX;
            this.y = this.endY;

            this.startX = 0;
            this.startY = 0;
            this.endX = 0;
            this.endY = 0;
            this.move = 0;
        }
    }
    check() { //활성화된 점멸가시에 적이 닿았는지 확인
        if (this.alive == 1) {
            for (const obj of stageObj[stage]) { if (obj instanceof MoveSpine) {
                if (this.x == obj.x && this.y == obj.y && obj.on == 1) {
                    this.alive = 0;
                }
            }}
        }
    }
}