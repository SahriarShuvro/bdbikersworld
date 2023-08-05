document.getElementById('headerArea').innerHTML = ` 

<div class="main-menu">
            <!-------Logo and Serch------>
            <div class="top-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="logo">
                                <a href="index.html"><img src="assets/frontend/images/logo-(4).png" alt=""></a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <form action="https://bdbikersworld.com/bike-by-search" method="GET">
                                <div class="input-group">
                                    <input type="text" required name="search_name" value="" class="form-control contact-form-text" placeholder="Search Bikes or Scooters eg. MT-15, Activa 5G" aria-label="" aria-describedby="basic-addon1">
                                    <div class="input-group-append">
                                        <button class=" btn btn-outline-danger" type="submit"><i class="fa fa-search px-3" aria-hidden="true" style="font-size: 20px;"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-3">
                            <div class="social-icon text-right mb-1" >
                                <ul>
                                    <li><a class="btn" href="https://www.facebook.com/BikersWorldBangladesh/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a class="btn" href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
                                    <li><a class="btn" href="javascript:void(0)"><i class="fab fa-youtube"></i></a></li>
                                    <li><a class="btn" href="javascript:void(0)"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light " id="main_navbar">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars-staggered"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                                                    <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    BIKES
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                            <li><a class="dropdown-item" href="bike-by-type/1/all.html">Sports Bikes</a></li>
                                                                            <li><a class="dropdown-item" href="bike-by-type/2/all.html">Scooter</a></li>
                                                                            <li><a class="dropdown-item" href="bike-by-type/3/all.html">Commuter Bikes</a></li>
                                                                            <li><a class="dropdown-item" href="bike-by-type/4/all.html">Cruiser Bikes</a></li>
                                                                            <li><a class="dropdown-item" href="bike-by-type/5/all.html">Electric Bikes</a></li>
                                                                            <li><a class="dropdown-item" href="bike-by-type/6/all.html">Dirt Bikes</a></li>
                                                                            <li><a class="dropdown-item" href="bike-by-type/7/all.html">Naked Bikes</a></li>
                                        <!--<li><a class="dropdown-item" href="">Used </a></li>-->
                                </ul>
                            </li>
                                                                            <li class="nav-item">
                            <a class="nav-link" href="all-brands.html">Brands</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="offer-bike.html">OFFERS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="compare-bike.html">Compare</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="blog-list.html">Blog</a>
                        </li>
<!--                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                NEWS & REVIEWS
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="">News</a></li>
                            </ul>
                        </li>-->

                        <li class="nav-item">
                            <a class="nav-link" href="review-list.html">WRITE A REVIEW</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
`