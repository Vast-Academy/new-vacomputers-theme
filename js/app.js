// Navbar items
const navbarItems = `
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
`;

// Top-left items (Email and Address)
const topLeftContent = `
    <ul class="list-style-one">
        <li><i class="fa fa-envelope"></i> <a href="mailto:info@vacomputers.com">info@vacomputers.com</a></li>
        <li><i class="fa fa-map-marker"></i> <a href="https://maps.app.goo.gl/dAuzu5yLwEQqYbMb9">VA Computers, New Bus Stand to Railway station (Majitha-143601) Distt. Amritsar</a></li>
    </ul>
`;

// Top-right items (Social Links)
const topRightContent = `
    <ul class="social-icon-one">
        <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
        <li><a href="#"><span class="fab fa-instagram"></span></a></li>
        <li><a href="#"><span class="fab fa-youtube"></span></a></li>
    </ul>
`;

// Contact list in the mobile menu
const contactListContent = `
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
`;

// Social links in the mobile menu
const socialLinksContent = `
    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
`;

// Injecting content into the HTML
document.getElementById('navigation').innerHTML = navbarItems;
document.getElementById('top-left').innerHTML = topLeftContent;
document.getElementById('top-right').innerHTML = topRightContent;
document.getElementById('contact-list').innerHTML = contactListContent;
document.getElementById('social-links').innerHTML = socialLinksContent;



document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
    <footer class="main-footer">
        <div class="bg-pattern"></div>
        <div class="auto-container">
            <div class="subscribe-form">
                <div class="title-column">
                    <h5 class="title"><i class="icon flaticon-open-envelope"></i> Subscribe now to get <br>latest updates</h5>
                </div>
                <div class="form-column">
                    <form method="post" action="#">
                        <div class="form-group">
                            <input type="email" name="email" class="email" placeholder="Email Address" required>
                            <button type="button" class="theme-btn"><i class="fa fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="widgets-section">
            <div class="auto-container">
                <div class="row">

                    <div class="footer-column col-xl-3 col-lg-12 col-md-6">
                        <div class="footer-widget about-widget">
                            <div class="logo"><a href="index.html"><img src="images/logo.png" alt=""></a></div>
                            <div class="text">At VA Computers, we deliver custom web solutions that prioritize quality and exclusivity. Our unique approach ensures your business stands out with tailor-made websites and applications designed to enhance growth and offer real value for money.</div>
                            <ul class="social-icon-two">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-column col-xl-3 col-lg-4">
                        <div class="footer-widget links-widget">
                            <h6 class="widget-title">Explore</h6>
                            <ul class="user-links">
                                <li><a href="#">About Company</a></li>
                                <li><a href="#">Meet the Team</a></li>
                                <li><a href="#">Our Projects</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-column col-xl-3 col-lg-4 col-md-6">
                        <div class="footer-widget gallery-widget">
                            <h6 class="widget-title">Portfolio</h6>
                            <div class="widget-content">
                                <div class="outer clearfix">
                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-1.jpg" alt=""></a>
                                    </figure>
                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-2.jpg" alt=""></a>
                                    </figure>
                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-3.jpg" alt=""></a>
                                    </figure>
                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-4.jpg" alt=""></a>
                                    </figure>
                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-5.jpg" alt=""></a>
                                    </figure>
                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-6.jpg" alt=""></a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-column col-xl-3 col-lg-4">
                        <div class="footer-widget contacts-widget">
                            <h6 class="widget-title">Contact</h6>
                            <ul class="contact-info">
                                <li><i class="fa fa-map-marker"></i><a href="https://maps.app.goo.gl/dAuzu5yLwEQqYbMb9"> VA Computers, New Bus Stand to Railway station (Majitha -143601) Distt. Amritsar</a></li>
                                <li><i class="fa fa-envelope"></i> <a href="mailto:info@vacomputers.com">info@vacomputers.com</a></li>
                                <li><i class="fa fa-phone-square"></i> <a href="tel:+9356393094">+91 93563-93094</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="copyright-text">&copy; Copyright 2010 to 2024 <a href="https://www.vacomputers.com/" style="text-decoration: underline; color: white;">VA Computers</a> | All Rights Reserved</div>
                </div>
            </div>
        </div>
    </footer>
    `;

    // Append the footer to the body or a specific container
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});

