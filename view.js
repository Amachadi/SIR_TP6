
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Forme.prototype.clear = function(ctx) {
    canvas.getContext('2d').fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};


Rectangle.prototype.paint = function(ctx) {
    ctx.lineWidth = this.epaisseur();
    ctx.strokeStyle=this.couleur();
    ctx.rect(this.x,this.y,this.hauteur,this.largeur);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.lineWidth = this.epaisseur();
    ctx.strokeStyle=this.couleur();
    ctx.beginPath();
    ctx.moveTo(this.x1,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.stroke();
};


Drawing.prototype.paint = function(ctx) {
    console.log(this.forms);
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forms.forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};
