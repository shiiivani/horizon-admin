import React from 'react'
import logoDark from "../assets/logo-dark.png"
import logoLight from "../assets/logo-light.png"
import { Airplay, Bell, ChevronsLeft, Grid, Layout, Mail, Maximize, Save, Search } from 'react-feather'

function EditProperty() {
    return (
        <div><div class="page-wrapper">

            {/* <!-- page header start --> */}
            <div class="page-main-header row">
                <div id="sidebar-toggle" class="toggle-sidebar col-auto">
                    <ChevronsLeft />
                </div>

                <div class="nav-right col p-0">
                    <ul class="header-menu">
                        <li>
                            <div class="d-md-none mobile-search">
                                <Search />
                            </div>
                            <div class="form-group search-form">
                                <input type="text" class="form-control" placeholder="Search here..." />
                            </div>
                        </li>
                        <li>
                            <a href="#!" onclick="javascript:toggleFullScreen()">
                                <Maximize />
                            </a>
                        </li>
                        <li class="onhover-dropdown">
                            <a href="javascript:void(0)">
                                <Save />
                            </a>
                            <div class="notification-dropdown onhover-show-div">
                                <div class="dropdown-title">
                                    <h6>Recent Attachments</h6>
                                    <a href="reports.html">Show all</a>
                                </div>
                                <ul>
                                    <li>
                                        <div class="media">
                                            <div class="icon-notification bg-success-light">
                                                <i class="fas fa-file-word"></i>
                                            </div>
                                            <div class="media-body">
                                                <a href="reports.html">
                                                    <h6>Doc_file.doc</h6>
                                                </a>
                                                <span>800MB</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="media">
                                            <div class="icon-notification bg-primary-light">
                                                <i class="fas fa-file-image"></i>
                                            </div>
                                            <div class="media-body">
                                                <a href="reports.html">
                                                    <h6>Apartment.jpg</h6>
                                                </a>
                                                <span>500kb</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="media">
                                            <div class="icon-notification bg-warning-light">
                                                <i class="fas fa-file-pdf"></i>
                                            </div>
                                            <div class="media-body">
                                                <a href="reports.html">
                                                    <h6>villa_report.pdf</h6>
                                                </a>
                                                <span>26MB</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="onhover-dropdown notification-box">
                            <a href="javascript:void(0)">
                                <Bell />
                                <span class="label label-shadow label-pill notification-badge">3</span>
                            </a>
                            <div class="notification-dropdown onhover-show-div">
                                <div class="dropdown-title">
                                    <h6>Notifications</h6>
                                    <a href="favourites.html">Show all</a>
                                </div>
                                <ul>
                                    <li>
                                        <div class="media">
                                            <div class="icon-notification bg-primary-light">
                                                <i class="fab fa-xbox"></i>
                                            </div>
                                            <div class="media-body">
                                                <h6>Item damaged</h6>
                                                <span>8 hours ago, Tadawis 24</span>
                                                <p class="mb-0">"the table is broken:("</p>
                                                <ul class="user-group">
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F4.jpg?alt=media&token=97859f35-cb19-49dc-999d-8f4e1b196364" class="img-fluid" alt="" />
                                                        </a>
                                                    </li>
                                                    <li class="reply">
                                                        <a href="javascript:void(0)">
                                                            Reply
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="media">
                                            <div class="icon-notification bg-success-light">
                                                <i class="fas fa-file-invoice-dollar"></i>
                                            </div>
                                            <div class="media-body">
                                                <h6>Payment received</h6>
                                                <span>2 hours ago, Bracka 15</span>
                                                <ul class="user-group">
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F1.jpg?alt=media&token=34ed5412-8981-48fa-95d6-2f233d3ce309" class="img-fluid" alt="" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F2.jpg?alt=media&token=ccc13150-2b6a-4b39-aa7b-e2760eea4632" class="img-fluid" alt="" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F3.jpg?alt=media&token=e2c70d97-a79f-41d9-9e92-7aa3c0accbbc" class="img-fluid" alt="" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="media">
                                            <div class="icon-notification bg-warning-light">
                                                <i class="fas fa-comment-dots"></i>
                                            </div>
                                            <div class="media-body">
                                                <h6>New inquiry</h6>
                                                <span>1 Days ago, Krowada 7</span>
                                                <p class="mb-0">"is the villa still available?"</p>
                                                <ul class="user-group">
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F2.jpg?alt=media&token=ccc13150-2b6a-4b39-aa7b-e2760eea4632" class="img-fluid" alt="" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F3.jpg?alt=media&token=e2c70d97-a79f-41d9-9e92-7aa3c0accbbc" class="img-fluid" alt="" />
                                                        </a>
                                                    </li>
                                                    <li class="reply">
                                                        <a href="javascript:void(0)">
                                                            Reply
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="onhover-dropdown">
                            <a href="javascript:void(0)">
                                <Mail />
                            </a>
                            <div class="notification-dropdown chat-dropdown onhover-show-div">
                                <div class="dropdown-title">
                                    <h6>Messages</h6>
                                    <a href="user-profile.html">View all</a>
                                </div>
                                <ul>
                                    <li>
                                        <div class="media">
                                            <div class="chat-user">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F1.jpg?alt=media&token=a6cf07b3-1151-4f23-8047-84ba1aff030a" class="img-fluid" alt="" />
                                            </div>
                                            <div class="media-body">
                                                <a href="user-profile.html">
                                                    <h6>Bob Frapples</h6>
                                                </a>
                                                <span>Template Represents simply...</span>
                                            </div>
                                            <div class="status online">online</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="media">
                                            <div class="chat-user">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F3.png?alt=media&token=a43e2409-29f3-481a-a1cd-0923f60b69de" class="img-fluid" alt="" />
                                            </div>
                                            <div class="media-body">
                                                <a href="user-profile.html">
                                                    <h6>Greta Life</h6>
                                                </a>
                                                <span>Template Represents simply...</span>
                                            </div>
                                            <div class="status away">Away</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="media">
                                            <div class="chat-user">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F4.jpg?alt=media&token=97859f35-cb19-49dc-999d-8f4e1b196364" class="img-fluid" alt="" />
                                            </div>
                                            <div class="media-body">
                                                <a href="user-profile.html">
                                                    <h6>Greta Life</h6>
                                                </a>
                                                <span>Template Represents simply...</span>
                                            </div>
                                            <div class="status online">online</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="media">
                                            <div class="chat-user">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F7.jpg?alt=media&token=643bb5a5-496d-4e33-a86b-cf07c4b20225" class="img-fluid" alt="" />
                                            </div>
                                            <div class="media-body">
                                                <a href="user-profile.html">
                                                    <h6>Greta Life</h6>
                                                </a>
                                                <span>Template Represents simply...</span>
                                            </div>
                                            <div class="status busy">Busy</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="profile-avatar onhover-dropdown">
                            <div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F3.png?alt=media&token=a43e2409-29f3-481a-a1cd-0923f60b69de" class="img-fluid" alt="" />
                            </div>
                            <ul class="profile-dropdown onhover-show-div">
                                <li><a href="user-profile.html"><span>Account </span><i data-feather="user"></i></a></li>
                                <li><a href="listing.html"><span>Listing</span><i data-feather="file-text"></i></a></li>
                                <li><a href="login.html"><span>Log in</span><i data-feather="log-in"></i></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <!-- page header end --> */}
            <div class="page-body-wrapper">

                {/* <!-- page sidebar start --> */}
                <div class="page-sidebar">
                    <div class="logo-wrap">
                        <a href="index.html">
                            <img src={logoDark} class="img-fluid for-light" alt="" />
                            <img src={logoLight} class="img-fluid for-dark" alt="" />
                        </a>
                        <div class="back-btn d-lg-none d-inline-block">
                            <i data-feather="chevrons-left"></i>
                        </div>
                    </div>
                    <div class="main-sidebar">
                        <div class="user-profile">
                            <div class="media">
                                <div class="change-pic">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F3.png?alt=media&token=a43e2409-29f3-481a-a1cd-0923f60b69de" class="img-fluid" alt="" />
                                </div>
                                <div class="media-body">
                                    <a href="user-profile.html"><h6>Zack Lee</h6></a>
                                    <span class="font-roboto">zackle@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div id="mainsidebar">
                            <ul class="sidebar-menu custom-scrollbar">
                                <li class="sidebar-item">
                                    <a href="/" class="sidebar-link only-link ">
                                        <Airplay />
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                                <li class="sidebar-item">
                                    <a href="/admin-panel" class="sidebar-link">
                                        <Grid />
                                        <span>Add Property</span>
                                    </a>
                                </li>
                                {/* <ul class="nav-submenu menu-content">
                                <li>
                                    <a href="add-property.html">
                                        <i data-feather="chevrons-right"></i>
                                        add property
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-property.html">
                                        <i data-feather="chevrons-right"></i>
                                        edit property
                                    </a>
                                </li>
                                <li>
                                    <a href="listing.html">
                                        <i data-feather="chevrons-right"></i>
                                        property list
                                    </a>
                                </li>
                                <li>
                                    <a href="favourites.html">
                                        <i data-feather="chevrons-right"></i>
                                        Favourites
                                    </a>
                                </li>
                                
                            </ul> */}

                                <li class="sidebar-item">
                                    <a href="/property-list" class="sidebar-link">
                                        <Layout />
                                        <span>Property List</span>
                                    </a>
                                </li>
                                {/* <ul class="nav-submenu menu-content">
                                <li>
                                    <a href="user-profile.html">
                                        <i data-feather="chevrons-right"></i>
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="add-user.html">
                                        <i data-feather="chevrons-right"></i>
                                        Add user
                                    </a>
                                </li>
                                <li>
                                    <a href="add-user-wizard.html">
                                        <i data-feather="chevrons-right"></i>
                                        Add user wizard <span class="label label-shadow ms-1">new</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-user.html">
                                        <i data-feather="chevrons-right"></i>
                                        Edit user
                                    </a>
                                </li>
                                <li>
                                    <a href="all-users.html">
                                        <i data-feather="chevrons-right"></i>
                                        All users
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-item">
                            <a href="javascript:void(0)" class="sidebar-link">
                                <i data-feather="user-plus"></i>
                                <span>Agents</span>
                            </a>
                            <ul class="nav-submenu menu-content">
                                <li>
                                    <a href="agent-profile.html">
                                        <i data-feather="chevrons-right"></i>
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="add-agent.html">
                                        <i data-feather="chevrons-right"></i>
                                        Add agent
                                    </a>
                                </li>
                                <li>
                                    <a href="add-agent-wizard.html">
                                        <i data-feather="chevrons-right"></i>
                                        Add agent wizard <span class="label label-shadow ms-1">new</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-agent.html">
                                        <i data-feather="chevrons-right"></i>
                                        Edit agent
                                    </a>
                                </li>
                                <li>
                                    <a href="all-agents.html">
                                        <i data-feather="chevrons-right"></i>
                                        All agents
                                    </a>
                                </li>
                                <li>
                                    <a href="agent-invoice.html">
                                        <i data-feather="chevrons-right"></i>
                                        Invoice
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-item">
                            <a href="map.html" class="sidebar-link only-link">
                                <i data-feather="map-pin"></i>
                                <span>Map</span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a href="javascript:void(0)" class="sidebar-link">
                                <i data-feather="layout"></i>
                                <span>Types</span>
                            </a>
                            <ul class="nav-submenu menu-content">
                                <li>
                                    <a href="family-house.html">
                                        <i data-feather="chevrons-right"></i>
                                        Family House
                                    </a>
                                </li>
                                <li>
                                    <a href="cottage.html">
                                        <i data-feather="chevrons-right"></i>
                                        Cottage
                                    </a>
                                </li>
                                <li>
                                    <a href="apartment.html">
                                        <i data-feather="chevrons-right"></i>
                                        Apartment
                                    </a>
                                </li>
                                <li>
                                    <a href="condominium.html">
                                        <i data-feather="chevrons-right"></i>
                                        Condominium
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-item">
                            <a href="reports.html" class="sidebar-link only-link">
                                <i data-feather="bar-chart-2"></i>
                                <span>Reports</span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a href="payments.html" class="sidebar-link only-link">
                                <i data-feather="credit-card"></i>
                                <span>Payments</span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a href="javascript:void(0)" class="sidebar-link">
                                <i data-feather="unlock"></i>
                                <span>Authentication</span>
                            </a>
                            <ul class="nav-submenu menu-content">
                                <li>
                                    <a href="login.html">
                                        <i data-feather="chevrons-right"></i>
                                        Log in
                                    </a>
                                </li>
                                <li>
                                    <a href="signup.html">
                                        <i data-feather="chevrons-right"></i>
                                        sign up
                                    </a>
                                </li>
                                <li>
                                    <a href="404.html">
                                        <i data-feather="chevrons-right"></i>
                                        404
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="upgrade-box">
                                <img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/1.svg" class="img-fluid" alt=""/>
                                <h6>Need Help</h6>
                                <a href="https://pixelstrap.freshdesk.com/support/home" target="_blank" class="p-0 m-0">
                                    <span class="d-block">Raise ticket at "support@pixelstrap.com"</span>
                                </a>
                                <button type="button" onclick=" window.open('https://themeforest.net/user/pixelstrap/portfolio', '_blank');" class="btn btn-pill btn-gradient color-4 btn-sm mt-2 fw-bold">Buy Now</button>
                            </div>
                        </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- page sidebar end --> */}

                <div class="page-body">

                    {/* <!-- Container-fluid start --> */}
                    <div class="container-fluid">
                        <div class="page-header">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="page-header-left">
                                        <h3>Edit property
                                            <small>Welcome to admin panel</small>
                                        </h3>
                                    </div>
                                </div>
                                <div class="col-sm-6">

                                    {/* <!-- Breadcrumb start --> */}
                                    <ol class="breadcrumb pull-right">
                                        <li class="breadcrumb-item">
                                            <a href="index.html">
                                                <i class="fa fa-home"></i>
                                            </a>
                                        </li>
                                        <li class="breadcrumb-item active">My properties</li>
                                    </ol>
                                    {/* <!-- Breadcrumb end --> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Container-fluid end --> */}

                    {/* <!-- Container-fluid start --> */}
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-header pb-0">
                                        <h5>Edit property details</h5>
                                    </div>
                                    <div class="card-body admin-form">
                                        <form class="row gx-3">
                                            <div class="form-group col-sm-4">
                                                <label>Property Type</label>
                                                <input type="text" class="form-control" value="villa" required="" />
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <label>Property Status</label>
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>For Rent</span> <i class="fas fa-angle-down"></i></span>
                                                    <div class="dropdown-menu text-start">
                                                        <a class="dropdown-item" href="javascript:void(0)">For Rent</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">For Sale</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <label>Property Price</label>
                                                <input type="text" class="form-control" value="₹3000" required="" />
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <label>Max Rooms</label>
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>3</span> <i class="fas fa-angle-down"></i></span>
                                                    <div class="dropdown-menu text-start">
                                                        <a class="dropdown-item" href="javascript:void(0)">1</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">2</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">3</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">4</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">5</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">6</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <label>Beds</label>
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>2</span> <i class="fas fa-angle-down"></i></span>
                                                    <div class="dropdown-menu text-start">
                                                        <a class="dropdown-item" href="javascript:void(0)">1</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">2</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">3</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">4</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">5</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">6</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <label>Baths</label>
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>1</span> <i class="fas fa-angle-down"></i></span>
                                                    <div class="dropdown-menu text-start">
                                                        <a class="dropdown-item" href="javascript:void(0)">1</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">2</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">3</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">4</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">5</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">6</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <label>Area</label>
                                                <input type="text" class="form-control" value="85 sq ft" />
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <label>Price</label>
                                                <input type="text" class="form-control" value="₹3000" />
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <label>Agencies</label>
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle font-rubik"
                                                        data-bs-toggle="dropdown"><span>Premiere</span> <i
                                                            class="fas fa-angle-down"></i></span>
                                                    <div class="dropdown-menu text-start">
                                                        <a class="dropdown-item" href="javascript:void(0)">Blue Sky</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">Zephyr</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">Premiere</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-12">
                                                <label>Description</label>
                                                <textarea class="form-control" rows="4">“Air conditioning unit, new furnace, all appliances included. Basement walks out to fenced backyard. Huge deck in back. Lots of updates.”</textarea>
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Address</label>
                                                <input type="text" class="form-control" value="Mina Road, Bur Dubai, Dubai, United Arab Emirates" />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Zip code</label>
                                                <input type="text" class="form-control" value="39702" />
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <label>Any Country</label>
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>Austria</span> <i class="fas fa-angle-down"></i></span>
                                                    <div class="dropdown-menu text-start">
                                                        <a class="dropdown-item" href="javascript:void(0)">Austria</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">Brazil</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">New york</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">USA</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <label>Any City</label>
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>Amreli</span> <i class="fas fa-angle-down"></i></span>
                                                    <div class="dropdown-menu text-start">
                                                        <a class="dropdown-item" href="javascript:void(0)">Gandhinagar</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">Bharuch</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">Amreli</a>
                                                        <a class="dropdown-item" href="javascript:void(0)">Ahmadabad</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <label>Landmark</label>
                                                <input type="text" class="form-control" value="Bur Dubai, Dubai" />
                                            </div>
                                        </form>
                                        <div class="dropzone-admin">
                                            <label>Media</label>
                                            <form class="dropzone" id="multiFileUpload" action="https://themes.pixelstrap.com/upload.php">
                                                <div class="dz-message needsclick"><i class="fas fa-cloud-upload-alt"></i>
                                                    <h6>Drop files here or click to upload.</h6>
                                                </div>
                                            </form>
                                        </div>
                                        <form class="row gx-3">
                                            {/* <div class="form-group col-sm-12">
                                        <label>video (mp4)</label>
                                        <input type="text" class="form-control" value="https://youtu.be/ATSgwZXOuUo12"/>
                                    </div> */}
                                            <div class="form-group col-sm-12 mb-0">
                                                <label>Additional features</label>
                                                <div class="additional-checkbox">
                                                    <label for="chk-ani">
                                                        <input class="checkbox_animated color-4" id="chk-ani" type="checkbox" /> Emergency Exit
                                                    </label>
                                                    <label for="chk-ani1">
                                                        <input class="checkbox_animated color-4" id="chk-ani1" type="checkbox" /> CCTV
                                                    </label>
                                                    <label for="chk-ani2">
                                                        <input class="checkbox_animated color-4" id="chk-ani2" type="checkbox" checked /> Free Wi-Fi
                                                    </label>
                                                    <label for="chk-ani3">
                                                        <input class="checkbox_animated color-4" id="chk-ani3" type="checkbox" />  Free Parking In The Area
                                                    </label>
                                                    <label for="chk-ani4">
                                                        <input class="checkbox_animated color-4" id="chk-ani4" type="checkbox" />  Air Conditioning
                                                    </label>
                                                    <label for="chk-ani5">
                                                        <input class="checkbox_animated color-4" id="chk-ani5" type="checkbox" />  Security Guard
                                                    </label>
                                                    <label for="chk-ani6">
                                                        <input class="checkbox_animated color-4" id="chk-ani6" type="checkbox" checked />  Terrace
                                                    </label>
                                                    <label for="chk-ani7">
                                                        <input class="checkbox_animated color-4" id="chk-ani7" type="checkbox" />  Laundry Service
                                                    </label>
                                                    <label for="chk-ani8">
                                                        <input class="checkbox_animated color-4" id="chk-ani8" type="checkbox" />  Elevator Lift
                                                    </label>
                                                    <label for="chk-ani9">
                                                        <input class="checkbox_animated color-4" id="chk-ani9" type="checkbox" checked />  Balcony
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-btn col-sm-12">
                                                <button type="button" class="btn btn-pill btn-gradient color-4">Save</button>
                                                <button type="button" class="btn btn-pill btn-dashed color-4">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Container-fluid end --> */}

                </div>

                {/* <!-- footer start --> */}
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 footer-copyright">
                                <p class="mb-0">Copyright 2022 © Crowdpe All rights reserved.</p>
                            </div>
                            <div class="col-md-6">
                                <p class="float-end mb-0">Developed with  <i class="fa fa-heart font-danger"></i></p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- footer end --> */}
            </div>
        </div>

            {/* <!-- tap to top start -->
<div class="tap-top">
    <div>
        <i class="fas fa-arrow-up"></i>
    </div>
</div>
<!-- tap to top end -->

<!-- customizer start -->
<div class="customizer-wrap">
    <div class="customizer-links">
        <i data-feather="settings"></i>
    </div>
    <div class="customizer-contain custom-scrollbar">
        <div class="setting-back">
            <i data-feather="x"></i>
        </div>
        <div class="layouts-settings">
            <div class="customizer-title">
                <h6 class="color-4">Layout type</h6>
            </div>
            <div class="option-setting">
                <span>Light</span>
                <label class="switch">
                    <input type="checkbox" name="chk1" value="option" class="setting-check"/><span class="switch-state"></span>
                </label>
                <span>Dark</span>
            </div>
        </div>
        <div class="layouts-settings">
            <div class="customizer-title">
                <h6 class="color-4">Layout Direction</h6>
            </div>
            <div class="option-setting">
                <span>LTR</span>
                <label class="switch">
                    <input type="checkbox" name="chk2" value="option" class="setting-check1"/><span class="switch-state"></span>
                </label>
                <span>RTL</span>
            </div>
        </div>
        <div class="layouts-settings">
            <div class="customizer-title">
                <h6 class="color-4">Unlimited Color</h6>
            </div>
            <div class="option-setting unlimited-color-layout">
                <div class="form-group">
                    <label for="ColorPicker6">color 6</label>
                    <input id="ColorPicker6" type="color" value="#f35d43" name="Default"/>
                </div>
                <div class="form-group">
                    <label for="ColorPicker7">color 7</label>
                    <input id="ColorPicker7" type="color" value="#f34451" name="Default"/> 
                </div>
            </div>
        </div>
    </div>
</div> */}
            {/* <!-- customizer end --> */}
        </div>
    )
}

export default EditProperty