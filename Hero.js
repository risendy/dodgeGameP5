class Hero {
  constructor(obj) {
    this.x = 25;
    this.y = 25;
    this.diameter = 15;
    this.color = 'red';
    this.isAlive = true;
    this.obj = obj;
    this.deathCount = 0;
  }

  update(walls) {
    let isWall = false;

    if (walls) {
      for (let i = 0; i < walls.length; i++) {
        if (this.obj.collideLineRect(walls[i].x1, walls[i].y1, walls[i].x2, walls[i].y2, this.x, this.y, this.diameter, this.diameter)) {
          isWall = true;
        }
      }
    }

    if (this.obj.keyIsDown(this.obj.LEFT_ARROW) && this.x > 0 && !isWall) {
      this.x -= 2;
    } else if (this.obj.keyIsDown(this.obj.LEFT_ARROW) && isWall) {
      this.x += 10;
    }

    if (this.obj.keyIsDown(this.obj.RIGHT_ARROW) && this.x < this.obj.width - 15 && !isWall) {
      this.x += 2;
    } else if (this.obj.keyIsDown(this.obj.RIGHT_ARROW) && isWall) {
      this.x -= 10;
    }

    if (this.obj.keyIsDown(this.obj.UP_ARROW) && this.y > 0 && !isWall) {
      this.y -= 2;
    } else if (this.obj.keyIsDown(this.obj.UP_ARROW) && isWall) {
      this.y += 10;
    }

    if (this.obj.keyIsDown(this.obj.DOWN_ARROW) && this.y < this.obj.height - 15 && !isWall) {
      this.y += 2;
    } else if (this.obj.keyIsDown(this.obj.DOWN_ARROW) && isWall) {
      this.y -= 10;
    }
  }

  isHitByBullets(bulletsArray) {
    if (bulletsArray.length > 0) {
      for (let i = 0; i < bulletsArray.length; i++) {
        let isHit = this.obj.collideRectCircle(this.x, this.y, this.diameter, this.diameter, bulletsArray[i].x, bulletsArray[i].y, 10);

        if (isHit) {
          this.color = 'black';
          this.isAlive = false;
        }
      }
    }
  }

  isHitByCrosses(crossesArray) {
    if (crossesArray.length > 0) {
      for (let i = 0; i < crossesArray.length; i++) {
        let circles = crossesArray[i].getCircles();

        for (let j = 0; j < circles.length; j++) {
          let isHit = this.obj.collideRectCircle(this.x, this.y, this.diameter, this.diameter, circles[j].x, circles[j].y, 15);

          if (isHit) {
            this.color = 'black';
            this.isAlive = false;
          }
        }
      }
    }
  }

  isHitByBalls(ballsArray) {
    if (ballsArray.length > 0) {
      for (let i = 0; i < ballsArray.length; i++) {
        let isHit = this.obj.collideRectCircle(this.x, this.y, this.diameter, this.diameter, ballsArray[i].x, ballsArray[i].y, ballsArray[i].diameter);

          if (isHit) {
            this.color = 'black';
            this.isAlive = false;
          }
      }
    }
  }

  hasCompletedLevel1() {
    return this.obj.collideRectRect(this.x, this.y, this.diameter, this.diameter, 330, 250, 70, 135);
  }

  show() {
    this.obj.fill(this.color);

    //scribble.scribbleRect( this.x, this.y, this.diameter, this.diameter );

    this.obj.square(this.x, this.y, this.diameter);
  }
}