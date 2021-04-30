// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
//Une forme possède une couleur et une épaisseur de trait.
function Form(color, thick) {
    this.color = color;
    this.thick = thick;
}
//Un rectangle possède des coordonnées de son point haut-gauche, une largeur et une hauteur.
function Rectangle(x, y, width, heigth, color, thick) {
    Form.call(this, color, thick);
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = heigth;
}

//Une ligne possède les coordonnées de ses deux points.
function Line(xBegin, yBegin, xEnd, yEnd, color, thick) {
    Form.call(this, color, thick);
    this.xBegin = xBegin;
    this.yBegin = yBegin;
    this.xEnd = xEnd;
    this.yEnd = yEnd;
}

//classe Drawing se composant de formes (on utilise pour cela Array pour gérer la liste des formes d’un dessin)
function Drawing() {
    this.formList = [];

    this.addForm = function (formList) {
        this.formList.push(formList)
    }.bind(this);
}


//héritage !
Rectangle.prototype = new Form();
Line.prototype = new Form();


/*

Line.prototype.paint = function(ctx) {
//TODO Manager color



    ctx.beginPath();
    ctx.moveTo(this.x1 ,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.stroke();

    console.log(this);

};
*/
