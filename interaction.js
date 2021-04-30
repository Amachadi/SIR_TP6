// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.

function DnD(canvas, interactor) {

  /**
   * Definition des attributs de la classe
   */
   // la position initiale
  this.xInit = 0; 
  this.xFinal = 0;
  // la position finale
  this.yInit = 0;
  this.yFinal = 0;
  this.mDown = false ;

/**
 * Developpons les 3 fonctions gérant les événements
 * 
 */ 

this.mousedown = function (evt) { 
    this.mDown = true ;
    const position = getMousePosition(canvas, evt) ;
    this.xInit = position.x ;
    this.yInit = position.y ;
    interactor.onInteractionStart(this); 
  
}.bind(this);

this.mousemove = function (evt) {
  if( this.mDown ){
    const position = getMousePosition(canvas, evt) ;
    this.xFinal = position.x ;
    this.yFinal = position.y ;
    interactor.onInteractionUpdate(this);
  }
}.bind(this);

this.mouseup = function (evt) {
  if( this.mDown ){
    this.mDown = false ; 
    const position = getMousePosition(canvas, evt) ;
    this.xFinal = position.x ;
    this.yFinal = position.y ;
    interactor.onInteractionEnd(this);  
  }
}.bind(this);

/**
 *  Associer les fonctions précédentes aux évènements du canvas.
 */

canvas.addEventListener("mousedown",this.mousedown, false);
canvas.addEventListener("mousemove",this.mousemove, false);
canvas.addEventListener("mouseup",this.mouseup, false);
}

/**
 * Place le point de l'événement evt relativement à la position du canvas.
 */

function getMousePosition(canvas, evt) {
  var rect = this.canvas.getBoundingClientRect();
  return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
  };
}


 
