
var editingMode = {rect: 0, line: 1};
function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = null;

    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

    new DnD(canvas, this);

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    
	this.definedVal = function(){
        this.currEditingMode = document.getElementById("butRect").checked ? editingMode.rect : editingMode.line;
        this.currColour = document.getElementById("colour").value;
        const stroke =  document.getElementById("spinnerWidth").value; 
        this.currLineWidth = parseInt(stroke) ;  
    }.bind(this);

    this.onInteractionUpdate = function (dnd) {
        if (this.currentShape !== null) {
            this.updateDemensions(dnd) ; 
            drawing.paint(ctx);
            this.currentShape.paint(ctx);
        }
        
    }.bind(this);

	this.onInteractionStart = function (dnd) {
        this.definedVal() ;
        switch (this.currEditingMode) {
            case editingMode.rect:{
                let width = dnd.xFinal - dnd.xInit   ;
				let height = dnd.yFinal - dnd.yInit   ;
				 
                this.currentShape = new Rectangle(dnd.xInit, dnd.yInit, width, height, this.currColour, this.currLineWidth);
                break;
            }
            case editingMode.line:{ 
                this.currentShape = new Line(dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal, this.currColour, this.currLineWidth);
                break;
            }
        }
    }.bind(this);

    this.updateDemensions = function(dnd){
        if (this.currentShape !== null) {
            switch (this.currEditingMode) {
                case editingMode.rect:{
                    let width = dnd.xFinal - dnd.xInit   ;
                    let height = dnd.yFinal - dnd.yInit   ;
                    this.currentShape.width = width;
                    this.currentShape.height = height;
                    break;
                }
                case editingMode.line:{
                    this.currentShape.xEnd = dnd.xFinal;
                    this.currentShape.yEnd = dnd.yFinal ;
                    break;
                }
            }
        }
    };
	this.onInteractionEnd = function (dnd) {
        if (this.currentShape !== null) {
            this.updateDemensions(dnd) ;
            this.currentShape.paint(ctx);
            drawing.addForm(this.currentShape);
            drawing.paint(ctx);
        }
    }.bind(this);

}