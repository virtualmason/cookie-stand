var change ={
  bg:document.body.style.backgroundColor, 
  rand: function() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
  },
  color: function() {
    bg:document.body.style.backgroundColor= this.rand();
  }
}
