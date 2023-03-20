let globalString = "Temperature Check (C/F)"

function fahrenheitToC(cNum){
  return (cNum - 32) * (5/9);

}
function celsiusToF(fNum){
  return (fNum * (9/5)) + 32; 
}
celsiusToF(125);