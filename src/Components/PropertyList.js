import { useEffect, useState, useRef } from "react";
import { BarChart, ChevronsLeft, Grid, Layout, Search } from "react-feather";
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../FirebaseAuth/firebase";
import { Link } from "react-router-dom";
import excerptHtml from "excerpt-html";
import { auth } from "../FirebaseAuth/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

function PropertyList() {
  const [propertyList, setPropertyList] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef(null);
  const observerElementRef = useRef(null);
  const [admin, setAdmin] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [dataShown, setDataShown] = useState(6);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User Signed Out");
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/login");
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/property-list");
        try {
          const userDocsRef = collection(db, "adminUser");
          const userDocsQuery = query(
            userDocsRef,
            where("isAdmin", "==", "true")
          );
          let list = [];
          const userDocsSnapshot = await getDocs(userDocsQuery);
          userDocsSnapshot.forEach((doc) => {
            list.push({ ...doc.data() });
          });
          setAdmin(list);
        } catch (error) {
          console.error("Error fetching user documents:", error);
        }
      } else {
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    const getCount = async () => {
      const countRef = doc(
        db,
        "totalNumberOfProperties",
        "tEIwoh99Xv26RmXG3D05"
      );
      const countSnapshot = await getDoc(countRef);
      const count = countSnapshot.data().totalNumber;
      setTotalData(count);
    };
    getCount();
  }, [totalData]);

  useEffect(() => {
    const fetchInitialList = async () => {
      setLoading(true);
      try {
        const initialQuery = query(
          collection(db, "propertyDetails"),
          orderBy("createdAt", "desc"),
          limit(6)
        );

        const initialSnapshot = await getDocs(initialQuery);
        const initialList = initialSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPropertyList(initialList);
        if (initialList.length < 6) {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialList();
  }, []);

  const fetchMoreList = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const lastDoc = propertyList[propertyList.length - 1];
      const moreQuery = query(
        collection(db, "propertyDetails"),
        orderBy("createdAt", "desc"),
        startAfter(lastDoc.createdAt),
        limit(6)
      );
      const moreSnapshot = await getDocs(moreQuery);
      const moreList = moreSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPropertyList((prevList) => [...prevList, ...moreList]);
      setDataShown((prevCount) => prevCount + moreSnapshot.size);
      if (moreList.length < 6) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      fetchMoreList();
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    observer.current = new IntersectionObserver(handleObserver, options);

    if (observer.current && observerElementRef.current) {
      observer.current.observe(observerElementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [handleObserver]);

  return (
    <div>
      {/* <!-- Loader start --> */}
      {loading ? (
        <div className="loader-wrapper">
          <div className="row loader-img">
            <div className="col-12">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Floader-2.gif?alt=media&token=88f706ef-427c-4fc3-ab28-f5fd4dd50e72"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                  />
                </div>
              </li>
              <li className="profile-avatar onhover-dropdown">
                <div>
                  <div className="change-pic">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F3.png?alt=media&token=a43e2409-29f3-481a-a1cd-0923f60b69de"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <ul className="profile-dropdown onhover-show-div">
                  <li onClick={logOut}>
                    <a href="login.html">
                      <span>Log Out</span>
                      <i data-feather="log-in"></i>
                    </a>
                  </li>
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
                    {/* <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F3.png?alt=media&token=a43e2409-29f3-481a-a1cd-0923f60b69de"
                      className="img-fluid"
                      alt=""
                    /> */}
                  </div>
                  {admin.map((doc) => {
                    return (
                      <div className="media-body">
                        <a>
                          <h6>{doc.name}</h6>
                        </a>
                        <span className="font-roboto">{doc.email}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div id="mainsidebar">
                <ul className="sidebar-menu custom-scrollbar">
                  {/* <li className="sidebar-item">
                    <a href="/property-list" className="sidebar-link only-link">
                      <Airplay />
                      <span>Dashboard</span>
                    </a>
                  </li> */}
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
                    <a
                      // href="javascript:void(0)"
                      className="sidebar-link active"
                    >
                      <Layout />
                      <span>Property List</span>
                    </a>
                  </li>
                  <li className="sidebar-item" style={{ cursor: "pointer" }}>
                    <a href="/investment" className="sidebar-link">
                      <BarChart />
                      <span>Investment</span>
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
                      <h3>
                        Property list
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
                  <div className="property-admin">
                    <div className="property-section section-sm">
                      <div className="row ratio_55 property-grid-2 property-map map-with-back">
                        <div className="col-12">
                          <div className="filter-panel">
                            <div className="listing-option">
                              <h5 className="mb-0">
                                Showing{" "}
                                <span>
                                  1-
                                  {dataShown} of {totalData}
                                </span>{" "}
                                Listings
                              </h5>
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
                            {propertyList.map((list) => {
                              return (
                                <div
                                  key={list.id}
                                  className="col-xl-4 col-md-6 xl-6"
                                >
                                  <div className="property-box">
                                    <div className="property-image">
                                      <div className="property-slider">
                                        <div
                                          id={`carouselExampleIndicators-${list.id}`}
                                          className="carousel slide"
                                          data-ride="carousel"
                                          data-interval="false"
                                        >
                                          {/* <ol className="carousel-indicators">
                                                                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                                                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                                                    </ol> */}
                                          <div className="carousel-inner">
                                            <div className="carousel-item active">
                                              <img
                                                className="d-block w-100"
                                                src={list.urlarray[0]}
                                                alt="First slide"
                                                width="600px"
                                                height="300px"
                                              />
                                            </div>
                                            <div className="carousel-item">
                                              <img
                                                className="d-block w-100"
                                                src={list.urlarray[1]}
                                                alt="Second slide"
                                                width="600px"
                                                height="300px"
                                              />
                                            </div>
                                            {list.urlarray?.[2] ? (
                                              <div className="carousel-item">
                                                <img
                                                  className="d-block w-100"
                                                  src={list.urlarray[2]}
                                                  alt="Third slide"
                                                  width="600px"
                                                  height="300px"
                                                />
                                              </div>
                                            ) : (
                                              ""
                                            )}
                                            {list.urlarray?.[3] ? (
                                              <div className="carousel-item">
                                                <img
                                                  className="d-block w-100"
                                                  src={list.urlarray[3]}
                                                  alt="Fourth slide"
                                                  width="600px"
                                                  height="300px"
                                                />
                                              </div>
                                            ) : (
                                              ""
                                            )}
                                            {list.urlarray?.[4] ? (
                                              <div className="carousel-item">
                                                <img
                                                  className="d-block w-100"
                                                  src={list.urlarray?.[4]}
                                                  alt="fifth slide"
                                                  width="1450px"
                                                  height="700px"
                                                />
                                              </div>
                                            ) : (
                                              ""
                                            )}
                                            {list.urlarray?.[5] ? (
                                              <div className="carousel-item">
                                                <img
                                                  className="d-block w-100"
                                                  src={list.urlarray?.[5]}
                                                  alt="Sixth slide"
                                                  width="1450px"
                                                  height="700px"
                                                />
                                              </div>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                          <a
                                            className="carousel-control-prev"
                                            href={`#carouselExampleIndicators-${list.id}`}
                                            role="button"
                                            data-slide="prev"
                                          >
                                            <span
                                              className="carousel-control-prev"
                                              aria-hidden="true"
                                            ></span>
                                            <span className="sr-only">
                                              Previous
                                            </span>
                                          </a>
                                          <a
                                            className="carousel-control-next"
                                            href={`#carouselExampleIndicators-${list.id}`}
                                            role="button"
                                            data-slide="next"
                                          >
                                            <span
                                              className="carousel-control-next-icon"
                                              aria-hidden="true"
                                            ></span>
                                            <span className="sr-only">
                                              Next
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <div className="labels-left">
                                        <div>
                                          <span className="label label-shadow">
                                            {list.propertyStatus}
                                          </span>
                                        </div>
                                        <div>
                                          <span
                                            className="label label-shadow"
                                            style={{ marginTop: "5px" }}
                                          >
                                            {list.propertyType}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="seen-data">
                                        <i data-feather="camera"></i>
                                        <span>{list.id}</span>
                                      </div>
                                    </div>

                                    <div className="property-details">
                                      <span className="font-roboto">
                                        {list.city}
                                      </span>
                                      <Link
                                        to={`/property-details/${list.docId}`}
                                      >
                                        <h3>{list.propertyType}</h3>
                                      </Link>
                                      <h6>₹{list.price}</h6>
                                      <p className="font-roboto light-font">
                                        {excerptHtml(list.description, 200)}
                                      </p>
                                      <ul>
                                        <li>
                                          <img
                                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fdouble-bed.svg?alt=media&token=adce4401-145c-4800-a0f3-6935bfc6578e"
                                            className="img-fluid"
                                            alt=""
                                          />
                                          Bed : 4
                                        </li>
                                        <li>
                                          <img
                                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbathroom.svg?alt=media&token=2dd2178a-998e-4aa0-ba60-a4ca1dfe65db"
                                            className="img-fluid"
                                            alt=""
                                          />
                                          Baths : 4
                                        </li>
                                        <li>
                                          <img
                                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fsquare-ruler-tool.svg?alt=media&token=8c121dad-da46-4f7f-b8b3-c62fe1ad2a1c"
                                            className="img-fluid ruler-tool"
                                            alt=""
                                          />
                                          Sq Ft : 4
                                        </li>
                                      </ul>
                                      <div className="property-btn d-flex">
                                        {/* <span>August 4, 2022</span> */}
                                        <Link
                                          to={`/property-details/${list.docId}`}
                                        >
                                          <button
                                            type="button"
                                            className="btn btn-dashed btn-pill color-2"
                                          >
                                            Details
                                          </button>
                                        </Link>
                                        <a
                                          href={`/edit-property/${list.docId}`}
                                        >
                                          <button
                                            ref={observerElementRef}
                                            type="button"
                                            className="btn btn-dashed btn-pill color-2"
                                          >
                                            Edit
                                          </button>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* <nav className="theme-pagination">
                            <ul className="pagination">
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  // href="javascript:void(0)"
                                  aria-label="Previous"
                                >
                                  <span aria-hidden="true">«</span>
                                  <span className="sr-only">Previous</span>
                                </a>
                              </li>
                              <li className="page-item active">
                                <a
                                  className="page-link"
                                  // href="javascript:void(0)"
                                >
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  // href="javascript:void(0)"
                                >
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  // href="javascript:void(0)"
                                >
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  // href="javascript:void(0)"
                                  aria-label="Next"
                                >
                                  <span aria-hidden="true">»</span>
                                  <span className="sr-only">Next</span>
                                </a>
                              </li>
                            </ul>
                          </nav> */}
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
                  <p className="mb-0">
                    Copyright 2022 © Crowdpe All rights reserved.
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="float-end mb-0">
                    Developed with <i className="fa fa-heart font-danger"></i>
                  </p>
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
  );
}

export default PropertyList;
