// Implémenter ici les 4 classes du modèle.

function Form(color, epaisseur) {
    this.color = color;
    this.epaisseur = epaisseur;
}

function Rectangle(x, y, largeur, hauteur, color, epaisseur) {
    Form.call(this, color, epaisseur);
    this.x = x;
    this.y = y;
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.type = "Rectangle" ;
}

function Line(xInitial, yInitial, xFinal, yFinal, color, epaisseur) {
    Form.call(this, color, epaisseur);
    this.xInitial = xInitial;
    this.yInitial = yInitial;
    this.xFinal = xFinal;
    this.yFinal = yFinal;
    this.type = "Ligne" ;
}

function Drawing() {
    this.formList = [];

    this.addForm = function (form) {
        this.formList.push(form)
    }.bind(this);

    this.removeForm = function (form, ) {
        this.formList  = this.formList.filter(val=> { return val !== form }) ; 
       document.getElementById("shapeList").innerHTML = "" ; 
       this.paint(ctx);
       this.formList.forEach(function (form) {
        updateShapeList(form) ; 
        });
    }.bind(this);


}


//héritage !
Rectangle.prototype = new Form();
Line.prototype = new Form();
