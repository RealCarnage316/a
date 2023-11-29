window.addEventListener('load', function(){
    const canvas = document.getElementsById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 800;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;

    class Asteroid{
        constructor(game){
            this.game = game;
            this.radius = 75;
            this.x = -this.radius;
            this.y = Math.random() * this.game.height;
        }
    }
})