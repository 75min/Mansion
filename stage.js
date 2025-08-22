const stageObj = [
    [ //stage0

    ],
    [ //stage1
    new Wall(0,0, 2,7),
    new Wall(5,0, 2,7),

	new Wall( 1 , 0 ),new Wall( 2 , 1 ),new Wall( 2 , 2 ),new Wall( 2 , 3 ),
	new Wall( 2 , 4 ),new Wall( 2 , 5 ),new Wall( 2 , 6 ),new Wall( 4 , 0 ),
	new Wall( 4 , 1 ),new Wall( 4 , 2 ),new Wall( 4 , 3 ),new Wall( 4 , 4 ),
	new Wall( 4 , 5 ),new Wall( 4 , 6 ),new Wall( 1 , 1 )
    ],
    [ //stage2
    new Wall(0,0, 2,7),
    new Wall(5,0, 2,7),

	new Wall( 1 , 0 ),new Wall( 2 , 1 ),new Wall( 2 , 2 ),new Wall( 2 , 3 ),
	new Wall( 2 , 4 ),new Wall( 2 , 5 ),new Wall( 2 , 6 ),new Wall( 4 , 0 ),
	new Wall( 4 , 1 ),new Wall( 4 , 2 ),new Wall( 4 , 3 ),new Wall( 4 , 4 ),
	new Wall( 4 , 5 ),new Wall( 4 , 6 ),new Wall( 1 , 1 ),

	new Spine(3,2),new Spine(3,3),new Spine(3,4)
    ],
    [ //stage3
    new Wall(2,0, 5,5), new Wall( 4,5, 3,2),

    new Wall( 1 , 0 ),
    new Wall( 1 , 1 ),new Wall( 1 , 2 ),new Wall( 1 , 3 ),new Wall( 1 , 4 ),
    new Wall( 1 , 5 ),new Wall( 2 , 5 ),new Wall( 3 , 5 ),new Wall( 4 , 6 ),

    new MoveSpine(0,2,0),new MoveSpine(0,3,1),new MoveSpine(0,4,0),
    new MoveSpine(0,6,1),new MoveSpine(1,6,0),new MoveSpine(2,6,1)
    ],
    [ //stage4
    new Wall(0,2, 3,5),new Wall(3,4, 2,3),new Wall(5,0, 2,2),

    new Wall( 0 , 1 ),new Wall( 1 , 1 ),new Wall( 2 , 1 ),new Wall( 3 , 1 ),
    new Wall( 5 , 0 ),new Wall( 5 , 1 ),new Wall( 6 , 1 ),new Wall( 3 , 2 ),
    new Wall( 3 , 3 ),new Wall( 4 , 3 ),new Wall( 5 , 3 ),new Wall( 5 , 4 ),
    new Wall( 5 , 5 ),new Wall( 5 , 6 ),

    new MoveSpine(6,2,0),
    new Enemy(4,1),new Enemy(5,2)
    ],
    [ //stage5
        new Wall(0,0, 7,3),new Wall(0,3, 2,2),new Wall(5,3, 2,2),

        new Wall(2,3),new Wall(3,2),new Wall(4,3),new Wall(1,4),
        new Wall(0,5),new Wall(5,4),new Wall(6,5),

        new PushWall(2,4,0),new PushWall(3,5,0),new PushWall(4,4,0)
    ],
    [ //stage6
        new Spine(0,4),new Spine(0,5),
        new MoveSpine(2,1,0),new MoveSpine(2,3,1),
        new Enemy(2,6),new Enemy(3,4),
        new PushWall(4,5,0),new PushWall(4,3,0)
    ],
    [ //stage7
        new Wall(0,4, 7,3),

        new Wall(0,3),new Wall(1,3),new Wall(2,3),
        new Wall(3,3),new Wall(4,3),new Wall(5,3),
        new Wall(6,3),new Wall(1,1),new Wall(2,1),
        new Wall(3,1),new Wall(4,1),new Wall(5,1),
        new Wall(5,0),

        new MoveSpine(0,0,0),new MoveSpine(1,0,1),new MoveSpine(2,0,0),
        new MoveSpine(3,0,1),new MoveSpine(2,2,1),new MoveSpine(3,2,0),
        new MoveSpine(4,2,1),new MoveSpine(5,2,0),new MoveSpine(6,2,1)
    ],
    [ //stage8
        new Wall(2,2),new Wall(2,3),new Wall(2,4),
        new Wall(3,2),new Wall(3,4),new Wall(4,2),
        new Wall(4,4),new Wall(4,5),new Wall(4,6),
        new Wall(5,5),

        new Spine(0,2),new Spine(0,3),new Spine(0,4),
        new MoveSpine(6,6,0),
        new Enemy(2,1),new Enemy(5,3),
        new PushWall(1,4,0)
    ],
    [ //stage9
        new Wall(2,2, 3,3),

        new Wall(4,1),new Wall(5,2),new Wall(1,5),
        new Wall(1,4),new Wall(2,5),new Wall(1,3),
        new Wall(2,2),new Wall(3,1),new Wall(3,5),
        new Wall(4,4),new Wall(5,3),

        new Spine(0,2),new Spine(0,3),
        new MoveSpine(4,0,1),new MoveSpine(5,0,0),
        new MoveSpine(0,1,1),new MoveSpine(1,0,0),
        new MoveSpine(2,1,1),new MoveSpine(1,2,0),
        new PushWall(6,2,0),new PushWall(4,6,0),
        new PushWall(5,5,0)
    ],
    [ //stage10
        new Wall(2,3),new Wall(2,2),new Wall(3,2),new Wall(4,2),
        new Wall(4,3),new Wall(4,4),new Wall(4,5),new Wall(4,6),
        new Wall(3,6),new Wall(2,6),new Wall(1,6),new Wall(0,6),

        new Spine(6,6),new Spine(6,5),
        new Enemy(2,4),new Enemy(1,4),new Enemy(2,1),new Enemy(5,5),
        new PushWall(1,2,0)
    ],
    [ //stage11
        new Wall(4, 1, 3, 6),new Wall(0, 6, 4, 1),
        
        new Wall(3, 2, 1, 1), new Wall(3, 1, 1, 1), new PushWall(2, 0, 0), new Wall(4, 1, 1, 1), 
        new Wall(5, 1, 1, 1), new Wall(6, 0, 1, 1), new PushWall(0, 2, 0), new PushWall(2, 1, 0), 
        new PushWall(2, 2, 0), new PushWall(1, 2, 0), new MoveSpine(0, 0, 1), new MoveSpine(1, 0, 0), 
        new MoveSpine(1, 1, 1), new MoveSpine(0, 1, 0), new PushWall(2, 4, 0), new PushWall(2, 3, 0), 
        new Wall(4, 3, 1, 1), new Wall(4, 4, 1, 1), new Wall(3, 5, 1, 1), new Wall(2, 5, 1, 1), new Wall(1, 5, 1, 1), 
        new Wall(0, 5, 1, 1)
    ],
	[ //stage12
		new Wall(2, 0, 1, 1), new Wall(2, 1, 1, 1), new Wall(3, 1, 1, 1), new PushWall(4, 0, 0), 
		new PushWall(4, 1, 0), new PushWall(5, 1, 0), new PushWall(6, 2, 0), new Wall(4, 4, 1, 1), 
		new Wall(3, 4, 1, 1), new Wall(2, 4, 1, 1), new Wall(6, 4, 1, 1), new Wall(4, 3, 1, 1), 
		new Wall(0, 2, 1, 1), new Enemy(3, 3), new Wall(0, 1, 1, 1), new Wall(1, 0, 1, 1), 
		new Wall(0, 0, 1, 1), new Enemy(1, 2), new Wall(0, 3, 1, 1), new Wall(0, 4, 1, 1), 
		new Wall(0, 5, 1, 1), new Wall(0, 6, 1, 1), new Wall(4, 5, 1, 1), new Wall(4, 6, 1, 1), 
		new MoveSpine(1, 5, 1), new MoveSpine(2, 5, 0), new PushWall(1, 4, 0), new Wall(5, 4, 1, 1), 
		new MoveSpine(1, 3, 0),
		new Wall(5, 5, 2, 2)
	],
	[ //stage13
		new PushWall(3, 4, 0), new PushWall(2, 5, 0), new PushWall(4, 5, 0), new PushWall(5, 4, 0),
		new PushWall(1, 4, 0), new PushWall(2, 3, 0), new PushWall(4, 3, 0), new PushWall(2, 2, 0),
		new PushWall(3, 2, 0), new MoveSpine(4, 4, 0), new Enemy(0, 6), new Enemy(6, 6), new Spine(0, 5),
		new Spine(0, 4), new PushWall(5, 2, 0), new Wall(4, 0, 1, 1), new MoveSpine(3, 1, 0), new Enemy(6, 1),
		new Enemy(0, 1), new Wall(0, 0, 1, 1), new Wall(6, 0, 1, 1), new Wall(5, 0, 1, 1), new Wall(1, 0, 1, 1),
		new Spine(4, 1), new Wall(1, 2, 1, 1), new MoveSpine(0, 2, 0), new MoveSpine(2, 4, 0), new MoveSpine(3, 3, 0),
		new MoveSpine(4, 2, 0), new Wall(2, 0, 1, 1)
	],
	[ //stage14
		new Wall(6, 2, 1, 1), new Wall(5, 2, 1, 1), new Wall(4, 2, 1, 1), new Wall(4, 4, 1, 1),
		new Wall(4, 5, 1, 1), new MoveSpine(6, 5, 0), new MoveSpine(6, 4, 1), new Spine(5, 5),
		new Wall(2, 4, 1, 1), new Wall(2, 5, 1, 1), new Wall(3, 2, 1, 1), new Wall(2, 2, 1, 1),
		new Wall(1, 2, 1, 1), new PushWall(2, 3, 0), new PushWall(6, 3, 0), new MoveSpine(3, 3, 1),
		new MoveSpine(3, 4, 0), new MoveSpine(3, 5, 1), new Wall(4, 0, 1, 1), new Wall(4, 1, 1, 1),
		new PushWall(2, 6, 0), new Spine(1, 4), new Enemy(0, 5), new Spine(5, 4), new Spine(0, 4),
		new Enemy(1, 5), new MoveSpine(3, 6, 0), new Spine(0, 6), new MoveSpine(4, 6, 1), new Spine(5, 6),
		new Wall(5, 0, 2, 2)
	],
    [ //end
        new Wall(0,0, 2,7),new Wall(5,0, 2,7),new Wall(2,0, 3,2),new Wall(2,5, 3,2)
    ]
];

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
            if (dev == 0) {
            char.hp = 30; char.x = 3*scale; char.y = 6*scale;
            door.x = 3*scale; door.y = 0*scale; door.close = 0;
            } else {
                char.hp = devChar[0]; char.x = devChar[1]*scale; char.y = devChar[2]*scale;
                door.close = devChar[3]; door.x = devChar[4]*scale; door.y = devChar[5]*scale;
                keykey.x = devChar[6]*scale; keykey.y = devChar[7]*scale;
            }
            document.getElementById("help").innerHTML = "화면을 스와이프 하거나<br>방향키를 눌러 이동할 수 있습니다.";
            break;
            
        case 1: //tutorial: Key
            char.hp = 13; char.x = 3*scale; char.y = 0*scale;
            door.x = 2*scale; door.y = 0*scale; door.close = 1;
            keykey.x = 3*scale; keykey.y = 6*scale;
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
            char.hp=22; char.x=3*scale; char.y=3*scale;
            door.close=1; door.x=3*scale; door.y=0*scale;
            keykey.x=4*scale; keykey.y=0*scale;
            break;
	case 12:
            	char.hp=24; char.x=3*scale; char.y=0*scale;
		door.close=1; door.x=3*scale; door.y=5*scale;
		keykey.x=1*scale; keykey.y=1*scale;
           		break;
	case 13:
            	char.hp=15; char.x=3*scale; char.y=5*scale;
		door.close=0; door.x=3*scale; door.y=0*scale;
		keykey.x=3*scale; keykey.y=1*scale;
            	break;
	case 14:
            	char.hp=29; char.x=3*scale; char.y=0*scale;
		door.close=1; door.x=5*scale; door.y=3*scale;
		keykey.x=1*scale; keykey.y=6*scale;
		break;
	case 15:
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

const stageDev = [];

const classConst = {
    Wall: obj => `new Wall(${obj.x/scale}, ${obj.y/scale}, ${obj.w}, ${obj.h})`,
    Spine: obj => `new Spine(${obj.x/scale}, ${obj.y/scale})`,
    PushWall: obj => `new PushWall(${obj.originX/scale}, ${obj.originY/scale}, ${obj.style})`,
    MoveSpine: obj => `new MoveSpine(${obj.x/scale}, ${obj.y/scale}, ${obj.originOn})`,
    Enemy: obj => `new Enemy(${obj.originX/scale}, ${obj.originY/scale})`
};

function exitDevMode() {
    // 배열을 코드 문자열로 변환
    let codeString = "[";
    codeString += stageDev.map(obj => {
        const className = obj.constructor.name; // 클래스 이름 가져오기
        if (classConst[className]) {
            return classConst[className](obj);
        } else {
            return `/* Unknown class: ${className} */`; // 규칙이 없으면 경고 출력
        }
    }).join(", ");
    codeString += "]";
    codeString += `\nchar.hp=${devChar[0]}; char.x=${devChar[1]}*scale; char.y=${devChar[2]}*scale;`
    codeString += `\ndoor.close=${devChar[3]}; door.x=${devChar[4]}*scale; door.y=${devChar[5]}*scale;`
    codeString += `\nkeykey.x=${devChar[6]}*scale; keykey.y=${devChar[7]}*scale;`

    console.log(codeString);

}
