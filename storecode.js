<button id="myBtn" onclick="myFunction()">Pause</button>






<!-- !PAGE CONTENT! -->
<div class="w3-content" style="max-width:1500px">

<!-- Header -->
<div class="w3-opacity">
<span class="w3-button w3-xxlarge w3-white w3-right" onclick="w3_open()"><i class="fa fa-bars"></i></span> 
<div class="w3-clear"></div>
<header class="w3-center w3-margin-bottom">
  <h1><b>PHOTOLIO</b></h1>
  <p><b>A template made by w3.css for photographers.</b></p>
  <p class="w3-padding-16"><button class="w3-button w3-black" onclick="myFunction()">Toggle Grid Padding</button></p>
</header>
</div>

<!-- Photo Grid -->
<div class="w3-row" id="myGrid" style="margin-bottom:128px">
  <div class="w3-third">
    <img src="/w3images/rocks.jpg" style="width:100%">
    <img src="/w3images/sound.jpg" style="width:100%">
    <img src="/w3images/woods.jpg" style="width:100%">
    <img src="/w3images/rock.jpg" style="width:100%">
    <img src="/w3images/nature.jpg" style="width:100%">
    <img src="/w3images/mist.jpg" style="width:100%">
  </div>

  <div class="w3-third">
    <img src="/w3images/coffee.jpg" style="width:100%">
    <img src="/w3images/bridge.jpg" style="width:100%">
    <img src="/w3images/notebook.jpg" style="width:100%">
    <img src="/w3images/london.jpg" style="width:100%">
    <img src="/w3images/rocks.jpg" style="width:100%">
    <img src="/w3images/avatar_g.jpg" style="width:100%">
  </div>

  <div class="w3-third">
    <img src="/w3images/mist.jpg" style="width:100%">
    <img src="/w3images/workbench.jpg" style="width:100%">
    <img src="/w3images/gondol.jpg" style="width:100%">
    <img src="/w3images/skies.jpg" style="width:100%">
    <img src="/w3images/lights.jpg" style="width:100%">
    <img src="/w3images/workshop.jpg" style="width:100%">
  </div>
</div>

<!-- End Page Content -->
</div>

<!-- Footer -->
<footer class="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge" style="margin-top:128px"> 
  <i class="fa fa-facebook-official w3-hover-opacity"></i>
  <i class="fa fa-instagram w3-hover-opacity"></i>
  <i class="fa fa-snapchat w3-hover-opacity"></i>
  <i class="fa fa-pinterest-p w3-hover-opacity"></i>
  <i class="fa fa-twitter w3-hover-opacity"></i>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
  <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-text-green">w3.css</a></p>
</footer>
 
<script>
// Toggle grid padding
function myFunction() {
  var x = document.getElementById("myGrid");
  if (x.className === "w3-row") {
    x.className = "w3-row-padding";
  } else { 
    x.className = x.className.replace("w3-row-padding", "w3-row");
  }
}

// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
</script>

</body>
</html>


<div class="panel-footer">Buy 50 mobiles and get a gift card</div>
<a href="file:///C:/Users/student/.vscode/adostar%20.html/fisrst%20navbar.html/MEDIA.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small">MEDIA</a>




<!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="C:\Users\student\.vscode\adostar .html\smiles6.jpg" alt="ueab" width="400" height="300">
            </div>
            <div class="item">
              <img src="C:\Users\student\.vscode\adostar .html\ueablogo.jpg" alt="ueab" width="400" height="300">
            </div>
            <div class="item">
              <h4>"Could I... BE any more happy with this company?"<br><span>Chandler Bing, Actor, FriendsAlot</span></h4>
            </div>
          </div>
      
          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>



logo

<div class="wrapper">
  <div class="section1">
    <div class="hide"></div>
    <div class="www A"></div>
    <div class="www B"></div>
  </div>
  <div class="section2">
    <div class="hide2"></div>
    <div class="three C"></div>
    <div class="three D"></div>
  </div>
  <p>schools</p>
  <font>TM</font>
</div>



css

.wrapper{
  margin:100px auto;
  width:100px;
  height:80px;
  border-radius:5px;
  background:#87c71d;
  position:relative;
}

.section1{
  position:absolute;
  top:19px;
  left:10px;
}

.hide{
  position:absolute;
  width:45px;
  height:10px;
  background:#87c71d;
  z-index:3;
}

.www{
  width:15px;
  height:15px;
  border-top:none;
   border:5px solid #fff;
  border-radius:15px;
  position:absolute;
}
 
.A{
  left:19px;  z-index:2;
}

.three{
  position:absolute;
  width:30px;
  height:30px;
  border:5px solid #fff;  
  border-radius:30px;
}

.C{
  left:50px;
  top:3px;
}

.D{
  left:50px;
  bottom:3px;
}

.hide2{
  position:absolute;
  width:19px;
  height:45px;
  background:#87c71d;
  top:20px;
  left:50px;
  z-index:1;
}

p{
  position:absolute;
  top:44px;
  left:3px;
  font-weight:bold;
  font-family:arial-bold;
  color:#ffffff;
  font-size:16px
}

font{
  font-size:9px;
  font-weight:bold;
  font-family: arial-bold;
  color:#fff;
  position:absolute;
  bottom:17px;
  left:47px;
  z-index:30;
}