
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
//Une forme possède une couleur et une épaisseur de trait.
function Forme(couleur,epaisseur) {
    this.couleur=couleur;
    this.epaisseur=epaisseur;
}
//Un rectangle possède des coordonnées de son point haut-gauche, une largeur et une hauteur.
function Rectangle(largeur,hauteur,x,y,epaisseur,couleur)
{
    Forme.call(this,couleur,epaisseur);
    this.largeur=largeur;
    this.hauteur=hauteur;
    this.x=x;
    this.y=y;
}
//Un prototype est un objet à partir duquel il est possible d'en créer de nouveaux (des duplicata)
Rectangle.prototype=new Forme();
//Une ligne possède les coordonnées de ses deux points.
function Line(x1,y1,x2,y2,epaisseur,couleur)
{
    Forme.call(this,couleur,epaisseur);
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
}

Line.prototype=new Forme();
//classe Drawing se composant de formes (on utilise pour cela Array pour gérer la liste des formes d’un dessin)
function Drawing()
{
    this.forms=new Array();
}
Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
    console.log('pass par la')
    ctx.rect(this.x, this.y, this.x + this.largeur, this.y + this.hauteur);
    ctx.stroke();
}
Line.prototype.paint = function(ctx) {
//TODO Manager color



    ctx.beginPath();
    ctx.moveTo(this.x1 ,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.stroke();

    console.log(this);

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