const stageObj = [
    [ //stage0

    ],
    [ //stage1
        new Wall(1,1),
        new Spine(0,4),new Spine(0,5),
        new MoveSpine(2,1,0),new MoveSpine(2,3,1),
        new Enemy(2,6),new Enemy(3,4),
        new PushWall(4,5,0),new PushWall(4,3,0)
    ],
    [ //stage2
        new Wall(0,3),new Wall(1,3),new Wall(2,3),
        new Wall(3,3),new Wall(4,3),new Wall(5,3),
        new Wall(6,3),new Wall(1,1),new Wall(2,1),
        new Wall(3,1),new Wall(4,1),new Wall(5,1),
        new Wall(5,0),

        new MoveSpine(0,0,0),new MoveSpine(1,0,1),new MoveSpine(2,0,0),
        new MoveSpine(3,0,1),new MoveSpine(2,2,1),new MoveSpine(3,2,0),
        new MoveSpine(4,2,1),new MoveSpine(5,2,0),new MoveSpine(6,2,1)
    ]
]