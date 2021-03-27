
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  // la position initiale
  this.x1=0;
  this.y1=0;
  // la position finale
  this.x2=0;
  this.y2=0;
  this.press=false;

	// Developper les 3 fonctions gérant les événements

  this.pression = function(event)
  {

    this.press=true;
    this.interactor.onInteractionStart(this);
    //Appeler dans chacune des 3 fonctions console.log pour afficher dans la console
    // Javascript de votre navigateur
    // les coordonnées de chaque événement lors de l'exécution de l'interaction.
    console.log("press");




  }.bind(this); // lier la méthode à la classe DnD

  this.deplacer= function(event)
  {
    if(this.press) //si une pression a été effectuée au préalable.
    {
      var res=getMousePosition(canvas,event);
      this.x2=res.x;
      this.y2=res.y;
//Appeler dans chacune des 3 fonctions console.log pour afficher dans la console
// Javascript de votre navigateur
// les coordonnées de chaque événement lors de l'exécution de l'interaction.
      this.interactor.onInteractionUpdate(this);
      console.log(res);

    }

  }.bind(this); // lier la méthode à la classe DnD

  this.relacher = function(event)
  {
    if(this.press)
    {
      var res=getMousePosition(canvas,event);
      this.x2=res.x;
      this.y2=res.y;

      //Appeler dans chacune des 3 fonctions console.log pour afficher dans la console
      // Javascript de votre navigateur
      // les coordonnées de chaque événement lors de l'exécution de l'interaction.
      this.interactor.onInteractionEnd(this);
      console.log(res);

    }


  }.bind(this); // lier la méthode à la classe DnD
	// Associer les fonctions précédentes aux évènements du canvas.
   //Enregistrer chaque fonction auprès du canvas.
  canvas.addEventListener('mousedown', this.pression, false);
  canvas.addEventListener('mousemove', this.deplacer, false);
  canvas.addEventListener('mouseup', this.relacher, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



