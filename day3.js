function allowDragElem(ev) {
  ev.preventDefault();
}

function dragElement(ev) {
  // dataTransfer.setData("key",value);
  ev.dataTransfer.setData("dogElement", ev.target.id);
  // console.log(ev.dataTransfer);
}

function dropElement(ev) {
  // dataTransfer.getData("key")
 var data= ev.dataTransfer.getData("dogElement");
  ev.target.appendChild(document.getElementById(data));

}
//////////////////location task //////////////////////////////////////////////////
var location=document.getElementById("location")
function getLocation() {
  
  if (navigator.geolocation) 
  {
      navigator.geolocation.getCurrentPosition(showPosition,showError);
  } else 
  {
    location.innerHTML = "Geolocation is not supported on your browser";

  }
}
// get permission => allow
function showPosition(position) {
  console.log(position);
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  location.innerHTML = "Latitude: " + lat + "<br> Longitude: " + lon;
  var url = "https://maps.google.com/maps?q=" + lat + "," + lon;
  alert(url);
  window.open(url, "_blank");
}
function showError(error) {
  console.log(error);
  console.log(error.code);
  switch (error.code) {
      case error.PERMISSION_DENIED:
          para.innerHTML = "User denied the request for Geolocation."
          break;
      case error.POSITION_UNAVAILABLE:
          para.innerHTML = "Location information is unavailable."
          break;
      case error.TIMEOUT:
          para.innerHTML = "The request to get user location timed out."
          break;
      case error.UNKNOWN_ERROR:
          para.innerHTML = "An unknown error occurred."
          break;
  }


}