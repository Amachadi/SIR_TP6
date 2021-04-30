// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (ctx) {
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.color;  
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.largeur, this.hauteur);
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
     ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.color; 
    ctx.beginPath();
    ctx.moveTo(this.xInitial, this.yInitial);
    ctx.lineTo(this.xFinal, this.yFinal);
    ctx.stroke(); 
};


Drawing.prototype.paint = function (ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formList.forEach(function (form) {
        form.paint(ctx); 
    });
}


function updateShapeList(form){
 var fond = {Rectangle: "red", Ligne: "blue" }
  list = document.getElementById("shapeList") ; 
  
  let li = document.createElement("li");
  li.textContent = ' '+form.type+ '' ;
  li.style.paddingLeft = "10px" ;
  li.style.paddingRight = "1px" ;
  li.style.marginBottom = "1px" ;

  li.style.hauteur = "25px"  ;
  li.style.border = "1px solid "+ fond[form.type] +"" ;
 

  let bouton = document.createElement("button") ; 
  bouton.style.float = "right" ;
  bouton.className = "btn btn-default" ;

  let span = document.createElement("span") ; 
  bouton.className = "glyphicon glyphicon-remove-sign" ;
  bouton.style.color = "red" ;

  bouton.addEventListener("click", (e)=>{   drawing.removeForm(form, ctx) ;  })
  
  bouton.appendChild(span) ;

  li.appendChild(bouton) ;

  list.appendChild(li)

}


