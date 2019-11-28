<?php require_once RUTA_APP . '/views/inc/headerTablero.php'; ?>

<!--<div class="container-fluid mt-0 mb-5">

  <!-- Section 
  <section class="bg-primary z-depth-1">

    <!-- Modal 
    <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe id="player" class="embed-responsive-item" src="https://www.youtube.com/embed/7MUISDJ5ZZ4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="row no-gutters">

      <div class="col-lg-6 order-md-2">
        <div class="view">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/img%20(152).jpg" alt="Video title">
          <div class="mask flex-center rgba-black-light">
            <a id="play" class="btn-floating btn-danger btn-lg" data-toggle="modal" data-target="#modal1"><i class="fas fa-play"></i></a>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mx-1000 d-flex align-items-center text-white">
        <div class="px-4 py-4 py-lg-0">
          <h3 class="font-weight-normal mb-4">Give a Fresh Design to Your MDB</h3>
          <p class="mb-0">Fresh fellow even the whole is work outcome them. They original on mountains, drew the
            support time. The of to graduate. Into to is the to she at return understand every in there transmitting
            you've he the was and in finger.</p>
        </div>
      </div>

    </div>
    
  </section>
  <!-- Section 

</div>-->
    <div class="bg-primary">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">        
                <div class="align-items-center text-center text-white">
                    <div class="row my-5">
                    </div>
                    <div class="row my-5">
                    </div>
                    <div class="row my-5">
                    </div>
                    <div class="row my-5">
                    </div>
                    <div class="row my-5">
                    </div>
                    <div class="row my-4">
                    </div>
                    <div class="">
                        <h2>TURNO</h2>
                        <h1 id="turno"></h1>
                        <div class="row my-2">
                        </div>
                        <h2>PACIENTE</h2>
                        <h1 id="paciente"></h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">                
                    <!--<iframe id="player" class="embed-responsive-item" height="50%" src="https://www.youtube.com/embed/7MUISDJ5ZZ4?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>-->
                <video width="100%" height="100%" controls autoplay loop>
                    <source src="<?php echo RUTA_URL ?>/public/video/Stuber.2019.1080p.BluRay.LATiNO.mp4" type="video/mp4">
                    Tu navegador no soporta la etiqueta HTML5 video.
                </video>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">
  <!--Indicators-->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-1z" data-slide-to="1"></li>
    <li data-target="#carousel-example-1z" data-slide-to="2"></li>
  </ol>
  <!--/.Indicators-->
  <!--Slides-->
  <div class="carousel-inner" role="listbox">
    <!--First slide-->
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
        alt="First slide">
    </div>
    <!--/First slide-->
    <!--Second slide-->
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
        alt="Second slide">
    </div>
    <!--/Second slide-->
    <!--Third slide-->
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
        alt="Third slide">
    </div>
    <!--/Third slide-->
  </div>
  <!--/.Slides-->
  <!--Controls-->
  <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <!--/.Controls-->
</div><!--<img class="img-fluid" src="https://sistemasolar.online/wp-content/uploads/el-cosmos-el-conjunto-de-todo-lo-creado.jpg">-->  
            </div>
        </div>
    </div>
<script language="JavaScript" type="text/javascript" src="<?php echo RUTA_URL ?>/js/pages/tablero.js"></script>
<?php require_once RUTA_APP . '/views/inc/footer.php'; ?>