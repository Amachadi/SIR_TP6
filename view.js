
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (ctx) {
    ctx.lineWidth = this.thick;
    ctx.strokeStyle = this.color;  
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
     ctx.lineWidth = this.thick;
    ctx.strokeStyle = this.color; 
    ctx.beginPath();
    ctx.moveTo(this.xBegin, this.yBegin);
    ctx.lineTo(this.xEnd, this.yEnd);
    ctx.stroke();
};


Drawing.prototype.paint = function (ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formList.forEach(function (form) {
        form.paint(ctx);
    });
}
