// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.


function DnD(canvas, interactor) {

    // Définir ici les attributs de la 'classe'
    this.xInitial = 0;
    this.yInitial = 0;
    this.xFinal = 0;
    this.yFinal = 0;
    this.pression = false ;

	// Developper les 3 fonctions gérant les événements

  this.mouseDown = function (evt) { 
      this.pression = true ;
      this.xInitial = getMousePosition(canvas, evt).x ;
      this.yInitial = getMousePosition(canvas, evt).y ;
      interactor.onInteractionStart(this); 
    
  }.bind(this);

  this.mouseMove = function (evt) {

    if( this.pression ){
      this.xFinal = getMousePosition(canvas, evt).x ;
      this.yFinal = getMousePosition(canvas, evt).y ;
      interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  this.mouseUp = function (evt) {
    if( this.pression ){
      this.pression = false ; 
      this.xFinal = getMousePosition(canvas, evt).x ;
      this.yFinal = getMousePosition(canvas, evt).y ;
      interactor.onInteractionEnd(this);  
    }
  }.bind(this);

  
	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener("mousedown",this.mouseDown, false);
  canvas.addEventListener("mousemove",this.mouseMove, false);
  canvas.addEventListener("mouseup",this.mouseUp, false);
}


// Place le point de l'événement evt relativement à la getMousePosition(canvas, evt) du canvas.
function getMousePosition(canvas, evt) {
    var rect = this.canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}



