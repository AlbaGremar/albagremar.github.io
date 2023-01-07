

  class Obstacle {
    constructor(ctx) {
      this.ctx = ctx
  
      this.x = 1000
      this.y = 285
      this.y0 = 325
      this.w = 70
      this.h = 150
      this.vx = -1
      this.vy = 0
      this.ax = 0
      this.ay = 0
  
      this.img = new Image()
      this.img.src = 'assets/img/obstacle.png'
    }

    draw() {
        this.ctx.drawImage(
          this.img,
          0,
          0,
          this.img.width,
          this.img.height,
          this.x,
          this.y,
          this.w,
          this.h
        )
      }

      move() {
        this.vx += this.ax
        this.vy += this.ay
        this.x += this.vx
        this.y += this.vy
    
        if (this.y >= this.y0) {
          this.y = this.y0
          this.vy = 0
        }
      }
      isVisible() {
        return this.x + this.w >= 0 && this.x <= this.ctx.canvas.width
      }
}