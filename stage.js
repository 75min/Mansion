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
        new Wall(0,0, 2,7),new Wall(5,0, 2,7),new Wall(2,0, 3,2),new Wall(2,5, 3,2)
    ]
]