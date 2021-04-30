var editingMode = {rect: 0, line: 1};

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLinelargeur = 5;
    this.currColour = '#000000';
    this.currentShape = null;

    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

    new DnD(canvas, this);

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionFinal
    this.onInteractionStart = function (dnd) {
        
        this.currEditingMode = document.getElementById("butRect").checked ? editingMode.rect : editingMode.line;
        this.currColour = document.getElementById("colour").value;
        const stroke =  document.getElementById("spinnerWidth").value; 
        this.currLinelargeur = parseInt(stroke) ;  


        switch (this.currEditingMode) {
            case editingMode.rect:{
                let largeur = dnd.xFinal - dnd.xInitial   ;
				let hauteur = dnd.yFinal - dnd.yInitial   ;
				 
                this.currentShape = new Rectangle(dnd.xInitial, dnd.yInitial, largeur, hauteur, this.currColour, this.currLinelargeur);
                break;
            }
            case editingMode.line:{ 
                this.currentShape = new Line(dnd.xInitial, dnd.yInitial, dnd.xFinal, dnd.yFinal, this.currColour, this.currLinelargeur);
                break;
            }
        }
    }.bind(this);

    this.onInteractionUpdate = function (dnd) {
        console.log("update ----- ")
        if (this.currentShape !== null) {
            switch (this.currEditingMode) {
                case editingMode.rect:{
                    this.currentShape.largeur = dnd.xFinal - dnd.xInitial   ;
                    this.currentShape.hauteur = dnd.yFinal - dnd.yInitial ;
                    break;
                }
                case editingMode.line:{
                    this.currentShape.xFinal = dnd.xFinal;
                    this.currentShape.yFinal = dnd.yFinal ;
                    break;
                }
            }

            drawing.paint(ctx);
            this.currentShape.paint(ctx);
        }
        
    }.bind(this);

    this.onInteractionEnd = function (dnd) {
        if (this.currentShape !== null) {

            switch (this.currEditingMode) {
                case editingMode.rect:{
                    this.currentShape.largeur = dnd.xFinal - dnd.xInitial   ;
                    this.currentShape.hauteur = dnd.yFinal - dnd.yInitial
                    break;
                }
                case editingMode.line:{
                    this.currentShape.xFinal = dnd.xFinal;
                    this.currentShape.yFinal = dnd.yFinal ;
                    break;
                }
            }

            this.currentShape.paint(ctx);
            drawing.addForm(this.currentShape);
            drawing.paint(ctx);
            updateShapeList(this.currentShape ) ;
        }
    }.bind(this);


}


