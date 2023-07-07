import React from 'react'
import { Airplay, Bell, ChevronsLeft, Grid, Layout, Mail, Maximize, Save, Search } from 'react-feather'
import logoDark from "../assets/logo-dark.png"
import logoLight from "../assets/logo-light.png"

function PropertyList() {
    return (
        <div>
            {/* <!-- Loader start --> */}
            <div className="loader-wrapper">
                <div className="row loader-img">
                    <div className="col-12">
                        <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Floader-2.gif?alt=media&token=88f706ef-427c-4fc3-ab28-f5fd4dd50e72" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
            {/* <!-- Loader end --> */}

            <div className="page-wrapper">

                {/* <!-- page header start --> */}
                <div className="page-main-header row">
                    <div id="sidebar-toggle" className="toggle-sidebar col-auto">
                        <ChevronsLeft />
                    </div>

                    <div className="nav-right col p-0">
                        <ul className="header-menu">
                            <li>
                                <div className="d-md-none mobile-search">
                                    <Search />
                                </div>
                                <div className="form-group search-form">
                                    <input type="text" className="form-control" placeholder="Search here..." />
                                </div>
                            </li>
                            <li>
                                <a href="#!" onclick="javascript:toggleFullScreen()">
                                    <Maximize />
                                </a>
                            </li>
                            <li className="onhover-dropdown">
                                <a href="javascript:void(0)">
                                    <Save />
                                </a>
                                <div className="notification-dropdown onhover-show-div">
                                    <div className="dropdown-title">
                                        <h6>Recent Attachments</h6>
                                        <a href="reports.html">Show all</a>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="media">
                                                <div className="icon-notification bg-success-light">
                                                    <i className="fas fa-file-word"></i>
                                                </div>
                                                <div className="media-body">
                                                    <a href="reports.html">
                                                        <h6>Doc_file.doc</h6>
                                                    </a>
                                                    <span>800MB</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="icon-notification bg-primary-light">
                                                    <i className="fas fa-file-image"></i>
                                                </div>
                                                <div className="media-body">
                                                    <a href="reports.html">
                                                        <h6>Apartment.jpg</h6>
                                                    </a>
                                                    <span>500kb</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="icon-notification bg-warning-light">
                                                    <i className="fas fa-file-pdf"></i>
                                                </div>
                                                <div className="media-body">
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
                            <li className="onhover-dropdown notification-box">
                                <a href="javascript:void(0)">
                                    <Bell />
                                    <span className="label label-shadow label-pill notification-badge">3</span>
                                </a>
                                <div className="notification-dropdown onhover-show-div">
                                    <div className="dropdown-title">
                                        <h6>Notifications</h6>
                                        <a href="favourites.html">Show all</a>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="media">
                                                <div className="icon-notification bg-primary-light">
                                                    <i className="fab fa-xbox"></i>
                                                </div>
                                                <div className="media-body">
                                                    <h6>Item damaged</h6>
                                                    <span>8 hours ago, Tadawis 24</span>
                                                    <p className="mb-0">"the table is broken:("</p>
                                                    <ul className="user-group">
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F4.jpg?alt=media&token=97859f35-cb19-49dc-999d-8f4e1b196364" className="img-fluid" alt="" />
                                                            </a>
                                                        </li>
                                                        <li className="reply">
                                                            <a href="javascript:void(0)">
                                                                Reply
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="icon-notification bg-success-light">
                                                    <i className="fas fa-file-invoice-dollar"></i>
                                                </div>
                                                <div className="media-body">
                                                    <h6>Payment received</h6>
                                                    <span>2 hours ago, Bracka 15</span>
                                                    <ul className="user-group">
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F1.jpg?alt=media&token=34ed5412-8981-48fa-95d6-2f233d3ce309" className="img-fluid" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F2.jpg?alt=media&token=ccc13150-2b6a-4b39-aa7b-e2760eea4632" className="img-fluid" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F3.jpg?alt=media&token=e2c70d97-a79f-41d9-9e92-7aa3c0accbbc" className="img-fluid" alt="" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="icon-notification bg-warning-light">
                                                    <i className="fas fa-comment-dots"></i>
                                                </div>
                                                <div className="media-body">
                                                    <h6>New inquiry</h6>
                                                    <span>1 Days ago, Krowada 7</span>
                                                    <p className="mb-0">"is the villa still available?"</p>
                                                    <ul className="user-group">
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F2.jpg?alt=media&token=ccc13150-2b6a-4b39-aa7b-e2760eea4632" className="img-fluid" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F3.jpg?alt=media&token=e2c70d97-a79f-41d9-9e92-7aa3c0accbbc" className="img-fluid" alt="" />
                                                            </a>
                                                        </li>
                                                        <li className="reply">
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
                            <li className="onhover-dropdown">
                                <a href="javascript:void(0)">
                                    <Mail />
                                </a>
                                <div className="notification-dropdown chat-dropdown onhover-show-div">
                                    <div className="dropdown-title">
                                        <h6>Messages</h6>
                                        <a href="user-profile.html">View all</a>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="media">
                                                <div className="chat-user">
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F1.jpg?alt=media&token=a6cf07b3-1151-4f23-8047-84ba1aff030a" className="img-fluid" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <a href="user-profile.html">
                                                        <h6>Bob Frapples</h6>
                                                    </a>
                                                    <span>Template Represents simply...</span>
                                                </div>
                                                <div className="status online">online</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="chat-user">
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F3.png?alt=media&token=a43e2409-29f3-481a-a1cd-0923f60b69de" className="img-fluid" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <a href="user-profile.html">
                                                        <h6>Greta Life</h6>
                                                    </a>
                                                    <span>Template Represents simply...</span>
                                                </div>
                                                <div className="status away">Away</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="chat-user">
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F4.jpg?alt=media&token=97859f35-cb19-49dc-999d-8f4e1b196364" className="img-fluid" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <a href="user-profile.html">
                                                        <h6>Greta Life</h6>
                                                    </a>
                                                    <span>Template Represents simply...</span>
                                                </div>
                                                <div className="status online">online</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="chat-user">
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F7.jpg?alt=media&token=643bb5a5-496d-4e33-a86b-cf07c4b20225" className="img-fluid" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <a href="user-profile.html">
                                                        <h6>Greta Life</h6>
                                                    </a>
                                                    <span>Template Represents simply...</span>
                                                </div>
                                                <div className="status busy">Busy</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="profile-avatar onhover-dropdown">
                                <div>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F3.png?alt=media&token=a43e2409-29f3-481a-a1cd-0923f60b69de" className="img-fluid" alt="" />
                                </div>
                                <ul className="profile-dropdown onhover-show-div">
                                    <li><a href="user-profile.html"><span>Account </span><i data-feather="user"></i></a></li>
                                    <li><a href="listing.html"><span>Listing</span><i data-feather="file-text"></i></a></li>
                                    <li><a href="login.html"><span>Log in</span><i data-feather="log-in"></i></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <!-- page header end --> */}
                <div className="page-body-wrapper">

                    {/* <!-- page sidebar start --> */}
                    <div className="page-sidebar">
                        <div className="logo-wrap">
                            <a href="index.html">
                                <img src={logoDark} className="img-fluid for-light" alt="" />
                                <img src={logoLight} className="img-fluid for-dark" alt="" />
                            </a>
                            <div className="back-btn d-lg-none d-inline-block">
                                <ChevronsLeft />
                            </div>
                        </div>
                        <div className="main-sidebar">
                            <div className="user-profile">
                                <div className="media">
                                    <div className="change-pic">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F3.png?alt=media&token=a43e2409-29f3-481a-a1cd-0923f60b69de" className="img-fluid" alt="" />
                                    </div>
                                    <div className="media-body">
                                        <a href="user-profile.html"><h6>Zack Lee</h6></a>
                                        <span className="font-roboto">zackle@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div id="mainsidebar">
                                <ul className="sidebar-menu custom-scrollbar">
                                    <li className="sidebar-item">
                                        <a href="index.html" className="sidebar-link only-link">
                                            <Airplay />
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a href="/admin-panel" className="sidebar-link">
                                            <Grid />
                                            <span>Add properties</span>
                                        </a>
                                        {/* <ul className="nav-submenu menu-content">
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
                                    </li>
                                    <li className="sidebar-item">
                                        <a href="javascript:void(0)" className="sidebar-link active">
                                            <Layout />
                                            <span>Property List</span>
                                        </a>
                                    </li>
                                    {/* <ul className="nav-submenu menu-content">
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
                                            Add user wizard <span className="label label-shadow ms-1">new</span>
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
                            </li> */}
                                    {/* <li className="sidebar-item">
                                <a href="javascript:void(0)" className="sidebar-link">
                                    <i data-feather="user-plus"></i>
                                    <span>Agents</span>
                                </a>
                                <ul className="nav-submenu menu-content">
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
                                            Add agent wizard <span className="label label-shadow ms-1">new</span>
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
                            <li className="sidebar-item">
                                <a href="map.html" className="sidebar-link only-link">
                                    <i data-feather="map-pin"></i>
                                    <span>Map</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a href="javascript:void(0)" className="sidebar-link">
                                    <i data-feather="layout"></i>
                                    <span>Types</span>
                                </a>
                                <ul className="nav-submenu menu-content">
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
                            <li className="sidebar-item">
                                <a href="reports.html" className="sidebar-link only-link">
                                    <i data-feather="bar-chart-2"></i>
                                    <span>Reports</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a href="payments.html" className="sidebar-link only-link">
                                    <i data-feather="credit-card"></i>
                                    <span>Payments</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a href="javascript:void(0)" className="sidebar-link">
                                    <i data-feather="unlock"></i>
                                    <span>Authentication</span>
                                </a>
                                <ul className="nav-submenu menu-content">
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
                                <div className="upgrade-box">
                                    <img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/1.svg" className="img-fluid" alt=""/>
                                    <h6>Need Help</h6>
                                    <a href="https://pixelstrap.freshdesk.com/support/home" target="_blank" className="p-0 m-0">
                                        <span className="d-block">Raise ticket at "support@pixelstrap.com"</span>
                                    </a>
                                    <button type="button" onclick=" window.open('https://themeforest.net/user/pixelstrap/portfolio', '_blank');" className="btn btn-pill btn-gradient color-4 btn-sm mt-2 fw-bold">Buy Now</button>
                                </div>
                            </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- page sidebar end --> */}

                    <div className="page-body">

                        {/* <!-- Container-fluid start --> */}
                        <div className="container-fluid">
                            <div className="page-header">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="page-header-left">
                                            <h3>Property list
                                                <small>Welcome to admin panel</small>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">

                                        {/* <!-- Breadcrumb start --> */}
                                        <ol className="breadcrumb pull-right">
                                            <li className="breadcrumb-item">
                                                <a href="index.html">
                                                    <i className="fa fa-home"></i>
                                                </a>
                                            </li>
                                            <li className="breadcrumb-item active">My properties</li>
                                        </ol>
                                        {/* <!-- Breadcrumb end --> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Container-fluid end --> */}

                        {/* <!-- Container-fluid start --> */}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="property-admin">
                                        <div className="property-section section-sm">
                                            <div className="row ratio_55 property-grid-2 property-map map-with-back">
                                                <div className="col-12">
                                                    <div className="filter-panel">
                                                        <div className="listing-option">
                                                            <h5 className="mb-0">Showing <span>1-15 of 69</span> Listings</h5>
                                                            <div>
                                                                <div className="d-flex">
                                                                    {/* <span className="m-r-10">Map view</span>
                                                             <label className="switch">
                                                                 <input type="checkbox" className="option-list" name="step_1" value="ani1" checked=""/><span className="switch-state"></span>
                                                             </label>
                                                             <span className="m-l-10">List view</span> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="property-2 row column-sm property-label property-grid">
                                                        <div className="col-xl-4 col-md-6 xl-6">
                                                            <div className="property-box">
                                                                <div className="property-image">
                                                                    <div className="property-slider">
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F1.jpg?alt=media&token=b4a15bf4-cccd-4f36-80e1-4baf629953fe" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F2.jpg?alt=media&token=02d59161-229e-415a-8e8a-7f6f69aa0b5e" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F3.jpg?alt=media&token=9429c4ec-99d2-46c6-be3c-4fc961660a64" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F4.jpg?alt=media&token=2774369b-8a80-4459-8227-c3c245627c70" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                    </div>
                                                                    <div className="labels-left">
                                                                        <div>
                                                                            <span className="label label-shadow">sale</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="seen-data">
                                                                        <i data-feather="camera"></i>
                                                                        <span>04</span>
                                                                    </div>
                                                                    {/* <div className="overlay-property-box">
                                                                <a href="https://themes.pixelstrap.com/sheltos/main/compare.html" className="effect-round" data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"> 
                                                                    <i data-feather="shuffle"></i>
                                                                </a>
                                                                <a href="favourites.html" className="effect-round like" data-bs-toggle="tooltip" data-bs-placement="left" title="wishlist">
                                                                    <i data-feather="heart"></i>                                                                               
                                                                </a>
                                                            </div> */}
                                                                </div>

                                                                <div className="property-details">
                                                                    <span className="font-roboto">New Delhi</span>
                                                                    <a href="/property-details">
                                                                        <h3>Little Acorn Farm</h3>
                                                                    </a>
                                                                    <h6>₹50,000*</h6>
                                                                    <p className="font-roboto light-font">Real estate is divided into several categories, including residential property, commercial property and industrial property.</p>
                                                                    <ul>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fdouble-bed.svg?alt=media&token=adce4401-145c-4800-a0f3-6935bfc6578e" className="img-fluid" alt="" />Bed : 4</li>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbathroom.svg?alt=media&token=2dd2178a-998e-4aa0-ba60-a4ca1dfe65db" className="img-fluid" alt="" />Baths : 4</li>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fsquare-ruler-tool.svg?alt=media&token=8c121dad-da46-4f7f-b8b3-c62fe1ad2a1c" className="img-fluid ruler-tool" alt="" />Sq Ft : 5000</li>
                                                                    </ul>
                                                                    <div className="property-btn d-flex">
                                                                        {/* <span>August 4, 2022</span> */}
                                                                        <a href="/property-details"><button type="button" className="btn btn-dashed btn-pill color-2">Details</button></a>
                                                                        <a href="/edit-property"><button type="button" className="btn btn-dashed btn-pill color-2">Edit</button></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-md-6 xl-6">
                                                            <div className="property-box">
                                                                <div className="property-image">
                                                                    <div className="property-slider">
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F3.jpg?alt=media&token=9429c4ec-99d2-46c6-be3c-4fc961660a64" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F1.jpg?alt=media&token=b4a15bf4-cccd-4f36-80e1-4baf629953fe" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F4.jpg?alt=media&token=2774369b-8a80-4459-8227-c3c245627c70" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F2.jpg?alt=media&token=02d59161-229e-415a-8e8a-7f6f69aa0b5e" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                    </div>
                                                                    <div className="labels-left">
                                                                        <div>
                                                                            <span className="label label-dark">for rent</span>
                                                                        </div>
                                                                        <span className="label label-success">featured</span>
                                                                    </div>
                                                                    <div className="seen-data">
                                                                        <i data-feather="camera"></i>
                                                                        <span>06</span>
                                                                    </div>
                                                                    {/* <div className="overlay-property-box">
                                                                <a href="https://themes.pixelstrap.com/sheltos/main/compare.html" className="effect-round" data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"> 
                                                                    <i data-feather="shuffle"></i>
                                                                </a>
                                                                <a href="favourites.html" className="effect-round like" data-bs-toggle="tooltip" data-bs-placement="left" title="wishlist">
                                                                    <i data-feather="heart"></i>                                                                               
                                                                </a>
                                                            </div> */}
                                                                </div>

                                                                <div className="property-details">
                                                                    <span className="font-roboto">New Delhi</span>
                                                                    <a href="/property-details">
                                                                        <h3>Merrick in Spring Way</h3>
                                                                    </a>
                                                                    <h6>₹50,000*</h6>
                                                                    <p className="font-roboto light-font">This home provides wonderful entertaining spaces with a chef
                                                                        kitchen opening… Elegant retreat in a quiet Coral Gables setting.</p>
                                                                    <ul>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fdouble-bed.svg?alt=media&token=adce4401-145c-4800-a0f3-6935bfc6578e" className="img-fluid" alt="" />Bed : 4</li>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbathroom.svg?alt=media&token=2dd2178a-998e-4aa0-ba60-a4ca1dfe65db" className="img-fluid" alt="" />Baths : 4</li>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fsquare-ruler-tool.svg?alt=media&token=8c121dad-da46-4f7f-b8b3-c62fe1ad2a1c" className="img-fluid ruler-tool" alt="" />Sq Ft : 5000</li>
                                                                    </ul>
                                                                    <div className="property-btn d-flex">
                                                                        {/* <span>August 4, 2022</span> */}
                                                                        <a href="/property-details"><button type="button" className="btn btn-dashed btn-pill color-2">Details</button></a>
                                                                        <a href="/edit-property"><button type="button" className="btn btn-dashed btn-pill color-2">Edit</button></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-md-6 xl-6">
                                                            <div className="property-box">
                                                                <div className="property-image">
                                                                    <div className="property-slider">
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F2.jpg?alt=media&token=02d59161-229e-415a-8e8a-7f6f69aa0b5e" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F4.jpg?alt=media&token=2774369b-8a80-4459-8227-c3c245627c70" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F3.jpg?alt=media&token=9429c4ec-99d2-46c6-be3c-4fc961660a64" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F1.jpg?alt=media&token=b4a15bf4-cccd-4f36-80e1-4baf629953fe" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                    </div>
                                                                    <div className="labels-left">
                                                                        <div>
                                                                            <span className="label label-shadow">sale</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="seen-data">
                                                                        <i data-feather="camera"></i>
                                                                        <span>05</span>
                                                                    </div>
                                                                    {/* <div className="overlay-property-box">
                                                                <a href="https://themes.pixelstrap.com/sheltos/main/compare.html" className="effect-round" data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"> 
                                                                    <i data-feather="shuffle"></i>
                                                                </a>
                                                                <a href="favourites.html" className="effect-round like" data-bs-toggle="tooltip" data-bs-placement="left" title="wishlist">
                                                                    <i data-feather="heart"></i>                                                                               
                                                                </a>
                                                            </div> */}
                                                                </div>

                                                                <div className="property-details">
                                                                    <span className="font-roboto">New Delhi</span>
                                                                    <a href="/property-details">
                                                                        <h3>Allen's Across Way</h3>
                                                                    </a>
                                                                    <h6>₹50,000*</h6>
                                                                    <p className="font-roboto light-font">Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef
                                                                        kitchen opening…</p>
                                                                    <ul>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fdouble-bed.svg?alt=media&token=adce4401-145c-4800-a0f3-6935bfc6578e" className="img-fluid" alt="" />Bed : 4</li>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbathroom.svg?alt=media&token=2dd2178a-998e-4aa0-ba60-a4ca1dfe65db" className="img-fluid" alt="" />Baths : 4</li>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fsquare-ruler-tool.svg?alt=media&token=8c121dad-da46-4f7f-b8b3-c62fe1ad2a1c" className="img-fluid ruler-tool" alt="" />Sq Ft : 5000</li>
                                                                    </ul>
                                                                    <div className="property-btn d-flex">
                                                                        {/* <span>August 4, 2022</span> */}
                                                                        <a href="/property-details"><button type="button" className="btn btn-dashed btn-pill color-2">Details</button></a>
                                                                        <a href="/edit-property"><button type="button" className="btn btn-dashed btn-pill color-2">Edit</button></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-md-6 xl-6">
                                                            <div className="property-box">
                                                                <div className="property-image">
                                                                    <div className="property-slider">
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F7.jpg?alt=media&token=a8cc74d1-2647-4c5a-adb3-a4b3d2f4929f" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F6.jpg?alt=media&token=805779cc-2507-41d6-a067-ef24eae1504d" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F3.jpg?alt=media&token=9429c4ec-99d2-46c6-be3c-4fc961660a64" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F2.jpg?alt=media&token=02d59161-229e-415a-8e8a-7f6f69aa0b5e" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                    </div>
                                                                    <div className="labels-left">
                                                                        <div>
                                                                            <span className="label label-dark">for rent</span>
                                                                        </div>
                                                                        <span className="label label-success">featured</span>
                                                                    </div>
                                                                    <div className="seen-data">
                                                                        <i data-feather="camera"></i>
                                                                        <span>03</span>
                                                                    </div>
                                                                    {/* <div className="overlay-property-box">
                                                                <a href="https://themes.pixelstrap.com/sheltos/main/compare.html" className="effect-round" data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"> 
                                                                    <i data-feather="shuffle"></i>
                                                                </a>
                                                                <a href="favourites.html" className="effect-round like" data-bs-toggle="tooltip" data-bs-placement="left" title="wishlist">
                                                                    <i data-feather="heart"></i>                                                                               
                                                                </a>
                                                            </div> */}
                                                                </div>

                                                                <div className="property-details">
                                                                    <span className="font-roboto">New Delhi</span>
                                                                    <a href="/property-details">
                                                                        <h3>Hidden Spring Hideway</h3>
                                                                    </a>
                                                                    <h6>₹50,000*</h6>
                                                                    <p className="font-roboto light-font">The most common and most absolute type of estate, the tenant enjoys the greatest discretion over the disposal of the property.</p>
                                                                    <ul>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fdouble-bed.svg?alt=media&token=adce4401-145c-4800-a0f3-6935bfc6578e" className="img-fluid" alt="" />Bed : 4</li>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbathroom.svg?alt=media&token=2dd2178a-998e-4aa0-ba60-a4ca1dfe65db" className="img-fluid" alt="" />Baths : 4</li>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fsquare-ruler-tool.svg?alt=media&token=8c121dad-da46-4f7f-b8b3-c62fe1ad2a1c" className="img-fluid ruler-tool" alt="" />Sq Ft : 5000</li>
                                                                    </ul>
                                                                    <div className="property-btn d-flex">
                                                                        {/* <span>August 4, 2022</span> */}
                                                                        <a href="/property-details"><button type="button" className="btn btn-dashed btn-pill color-2">Details</button></a>
                                                                        <a href="/edit-property"><button type="button" className="btn btn-dashed btn-pill color-2">Edit</button></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-md-6 xl-6">
                                                            <div className="property-box">
                                                                <div className="property-image">
                                                                    <div className="property-slider">
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F6.jpg?alt=media&token=805779cc-2507-41d6-a067-ef24eae1504d" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F2.jpg?alt=media&token=02d59161-229e-415a-8e8a-7f6f69aa0b5e" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F7.jpg?alt=media&token=a8cc74d1-2647-4c5a-adb3-a4b3d2f4929f" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F1.jpg?alt=media&token=b4a15bf4-cccd-4f36-80e1-4baf629953fe" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                    </div>
                                                                    <div className="labels-left">
                                                                        <div>
                                                                            <span className="label label-dark">for sale</span>
                                                                        </div>
                                                                        <span className="label label-shadow">featured</span>
                                                                    </div>
                                                                    <div className="seen-data">
                                                                        <i data-feather="camera"></i>
                                                                        <span>04</span>
                                                                    </div>
                                                                    {/* <div className="overlay-property-box">
                                                                <a href="https://themes.pixelstrap.com/sheltos/main/compare.html" className="effect-round" data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"> 
                                                                    <i data-feather="shuffle"></i>
                                                                </a>
                                                                <a href="favourites.html" className="effect-round like" data-bs-toggle="tooltip" data-bs-placement="left" title="wishlist">
                                                                    <i data-feather="heart"></i>                                                                               
                                                                </a>
                                                            </div> */}
                                                                </div>

                                                                <div className="property-details">
                                                                    <span className="font-roboto">New Delhi</span>
                                                                    <a href="/property-details">
                                                                        <h3>Home in Merrick Way</h3>
                                                                    </a>
                                                                    <h6>₹50,000*</h6>
                                                                    <p className="font-roboto light-font">Real estate market in most countries are not as organize or efficient as markets for other, more liquid investment instruments.</p>
                                                                    <ul>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fdouble-bed.svg?alt=media&token=adce4401-145c-4800-a0f3-6935bfc6578e" className="img-fluid" alt="" />Bed : 4</li>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbathroom.svg?alt=media&token=2dd2178a-998e-4aa0-ba60-a4ca1dfe65db" className="img-fluid" alt="" />Baths : 4</li>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fsquare-ruler-tool.svg?alt=media&token=8c121dad-da46-4f7f-b8b3-c62fe1ad2a1c" className="img-fluid ruler-tool" alt="" />Sq Ft : 5000</li>
                                                                    </ul>
                                                                    <div className="property-btn d-flex">
                                                                        {/* <span>August 4, 2022</span> */}
                                                                        <a href="/property-details"><button type="button" className="btn btn-dashed btn-pill color-2">Details</button></a>
                                                                        <a href="/edit-property"><button type="button" className="btn btn-dashed btn-pill color-2">Edit</button></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-md-6 xl-6">
                                                            <div className="property-box">
                                                                <div className="property-image">
                                                                    <div className="property-slider">
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F8.jpg?alt=media&token=ce46d99a-79ed-4f88-a37c-45810d3530df" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F6.jpg?alt=media&token=805779cc-2507-41d6-a067-ef24eae1504d" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F7.jpg?alt=media&token=a8cc74d1-2647-4c5a-adb3-a4b3d2f4929f" className="bg-img" alt="" width="600px" height="400px" />

                                                                        </a>
                                                                        <a href="javascript:void(0)">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F2.jpg?alt=media&token=02d59161-229e-415a-8e8a-7f6f69aa0b5e" className="bg-img" alt="" width="600px" height="400px" />
                                                                        </a>
                                                                    </div>
                                                                    <div className="labels-left">
                                                                        <div>
                                                                            <span className="label label-dark">for rent</span>
                                                                        </div>
                                                                        <span className="label label-success">featured</span>
                                                                    </div>
                                                                    <div className="seen-data">
                                                                        <i data-feather="camera"></i>
                                                                        <span>07</span>
                                                                    </div>
                                                                    {/* <div className="overlay-property-box">
                                                                <a href="https://themes.pixelstrap.com/sheltos/main/compare.html" className="effect-round" data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"> 
                                                                    <i data-feather="shuffle"></i>
                                                                </a>
                                                                <a href="favourites.html" className="effect-round like" data-bs-toggle="tooltip" data-bs-placement="left" title="wishlist">
                                                                    <i data-feather="heart"></i>                                                                               
                                                                </a>
                                                            </div> */}
                                                                </div>

                                                                <div className="property-details">
                                                                    <span className="font-roboto">New Delhi</span>
                                                                    <a href="/property-details">
                                                                        <h3>Magnolia Ranch</h3>
                                                                    </a>
                                                                    <h6>₹50,000*</h6>
                                                                    <p className="font-roboto light-font">An interior designer is someone who plans,researches, management and manages such enhancement projects.</p>
                                                                    <ul>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fdouble-bed.svg?alt=media&token=adce4401-145c-4800-a0f3-6935bfc6578e" className="img-fluid" alt="" />Bed : 4</li>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbathroom.svg?alt=media&token=2dd2178a-998e-4aa0-ba60-a4ca1dfe65db" className="img-fluid" alt="" />Baths : 4</li>
                                                                        <li><img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fsquare-ruler-tool.svg?alt=media&token=8c121dad-da46-4f7f-b8b3-c62fe1ad2a1c" className="img-fluid ruler-tool" alt="" />Sq Ft : 5000</li>
                                                                    </ul>
                                                                    <div className="property-btn d-flex">
                                                                        {/* <span>August 4, 2022</span> */}
                                                                        <a href="/property-details"><button type="button" className="btn btn-dashed btn-pill color-2">Details</button></a>
                                                                        <a href="/edit-property"><button type="button" className="btn btn-dashed btn-pill color-2">Edit</button></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <nav className="theme-pagination">
                                                        <ul className="pagination">
                                                            <li className="page-item">
                                                                <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                                                                    <span aria-hidden="true">«</span>
                                                                    <span className="sr-only">Previous</span>
                                                                </a>
                                                            </li>
                                                            <li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a></li>
                                                            <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                                                            <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="javascript:void(0)" aria-label="Next">
                                                                    <span aria-hidden="true">»</span>
                                                                    <span className="sr-only">Next</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Container-fluid end --> */}
                    </div>

                    {/* <!-- footer start --> */}
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 footer-copyright">
                                    <p className="mb-0">Copyright 2022 © Crowdpe All rights reserved.</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="float-end mb-0">Developed with  <i className="fa fa-heart font-danger"></i></p>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* <!-- footer end --> */}
                </div>
            </div>

            {/* <!-- tap to top start -->
    <div className="tap-top">
        <div>
            <i className="fas fa-arrow-up"></i>
        </div>
    </div>
    <!-- tap to top end -->

    <!-- customizer start -->
    <div className="customizer-wrap">
        <div className="customizer-links">
            <i data-feather="settings"></i>
        </div>
        <div className="customizer-contain custom-scrollbar">
            <div className="setting-back">
                <i data-feather="x"></i>
            </div>
            <div className="layouts-settings">
                <div className="customizer-title">
                    <h6 className="color-4">Layout type</h6>
                </div>
                <div className="option-setting">
                    <span>Light</span>
                    <label className="switch">
                        <input type="checkbox" name="chk1" value="option" className="setting-check"><span className="switch-state"></span>
                    </label>
                    <span>Dark</span>
                </div>
            </div>
            <div className="layouts-settings">
                <div className="customizer-title">
                    <h6 className="color-4">Layout Direction</h6>
                </div>
                <div className="option-setting">
                    <span>LTR</span>
                    <label className="switch">
                        <input type="checkbox" name="chk2" value="option" className="setting-check1"><span className="switch-state"></span>
                    </label>
                    <span>RTL</span>
                </div>
            </div>
            <div className="layouts-settings">
                <div className="customizer-title">
                    <h6 className="color-4">Unlimited Color</h6>
                </div>
                <div className="option-setting unlimited-color-layout">
                    <div className="form-group">
                        <label for="ColorPicker6">color 6</label>
                        <input id="ColorPicker6" type="color" value="#f35d43" name="Default">
                    </div>
                    <div className="form-group">
                        <label for="ColorPicker7">color 7</label>
                        <input id="ColorPicker7" type="color" value="#f34451" name="Default"> 
                    </div>
                </div>
            </div>
        </div>
    </div> */}
            {/* <!-- customizer end --> */}

        </div>
    )
}

export default PropertyList