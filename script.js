document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
    <header class="main-header header-style-one">
        <div class="header-top">
            <div class="inner-container">
                <div class="top-left">
                    <ul class="list-style-one">
                        <li><i class="fa fa-envelope"></i> <a href="mailto:info@vacomputers.com">info@vacomputers.com</a></li>
                        <li><i class="fa fa-map-marker"></i> <a href="https://maps.app.goo.gl/dAuzu5yLwEQqYbMb9">VA Computers, New Bus Stand to Railway station  (Majitha-143601) Distt. Amritsar</a></li>
                    </ul>
                </div>
                <div class="top-right">
                    <ul class="social-icon-one">
                        <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                        <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                        <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="header-lower">
            <div class="container-fluid">
                <div class="main-box">
                    <div class="logo-box">
                        <div class="logo"><a href="index.html"><img src="images/logo.png" alt="Tronis" title="Tronis"></a></div>
                    </div>

                    <div class="nav-outer">
                        <nav class="nav main-menu">
                            <ul class="navigation">
                                <li><a href="../">Home</a></li>
                                <li><a href="../projects/">Projects</a></li>
                                <li class="dropdown"><a href="#">Services</a>
                                    <ul>
                                        <li><a href="../web-development/">Web Development</a></li>
                                        <li><a href="../software-development/">Software Development</a></li>
                                        <li><a href="../digital-marketing/">Digital Marketing</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="../contact-us/">Get in Touch</a></li>
                                <li><a href="../faq/">FAQ</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div class="outer-box">
                        <a href="tel:+9356393094" class="info-btn">
                            <i class="icon fa fa-phone"></i>
                            <small>Call Anytime</small>+91 93563-93094
                        </a>

                        <div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <nav class="menu-box">
                <div class="upper-box">
                    <div class="nav-logo"><a href="../"><img src="images/logo-2.png" alt="" title=""></a></div>
                    <div class="close-btn"><i class="icon fa fa-times"></i></div>
                </div>
                <ul class="navigation clearfix"></ul>
                <ul class="contact-list-one">
                    <li>
                        <div class="contact-info-box">
                            <i class="icon lnr-icon-phone-handset"></i>
                            <span class="title">Call Now</span>
                            <a href="tel:+9356393094">+91 93563-93094</a>
                        </div>
                    </li>
                    <li>
                        <div class="contact-info-box">
                            <span class="icon lnr-icon-envelope1"></span>
                            <span class="title">Send Email</span>
                            <a href="mailto:info@vacomputers.com">info@vacomputers.com</a>
                        </div>
                    </li>
                    <li>
                        <div class="contact-info-box">
                            <span class="icon lnr-icon-clock"></span>
                            <span class="title">Opening Hours</span>
                            Mon - Sat 9:00 A.M to 7:00 P.M <br> Sunday - CLOSED
                        </div>
                    </li>
                </ul>
                <ul class="social-links">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                </ul>
            </nav>
        </div>

        <div class="sticky-header">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="logo">
                        <a href="index.html"><img src="images/logo-2.png" alt="" title=""></a>
                    </div>
                    <div class="nav-outer">
                        <nav class="main-menu">
                            <div class="navbar-collapse show collapse clearfix">
                                <ul class="navigation clearfix"></ul>
                            </div>
                        </nav>
                        <div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    `;

    // Append the header to the body or a specific container
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
