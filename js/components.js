Vue.component('fesc-header', {
  template: '<header><nav class="navbar navbar-expand-md navbar-light "><a href="index.html"><img src="images/fesc_favicon_marine_50x50.png" title="Home" alt="FESC Logo"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item active"><!--<a href="index.html"><img src="images/fesc_favicon_marine_50x50.png" title="Home" alt="FESC Logo"></a>--></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="research.html" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">FESC Research</a><div class="dropdown-menu" aria-labelledby="navbarDropdown1"><a class="dropdown-item" href="research.html">By University</a><div class="dropdown-divider"></div><a class="dropdown-item" href="research.html">By Research Area</a><div class="dropdown-divider"></div><a class="dropdown-item" href="research.html">Reaserch Grants</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="education.html" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Education</a><div class="dropdown-menu" aria-labelledby="navbarDropdown2"><a class="dropdown-item" href="education.html">Energy Literacy</a><div class="dropdown-divider"></div><a class="dropdown-item" href="education.html">Free Online Resources</a><div class="dropdown-divider"></div><a class="dropdown-item" href="education.html">Engergy Educations By Discipline</a><div class="dropdown-divider"></div><a class="dropdown-item" href="education.html">Engergy Educations By Institution</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="outreach.html" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Outreach</a><div class="dropdown-menu" aria-labelledby="navbarDropdown3"><a class="dropdown-item" href="outreach.html">Energy Fact Sheets</a><div class="dropdown-divider"></div><a class="dropdown-item" href="outreach.html">Energy Video Clips</a><div class="dropdown-divider"></div><a class="dropdown-item" href="outreach.html">FESC Research Areas and Expertise</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle " href="aboutus.html" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> About Us</a><div class="dropdown-menu" aria-labelledby="navbarDropdown4"><a class="dropdown-item" href="aboutus.html">Contact Us</a><div class="dropdown-divider"></div><a class="dropdown-item" href="aboutus.html">FESC Member Universities</a><div class="dropdown-divider"></div><a class="dropdown-item" href="aboutus.html">Advisory Board</a></div></li></ul><form class="form-inline my-2 my-lg-0"><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></form></div></nav></header><br>'
})

Vue.component ('fesc-newsletter', {
  template:'<section class="text-center jumbotron p-3 p-md-5 text-white bg-dark newsletter"><h2>Get the latest Energy News and Opportunities.</h2><div class="d-flex justify-content-center"><form class="form-inline my-2 my-lg-0 "><input class="form-control mr-sm-2" type="email" placeholder="email@mail.com" aria-label="email"><button class="btn btn-outline-light my-2 my-sm-0" type="submit">Newsletter Signup</button></form></div></section><hr>'
})

Vue.component('fesc-footer', {
  template:'<footer><div class="row"><div class="col-sm-4"><!--Bottom Nav--><ul class="navbar-nav footer mr-auto"><li><h4>Site Navigation</h4></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="research.html" id="navbarDropdown5" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">FESC Research</a><div class="dropdown-menu" aria-labelledby="navbarDropdown5"><a class="dropdown-item" href="research.html">By University</a><div class="dropdown-divider"></div><a class="dropdown-item" href="research.html">By Research Area</a><div class="dropdown-divider"></div><a class="dropdown-item" href="research.html">Reaserch Grants</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="education.html" id="navbarDropdown6" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Education</a><div class="dropdown-menu" aria-labelledby="navbarDropdown6"><a class="dropdown-item" href="education.html">Energy Literacy</a><div class="dropdown-divider"></div><a class="dropdown-item" href="education.html">Free Online Resources</a><div class="dropdown-divider"></div><a class="dropdown-item" href="education.html">Engergy Educations By Discipline</a><div class="dropdown-divider"></div><a class="dropdown-item" href="education.html">Engergy Educations By Institution</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="outreach.html" id="navbarDropdown7" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Outreach</a><div class="dropdown-menu" aria-labelledby="navbarDropdown7"><a class="dropdown-item" href="outreach.html">Energy Fact Sheets</a><div class="dropdown-divider"></div><a class="dropdown-item" href="outreach.html">Energy Video Clips</a><div class="dropdown-divider"></div><a class="dropdown-item" href="outreach.html">FESC Research Areas and Expertise</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="aboutus.html" id="navbarDropdown8" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> About Us</a><div class="dropdown-menu" aria-labelledby="navbarDropdown8"><a class="dropdown-item" href="aboutus.html">Contact Us</a><div class="dropdown-divider"></div><a class="dropdown-item" href="aboutus.html">FESC Member Universities</a><div class="dropdown-divider"></div><a class="dropdown-item" href="aboutus.html">Advisory Board</a></div></li></ul></div><!--External Links--><div class="col-sm-5"><ul><li><h4>FESC Universities</h4></li><li><a href= "http://www.ufl.edu" target="_blank">University of Florida</a></li><li><a href= "http://www.fsu.edu" target="_blank">Florida State University</a></li><li><a href= "http://www.ucf.edu" target="_blank">University of Central Florida</a></li><li><a href= "http://www.usf.edu" target="_blank">University of South Florida</a></li><li><a href= "http://www.famu.edu" target="_blank">Florida Agricultural and Mechanical University</a></li><li><a href= "http://www.fau.edu" target="_blank">Florida Atlantic University</a></li><li><a href= "http://www.fgcu.edu" target="_blank">Florida Gulf Coast University</a></li><li><a href= "http://www.fiu.edu" target="_blank">Florida International University</a></li><li><a href= "http://www.ncf.edu" target="_blank">New College of Florida</a></li><li><a href= "http://www.unf.edu" target="_blank">University of North Florida</a></li><li><a href= "http://www.uwf.edu" target="_blank">University of West Florida</a></li><li><a href= "https://floridapolytechnic.org/" target="_blank">Florida Polytechnic University</a></li></ul></div><div class="col-sm-3"><ul><li><h4><a href= "mailto:someone@example.com?Subject=FESC%20Contact%20Us" target="_blank">Contact Us</a></h4></li><li><a href="aboutus.html" target="">Directions</a></li><li>Telephone: 352 294 2027</li><li>272 Grinter Hall</li><li>P.O. Box 115500</li><li>Gainesville, FL 32611-55007</li></ul></div></div><!--Social Media Handles--><div class="stickyfooter text-center"><p class="float-right"><a href="#">Back to top</a></p><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a><a href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a><p>Copyright &copy; 2017-2018  Florida Energy Systems Consortium. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p></div></footer>'
})


