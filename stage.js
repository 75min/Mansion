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
        new Wall(1,1),
        new Spine(0,4),new Spine(0,5),
        new MoveSpine(2,1,0),new MoveSpine(2,3,1),
        new Enemy(2,6),new Enemy(3,4),
        new PushWall(4,5,0),new PushWall(4,3,0)
    ]
]