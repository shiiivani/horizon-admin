import { useState, useEffect } from 'react'
import logoDark from "../assets/logo-dark.png"
import logoLight from "../assets/logo-light.png"
import { Airplay, Bell, ChevronsLeft, Grid, Layout, Mail, Maximize, Save, Search } from 'react-feather'
import { useParams } from 'react-router-dom'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import { db, storage } from "../FirebaseAuth/firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth } from "../FirebaseAuth/firebase";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";



function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(`/edit-property/${id}`)
      } else {
        navigate("/login")
      }
    });
  }, []);


  const [details, setDetails] = useState({
    additionalFeatures: [],
    address: "",
    agencies: "",
    area: "",
    beds: "",
    baths: "",
    maxRooms: "",
    city: "",
    country: "",
    description: "",
    landmark: "",
    listingStatus: "",
    minimumHoldPeriod: "",
    pincode: "",
    price: "",
    propertyPrice: "",
    propertyStatus: "",
    propertyType: "",
  })
  const [propertyImage, setPropertyImage] = useState("");
  const [floorPlanImage, setFloorPlanImage] = useState("");

  const onChangeHandler = (event) => {
    if (event.target.name === "additionalFeatures") {
      let copy = { ...details }
      let additionalFeatures = [];
      if (event.target.checked) {
        copy.additionalFeatures.push(event.target.value)
      } else {
        copy.additionalFeatures = copy.additionalFeatures.filter(el => !el === event.target.value)
      }
      setDetails(copy)
    } else {
      setDetails(() => ({
        ...details,
        [event.target.name]: event.target.value
      }))
    }
  };

  useEffect(() => {
    id && getData();

  }, [id])

  const getData = async () => {
    const docref = doc(db, "propertyDetails", id)
    const snapshot = await getDoc(docref);
    if (snapshot.exists()) {
      setDetails({ ...snapshot.data() })
    }
    console.log("data", details.additionalFeatures)
  };

  const urlarray = details.urlarray;

  const uploadProperty = async () => {
    for (let i = 0; i < propertyImage.length; i++) {
      const imageRef = ref(storage, `/propertyImages/${propertyImage[i].name}`);
      await uploadBytes(imageRef, propertyImage[i])
      const url = await getDownloadURL(imageRef)
      urlarray.push(url);

      console.log(urlarray)
      // setButtonDisabled(false);  
    }
    return urlarray;
  };

  const floorurlarray = details.floorurlarray;

  const uploadFloorPlan = async () => {
    for (let i = 0; i < floorPlanImage.length; i++) {
      const floorRef = ref(storage, `/propertyImages/${floorPlanImage[i].name}`);
      const result = await uploadBytes(floorRef, floorPlanImage[i])
      const url = await getDownloadURL(floorRef)
      floorurlarray.push(url)
      console.log(floorurlarray)
      // setButtonDisabled(false);
    }
    return floorurlarray;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await uploadProperty();
    await uploadFloorPlan();
    try {
      const docref = doc(db, "propertyDetails", id);
      await updateDoc(docref, {
        additionalFeatures: details.additionalFeatures,
        address: details.address,
        agencies: details.agencies,
        area: Number(details.area),
        balcony: Number(details.balcony),
        baths: Number(details.baths),
        beds: Number(details.beds),
        city: details.city,
        country: details.country,
        description: details.description,
        floorurlarray,
        garage: Number(details.garage),
        halls: Number(details.halls),
        landmark: details.landmark,
        listingStatus: details.listingStatus,
        maxRooms: Number(details.maxRooms),
        minimumHoldPeriod: Number(details.minimumHoldPeriod),
        pincode: details.pincode,
        price: Number(details.price),
        propertyPrice: Number(details.propertyPrice),
        propertyStatus: details.propertyStatus,
        propertyType: details.propertyType,
        urlarray,
      });
      console.log("Document written with ID: ", docref.id);
      //   setErr("Details sent Successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

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
              <li className="profile-avatar onhover-dropdown">
                <div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F3.png?alt=media&token=a43e2409-29f3-481a-a1cd-0923f60b69de" className="img-fluid" alt="" />
                </div>
                <ul className="profile-dropdown onhover-show-div">
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
              <a href="/property-list">
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
                    <a href="" className="sidebar-link only-link">
                      <Airplay />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="/admin-panel" className="sidebar-link active">
                      <Grid />
                      <span>Add property</span>
                    </a>
                  </li>
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

                  <li className="sidebar-item" style={{ cursor: "pointer" }}>
                    <a href="/property-list" className="sidebar-link">
                      <Layout />
                      <span >Property List</span>
                    </a>
                  </li>
                  {/*<ul className="nav-submenu menu-content">
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
                      </li>
                      <li className="sidebar-item">
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
                          <img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/1.svg" className="img-fluid" alt="" />
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
                      <h3>Edit property
                        <small>Welcome to admin panel</small>
                      </h3>
                    </div>
                  </div>
                  <div className="col-sm-6">

                    {/* <!-- Breadcrumb start --> */}
                    <ol className="breadcrumb pull-right">
                      <li className="breadcrumb-item">
                        <a href="/property-list">
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
                  <div className="card">
                    <div className="card-header pb-0">
                      <h5>Add property details</h5>
                    </div>
                    <div className="card-body admin-form">
                      <form className="row gx-3" onSubmit={e => e.preventDefault()}>
                        <div className="form-group col-sm-4">
                          <label>Property Type</label>
                          <input type="text" className="form-control" placeholder="office,villa,apartment" name="propertyType" value={details.propertyType} onChange={onChangeHandler} required="" />
                        </div>
                        {/* <div className="form-group col-sm-4">
                              <label>Property Status</label>
                              <div className="dropdown">
                                <span className="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>For Sale</span> <i className="fas fa-angle-down"></i></span>
                                <div className="dropdown-menu text-start" name="propertyStatus" onChange={e => console.log(e.target.value)}>
                                  <a className="dropdown-item" href="javascript:void(0)" name="rent" value={propertyDetails.propertyStatus}>For Rent</a>
                                  <a className="dropdown-item" href="javascript:void(0)" name="sale" value={propertyDetails.propertyStatus}>For Sale</a>
                                </div>
                              </div>
                            </div> */}
                        <div className="form-group col-sm-4">
                          <label >Property Status</label>
                          <select className="form-control" name="propertyStatus" onChange={onChangeHandler}>
                            <option value={details.rent}>For Rent</option>
                            <option value={details.sale}>For Sale</option>
                          </select>
                        </div>
                        <div className="form-group col-sm-4">
                          <label>Property Price</label>
                          <input type="number" className="form-control" placeholder="₹2800" name="propertyPrice" value={details.propertyPrice} onChange={onChangeHandler} required="" />
                        </div>
                        
                        {/* <div className="form-group col-sm-4">
                              <label>Max Rooms</label>
                              <div className="dropdown">
                                <span className="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>1</span> <i className="fas fa-angle-down"></i></span>
                                <div className="dropdown-menu text-start">
                                  <a className="dropdown-item" href="javascript:void(0)">2</a>
                                  <a className="dropdown-item" href="javascript:void(0)">3</a>
                                  <a className="dropdown-item" href="javascript:void(0)">4</a>
                                  <a className="dropdown-item" href="javascript:void(0)">5</a>
                                  <a className="dropdown-item" href="javascript:void(0)">6</a>
                                </div>
                              </div>
                            </div> */}
                        <div className="form-group col-sm-4">
                          <label >Listng Status</label>
                          <select className="form-control" name="listingStatus" onChange={onChangeHandler}>
                            {details.listingStatus?.includes("Draft") ? <option selected value={details.draft}>Draft</option> : <option value={details.draft}>Draft</option>}
                            {details.listingStatus?.includes("Active") ? <option selected value={details.active}>Active</option> : <option value={details.active}>Active</option>}
                            {details.listingStatus?.includes("Closed") ? <option selected value={details.closed}>Closed</option> : <option value={details.closed}>Closed</option>}
                          </select>
                        </div>
                        <div className="form-group col-sm-4">
                          <label >Max Rooms</label>
                          <select className="form-control" name="maxRooms" onChange={onChangeHandler}>
                            {details.maxRooms?.includes("1") ? <option selected value={details.one}>1</option> : <option value={details.one}>1</option>}
                            {details.maxRooms?.includes("2") ? <option selected value={details.two}>2</option> : <option value={details.two}>2</option>}
                            {details.maxRooms?.includes("3") ? <option selected value={details.three}>3</option> : <option value={details.three}>3</option>}
                            {details.maxRooms?.includes("4") ? <option selected value={details.four}>4</option> : <option value={details.four}>4</option>}
                            {details.maxRooms?.includes("5") ? <option selected value={details.five}>5</option> : <option value={details.five}>5</option>}
                            {details.maxRooms?.includes("6") ? <option selected value={details.six}>6</option> : <option value={details.six}>6</option>}
                          </select>
                        </div>
                        <div className="form-group col-sm-4">
                          <label >Halls</label>
                          <select className="form-control" name="halls" onChange={onChangeHandler}>
                            {details.halls?.includes("1") ? <option selected value={details.one}>1</option> : <option value={details.one}>1</option>}
                            {details.halls?.includes("2") ? <option selected value={details.two}>2</option> : <option value={details.two}>2</option>}
                            {details.halls?.includes("3") ? <option selected value={details.three}>3</option> : <option value={details.three}>3</option>}
                            {details.halls?.includes("4") ? <option selected value={details.four}>4</option> : <option value={details.four}>4</option>}
                            {details.halls?.includes("5") ? <option selected value={details.five}>5</option> : <option value={details.five}>5</option>}
                            {details.halls?.includes("6") ? <option selected value={details.six}>6</option> : <option value={details.six}>6</option>}
                          </select>
                        </div>
                        {/* <div className="form-group col-sm-4">
                              <label>Beds</label>
                              <div className="dropdown">
                                <span className="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>1</span> <i className="fas fa-angle-down"></i></span>
                                <div className="dropdown-menu text-start">
                                  <a className="dropdown-item" href="javascript:void(0)">2</a>
                                  <a className="dropdown-item" href="javascript:void(0)">3</a>
                                  <a className="dropdown-item" href="javascript:void(0)">4</a>
                                  <a className="dropdown-item" href="javascript:void(0)">5</a>
                                  <a className="dropdown-item" href="javascript:void(0)">6</a>
                                </div>
                              </div>
                            </div> */}
                        <div className="form-group col-sm-4">
                          <label >Beds</label>
                          <select className="form-control" name="beds" onChange={onChangeHandler}>
                            {details.beds?.includes("1") ? <option selected value={details.one}>1</option> : <option value={details.one}>1</option>}
                            {details.beds?.includes("2") ? <option selected value={details.two}>2</option> : <option value={details.two}>2</option>}
                            {details.beds?.includes("3") ? <option selected value={details.three}>3</option> : <option value={details.three}>3</option>}
                            {details.beds?.includes("4") ? <option selected value={details.four}>4</option> : <option value={details.four}>4</option>}
                            {details.beds?.includes("5") ? <option selected value={details.five}>5</option> : <option value={details.five}>5</option>}
                            {details.beds?.includes("6") ? <option selected value={details.six}>6</option> : <option value={details.six}>6</option>}
                          </select>
                        </div>
                        {/* <div className="form-group col-sm-4">
                              <label>Baths</label>
                              <div className="dropdown">
                                <span className="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>1</span> <i className="fas fa-angle-down"></i></span>
                                <div className="dropdown-menu text-start">
                                  <a className="dropdown-item" href="javascript:void(0)">2</a>
                                  <a className="dropdown-item" href="javascript:void(0)">3</a>
                                  <a className="dropdown-item" href="javascript:void(0)">4</a>
                                  <a className="dropdown-item" href="javascript:void(0)">5</a>
                                  <a className="dropdown-item" href="javascript:void(0)">6</a>
                                </div>
                              </div>
                            </div> */}
                        <div className="form-group col-sm-4">
                          <label >Baths</label>
                          <select className="form-control" name="baths" onChange={onChangeHandler}>
                            {details.baths?.includes("1") ? <option selected value={details.one}>1</option> : <option value={details.one}>1</option>}
                            {details.baths?.includes("2") ? <option selected value={details.two}>2</option> : <option value={details.two}>2</option>}
                            {details.baths?.includes("3") ? <option selected value={details.three}>3</option> : <option value={details.three}>3</option>}
                            {details.baths?.includes("4") ? <option selected value={details.four}>4</option> : <option value={details.four}>4</option>}
                            {details.baths?.includes("5") ? <option selected value={details.five}>5</option> : <option value={details.five}>5</option>}
                            {details.baths?.includes("6") ? <option selected value={details.six}>6</option> : <option value={details.six}>6</option>}
                          </select>
                        </div>
                        <div className="form-group col-sm-4">
                          <label >Garage</label>
                          <select className="form-control" name="garage" onChange={onChangeHandler}>
                            {details.garage?.includes("1") ? <option selected value={details.one}>1</option> : <option value={details.one}>1</option>}
                            {details.garage?.includes("2") ? <option selected value={details.two}>2</option> : <option value={details.two}>2</option>}
                            {details.garage?.includes("3") ? <option selected value={details.three}>3</option> : <option value={details.three}>3</option>}
                            {details.garage?.includes("4") ? <option selected value={details.four}>4</option> : <option value={details.four}>4</option>}
                            {details.garage?.includes("5") ? <option selected value={details.five}>5</option> : <option value={details.five}>5</option>}
                            {details.garage?.includes("6") ? <option selected value={details.six}>6</option> : <option value={details.six}>6</option>}
                          </select>
                        </div>
                        <div className="form-group col-sm-4">
                          <label >Balcony</label>
                          <select className="form-control" name="balcony" onChange={onChangeHandler}>
                            {details.balcony?.includes("1") ? <option selected value={details.one}>1</option> : <option value={details.one}>1</option>}
                            {details.balcony?.includes("2") ? <option selected value={details.two}>2</option> : <option value={details.two}>2</option>}
                            {details.balcony?.includes("3") ? <option selected value={details.three}>3</option> : <option value={details.three}>3</option>}
                            {details.balcony?.includes("4") ? <option selected value={details.four}>4</option> : <option value={details.four}>4</option>}
                            {details.balcony?.includes("5") ? <option selected value={details.five}>5</option> : <option value={details.five}>5</option>}
                            {details.balcony?.includes("6") ? <option selected value={details.six}>6</option> : <option value={details.six}>6</option>}
                          </select>
                        </div>
                        <div className="form-group col-sm-4">
                          <label>Area</label>
                          <input type="number" className="form-control" name="area" value={details.area} onChange={onChangeHandler} placeholder="85 sq ft" />
                        </div>
                        <div className="form-group col-sm-4">
                          <label>Price</label>
                          <input type="number" className="form-control" name="price" value={details.price} onChange={onChangeHandler} placeholder="₹3000" />
                        </div>
                        <div className="form-group col-sm-4">
                          <label>Minimum Hold Period</label>
                          <input type="number" className="form-control" placeholder="₹2800" name="minimumHoldPeriod" value={details.minimumHoldPeriod} onChange={onChangeHandler} required="" />
                        </div>
                        {/* <div className="form-group col-sm-4">
                              <label>Agencies</label>
                              <div className="dropdown">
                                <span className="dropdown-toggle font-rubik"
                                  data-bs-toggle="dropdown"><span>Premiere</span> <i
                                    className="fas fa-angle-down"></i></span>
                                <div className="dropdown-menu text-start">
                                  <a className="dropdown-item" href="javascript:void(0)">Blue Sky</a>
                                  <a className="dropdown-item" href="javascript:void(0)">Zephyr</a>
                                  <a className="dropdown-item" href="javascript:void(0)">Premiere</a>
                                </div>
                              </div>
                            </div> */}
                        <div className="form-group col-sm-4">
                          <label >Agencies</label>
                          <select className="form-control" name="agencies" onChange={onChangeHandler}>
                            {details.agencies?.includes("Blue Sky") ? <option selected value={details.blueSky}>Blue Sky</option> : <option value={details.blueSky}>Blue Sky</option>}
                            {details.agencies?.includes("Zephyr") ? <option selected value={details.zephyr}>Zephyr</option> : <option value={details.blueSky}>Zephyr</option>}
                            {details.agencies?.includes("Premiere") ? <option selected value={details.premiere}>Premiere</option> : <option value={details.premiere}>Premiere</option>}
                          </select>
                        </div>
                        <div className="form-group col-sm-12">
                          <label>Description</label>
                          <textarea className="form-control" name="description" value={details.description} onChange={onChangeHandler} rows="4"></textarea>
                        </div>
                        <div className="form-group col-sm-6">
                          <label>Address</label>
                          <input type="text" className="form-control" name="address" value={details.address || ""} onChange={onChangeHandler} placeholder="Address of your property" />
                        </div>
                        <div className="form-group col-sm-6">
                          <label>Zip code</label>
                          <input type="number" className="form-control" name="pincode" value={details.pincode} onChange={onChangeHandler} placeholder="39702" />
                        </div>
                        {/* <div className="form-group col-sm-4">
                              <label>Any Country</label>
                              <div className="dropdown">
                                <span className="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>Austria</span> <i className="fas fa-angle-down"></i></span>
                                <div className="dropdown-menu text-start">
                                  <a className="dropdown-item" href="javascript:void(0)">Austria</a>
                                  <a className="dropdown-item" href="javascript:void(0)">Brazil</a>
                                  <a className="dropdown-item" href="javascript:void(0)">New york</a>
                                  <a className="dropdown-item" href="javascript:void(0)">USA</a>
                                </div>
                              </div> 
                            </div>*/}
                        <div className="form-group col-sm-4">
                          <label >Country</label>
                          <select className="form-control" name="country" onChange={onChangeHandler}>
                            <option value={details.india}>India</option>
                            <option value={details.brazil}>Brazil</option>
                            <option value={details.usa}>USA</option>
                            <option value={details.austria}>Austria</option>
                          </select>
                        </div>
                        {/* <div className="form-group col-sm-4">
                              <label>Any City</label>
                              <div className="dropdown">
                                <span className="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>Amreli</span> <i className="fas fa-angle-down"></i></span>
                                <div className="dropdown-menu text-start">
                                  <a className="dropdown-item" href="javascript:void(0)">Gandhinagar</a>
                                  <a className="dropdown-item" href="javascript:void(0)">Bharuch</a>
                                  <a className="dropdown-item" href="javascript:void(0)">Amreli</a>
                                  <a className="dropdown-item" href="javascript:void(0)">Ahmadabad</a>
                                </div>
                              </div>
                            </div> */}
                        <div className="form-group col-sm-4">
                          <label >City</label>
                          <select className="form-control" name="city" onChange={onChangeHandler}>
                            <option value={details.bangalore}>Bangalore</option>
                            <option value={details.newDelhi}>New Delhi</option>
                            <option value={details.lucknow}>Luknow</option>
                            <option value={details.mumbai}>Mumbai</option>
                          </select>
                        </div>
                        <div className="form-group col-sm-4">
                          <label>Landmark</label>
                          <input type="text" className="form-control" name="landmark" value={details.landmark} onChange={onChangeHandler} placeholder="landmark place name" />
                        </div>
                      </form>
                      <div className="dropzone-admin">
                        <label>Property Images</label>
                        <form className="dropzone" id="multiFileUpload" style={{ position: "relative" }}
                          onChange={(event) => {
                            setPropertyImage(event.target.files);
                          }}>
                          <input
                            type="file"
                            multiple
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              zIndex: "0",
                              cursor: "pointer",
                              opacity: "0",
                            }}
                          />

                          <div className="dz-message needsclick"><i className="fas fa-cloud-upload-alt"></i>
                            <h6>Click to choose file</h6>
                          </div>
                        </form>

                      </div>
                      <div className="dropzone-admin">
                        <label>Floorplan</label>
                        <form className="dropzone" id="multiFileUpload" style={{ position: "relative" }}
                          onChange={(event) => {
                            setFloorPlanImage(event.target.files);
                          }}>

                          <input
                            type="file"
                            multiple
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              zIndex: "0",
                              cursor: "pointer",
                              opacity: "0",
                            }}
                          />
                          <div className="dz-message needsclick"><i className="fas fa-cloud-upload-alt"></i>
                            <h6>Click to choose file</h6>
                          </div>

                        </form>

                      </div>
                      <form className="row gx-3">
                        {/* <div className="form-group col-sm-12">
                              <label>video (mp4)</label>
                              <input type="text" className="form-control" placeholder="mp4 video link" />
                            </div> */}
                        <div className="form-group col-sm-12 mb-0">
                          <label>Additional features</label>
                          <div className="additional-checkbox">
                            {details.additionalFeatures.includes('Emergency Exit') ?
                              <label for="chk-ani">
                                <input className="checkbox_animated color-4" id="chk-ani" type="checkbox" name="additionalFeatures" value="Emergency Exit" onChange={onChangeHandler} checked /> Emergency Exit
                              </label>
                              :
                              <label for="chk-ani">
                                <input className="checkbox_animated color-4" id="chk-ani" type="checkbox" name="additionalFeatures" value="Emergency Exit" onChange={onChangeHandler} /> Emergency Exit
                              </label>}
                            {details.additionalFeatures.includes('CCTV') ?
                              <label for="chk-ani1">
                                <input className="checkbox_animated color-4" id="chk-ani1" type="checkbox" name="additionalFeatures" value="CCTV" onChange={onChangeHandler} checked /> CCTV
                              </label> :
                              <label for="chk-ani1">
                                <input className="checkbox_animated color-4" id="chk-ani1" type="checkbox" name="additionalFeatures" value="CCTV" onChange={onChangeHandler} /> CCTV
                              </label>}
                            {details.additionalFeatures.includes('Free Wi-Fi') ?
                              <label for="chk-ani2">
                                <input className="checkbox_animated color-4" id="chk-ani2" type="checkbox" name="additionalFeatures" value="Free Wi-fi" onChange={onChangeHandler} checked /> Free Wi-Fi
                              </label> :
                              <label for="chk-ani2">
                                <input className="checkbox_animated color-4" id="chk-ani2" type="checkbox" name="additionalFeatures" value="Free Wi-fi" onChange={onChangeHandler} /> Free Wi-Fi
                              </label>}
                            {details.additionalFeatures.includes('Free Parking in the Area') ?
                              <label for="chk-ani3">
                                <input className="checkbox_animated color-4" id="chk-ani3" type="checkbox" name="additionalFeatures" value="Free parking" onChange={onChangeHandler} checked />  Free Parking In The Area
                              </label> :
                              <label for="chk-ani3">
                                <input className="checkbox_animated color-4" id="chk-ani3" type="checkbox" name="additionalFeatures" value="Free parking" onChange={onChangeHandler} />  Free Parking In The Area
                              </label>}
                            {details.additionalFeatures.includes('Air Conditioning') ?
                              <label for="chk-ani4">
                                <input className="checkbox_animated color-4" id="chk-ani4" type="checkbox" name="additionalFeatures" value="Air Conditioning" onChange={onChangeHandler} checked />  Air Conditioning
                              </label>
                              :
                              <label for="chk-ani4">
                                <input className="checkbox_animated color-4" id="chk-ani4" type="checkbox" name="additionalFeatures" value="Air Conditioning" onChange={onChangeHandler} />  Air Conditioning
                              </label>}
                            {details.additionalFeatures.includes('Security Guard') ?
                              <label for="chk-ani5">
                                <input className="checkbox_animated color-4" id="chk-ani5" type="checkbox" name="additionalFeatures" value="Security Guard" onChange={onChangeHandler} checked />  Security Guard
                              </label>
                              : <label for="chk-ani5">
                                <input className="checkbox_animated color-4" id="chk-ani5" type="checkbox" name="additionalFeatures" value="Security Guard" onChange={onChangeHandler} />  Security Guard
                              </label>}
                            {details.additionalFeatures.includes('Terrace') ?
                              <label for="chk-ani6">
                                <input className="checkbox_animated color-4" id="chk-ani6" type="checkbox" name="additionalFeatures" value="Terrace" onChange={onChangeHandler} checked />  Terrace
                              </label> :
                              <label for="chk-ani6">
                                <input className="checkbox_animated color-4" id="chk-ani6" type="checkbox" name="additionalFeatures" value="Terrace" onChange={onChangeHandler} />  Terrace
                              </label>}
                            {details.additionalFeatures.includes('Laundry Service') ?
                              <label for="chk-ani7">
                                <input className="checkbox_animated color-4" id="chk-ani7" type="checkbox" name="additionalFeatures" value="Laundry Service" onChange={onChangeHandler} checked />  Laundry Service
                              </label> :
                              <label for="chk-ani7">
                                <input className="checkbox_animated color-4" id="chk-ani7" type="checkbox" name="additionalFeatures" value="Laundry Service" onChange={onChangeHandler} />  Laundry Service
                              </label>}
                            {details.additionalFeatures.includes('Elevator Lift') ?
                              <label for="chk-ani8">
                                <input className="checkbox_animated color-4" id="chk-ani8" type="checkbox" name="additionalFeatures" value="Elevator Lift" onChange={onChangeHandler} checked />  Elevator Lift
                              </label> :
                              <label for="chk-ani8">
                                <input className="checkbox_animated color-4" id="chk-ani8" type="checkbox" name="additionalFeatures" value="Elevator Lift" onChange={onChangeHandler} />  Elevator Lift
                              </label>}
                            {details.additionalFeatures.includes('Balcony') ?
                              <label for="chk-ani9">
                                <input className="checkbox_animated color-4" id="chk-ani9" type="checkbox" name="additionalFeatures" value="Balcony" onChange={onChangeHandler} checked />  Balcony
                              </label> :
                              <label for="chk-ani9">
                                <input className="checkbox_animated color-4" id="chk-ani9" type="checkbox" name="additionalFeatures" value="Balcony" onChange={onChangeHandler} />  Balcony
                              </label>}
                          </div>
                        </div>
                        <div className="form-btn col-sm-12">
                          {/* <button type="button" className="btn btn-pill btn-gradient color-4 " style={{ width: "100px" }} onClick={() => {uploadFloorPlan(); uploadProperty();}}>Upload</button> */}
                          <button type="submit" className="btn btn-pill btn-gradient color-4 " style={{ width: "150px" }} onClick={submitHandler}>Update</button>
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

      {/* <!-- tap to top start --> */}
      {/* <div className="tap-top">
            <div>
              <i className="fas fa-arrow-up"></i>
            </div>
          </div> */}
      {/* <!-- tap to top end --> */}

      {/* <!-- customizer start --> */}
      {/* <div className="customizer-wrap">
            <div className="customizer-links">
              <Settings />
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
                    <input type="checkbox" name="chk1" value="option" className="setting-check" /><span className="switch-state"></span>
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
                    <input type="checkbox" name="chk2" value="option" className="setting-check1" /><span className="switch-state"></span>
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
                    <input id="ColorPicker6" type="color" value="#f35d43" name="Default" />
                  </div>
                  <div className="form-group">
                    <label for="ColorPicker7">color 7</label>
                    <input id="ColorPicker7" type="color" value="#f34451" name="Default" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      {/* <!-- customizer end --> */}

    </div >
  )
}


export default EditProperty