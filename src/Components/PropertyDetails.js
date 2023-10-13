import { useState, useEffect } from "react";
import "../styles/PropertyDetails.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseAuth/firebase";
import { useParams } from "react-router-dom";
import { auth } from "../FirebaseAuth/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

function PropertyDetails() {
  const [propertyDetails, setPropertyDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(`/property-details/${id}`);
      } else {
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    const docRef = doc(db, `propertyDetails/${id}`);
    getDoc(docRef).then((doc) => {
      setPropertyDetails({ ...doc.data() });
    });
    // const docSnap = await getDoc(docRef);

    // if (docSnap) {
    //     setPropertyDetails(docSnap.data())
    //     console.log("Document data:", docSnap.data());
    // } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");
    // }
  }, [id]);
  return (
    <div>
      {/* <!-- breadcrumb start --> */}
      <section className="ratio_40 breadcrumb-section p-0 single-property-images">
        <div className="main-property-slider arrow-image">
          {/* <div>
                        <div>
                            <img
                                src={propertyDetails.urlarray?.[0]}
                                className="bg-img"
                                alt=""
                                width="1450px"
                                height="700px"
                            />

                        </div>
                    </div>
                    <div>
                        <div>
                            <img
                                src={propertyDetails.urlarray?.[1]}

                                className="bg-img"
                                alt=""
                                width="1450px"
                                height="700px"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img
                                src={propertyDetails.urlarray?.[2]}
                                className="bg-img"
                                alt=""
                                width="1450px"
                                height="700px"
                            />
                        </div>
                    </div> */}
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={propertyDetails.urlarray?.[0]}
                  alt="First slide"
                  width="1450px"
                  height="700px"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={propertyDetails.urlarray?.[1]}
                  alt="Second slide"
                  width="1450px"
                  height="700px"
                />
              </div>
              {propertyDetails.urlarray?.[2] ? (
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={propertyDetails.urlarray?.[2]}
                    alt="Third slide"
                    width="1450px"
                    height="700px"
                  />
                </div>
              ) : (
                ""
              )}
              {propertyDetails.urlarray?.[3] ? (
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={propertyDetails.urlarray?.[3]}
                    alt="Third slide"
                    width="1450px"
                    height="700px"
                  />
                </div>
              ) : (
                ""
              )}
              {propertyDetails.urlarray?.[4] ? (
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={propertyDetails.urlarray?.[4]}
                    alt="Fourth slide"
                    width="1450px"
                    height="700px"
                  />
                </div>
              ) : (
                ""
              )}
              {propertyDetails.urlarray?.[5] ? (
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={propertyDetails.urlarray?.[5]}
                    alt="Fourth slide"
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
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="single-property-section">
          <div className="container">
            <div className="single-title">
              <div className="left-single">
                <div className="d-flex">
                  <h2 className="mb-0">{propertyDetails.propertyType}</h2>
                  <span>
                    <span className="label label-shadow ms-2">
                      {propertyDetails.propertyStatus}
                    </span>
                  </span>
                </div>
                <p className="mt-2">
                  {propertyDetails.address}, {propertyDetails.landmark},{" "}
                  {propertyDetails.city}, {propertyDetails.country}
                </p>
                <ul>
                  <li>
                    <div>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fdouble-bed.svg?alt=media&token=adce4401-145c-4800-a0f3-6935bfc6578e"
                        className="img-fluid"
                        alt=""
                      />
                      <span> {propertyDetails.beds} Beds</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbathroom.svg?alt=media&token=2dd2178a-998e-4aa0-ba60-a4ca1dfe65db"
                        className="img-fluid"
                        alt=""
                      />
                      <span> {propertyDetails.baths} Baths</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fsofa.svg?alt=media&token=70c2b08b-6393-4272-8aa1-b243f56648b1"
                        className="img-fluid"
                        alt=""
                      />
                      <span> {propertyDetails.halls} Halls</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fsquare-ruler-tool.svg?alt=media&token=8c121dad-da46-4f7f-b8b3-c62fe1ad2a1c"
                        className="img-fluid ruler-tool"
                        alt=""
                      />
                      <span>{propertyDetails.area} Area</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fgarage.svg?alt=media&token=bebca84a-89d7-49cc-bc6e-74ea8e3080e6"
                        className="img-fluid"
                        alt=""
                      />
                      <span>{propertyDetails.garage} Garage</span>
                    </div>
                  </li>
                </ul>
                <div className="share-buttons">
                  <div className="d-inline-block">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-gradient btn-pill color-2"
                    >
                      <i className="far fa-share-square"></i>
                      share
                    </a>
                    <div className="share-hover">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="icon-facebook"
                          >
                            <i data-feather="facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/"
                            className="icon-twitter"
                          >
                            <i data-feather="twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            className="icon-instagram"
                          >
                            <i data-feather="instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-dashed btn-pill color-2 ms-md-2 ms-1 save-btn"
                  >
                    <i className="far fa-heart"></i>
                    Save
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-dashed btn-pill color-2 ms-md-2 ms-1"
                    onclick="myFunction()"
                  >
                    <i data-feather="printer"></i>
                    Print
                  </a>
                </div>
              </div>
              <div className="right-single" width="20px">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <h2 className="price">
                  ₹{propertyDetails.price}
                  <span>/ start From</span>
                </h2>
                <div
                  className="feature-label"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto auto auto",
                  }}
                >
                  {propertyDetails.additionalFeatures?.map((features) => {
                    return (
                      <span className="btn btn-dashed color-2 btn-pill">
                        {features}
                      </span>
                    );
                  })}

                  {/* <span className="btn btn-dashed color-2 ms-1 btn-pill">
                                        Swimming Pool
                                    </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- single property start --> */}
      <section className="single-property">
        <div className="container">
          <div className="row ratio_65">
            <div className="col-xl-9 col-lg-8">
              <div className="description-section">
                <div className="description-details">
                  <div className="desc-box">
                    <div className="menu-top" id="searchBar">
                      <div className="container">
                        <ul className="nav">
                          <li className="active">
                            <a className="" href="#about">
                              about
                            </a>
                          </li>
                          <li>
                            <a className="" href="#feature">
                              feature
                            </a>
                          </li>
                          <li>
                            <a className="" href="#gallery">
                              gallery
                            </a>
                          </li>
                          <li>
                            <a className="" href="#video">
                              video
                            </a>
                          </li>
                          <li>
                            <a className="" href="#details">
                              details
                            </a>
                          </li>
                          <li>
                            <a className="" href="#floor_plan">
                              Floor plan
                            </a>
                          </li>
                          <li>
                            <a className="" href="#location-map">
                              Location
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="about page-section" id="about">
                      <h4>Property Brief</h4>
                      <div className="row">
                        {/* <div className="col-sm-4" > */}
                        <p>{propertyDetails.description}</p>
                        {/* </div> */}
                        {/*<div className="col-sm-4">
                                                     <p>
                                                        connected residences might be owned by a single
                                                        entity and leased out, or owned separately with an
                                                        agreement covering the relationship between units
                                                        and common.
                                                    </p> 
                                                </div>
                                                <div className="col-sm-4">
                                                    {/* <p>
                                                        they are connected to neighbouring residences and
                                                        land. Different types of housing tenure can be used
                                                        for the same physical type.
                                                    </p> 
                                                </div>*/}
                      </div>
                    </div>
                  </div>
                  <div className="desc-box">
                    <div className="page-section feature-dec" id="feature">
                      <h4 className="content-title">features</h4>
                      <div
                        className="single-feature "
                        style={{
                          display: "grid",
                          gridTemplateColumns: "auto auto auto ",
                          gridTemplateRows: "auto auto auto auto",
                        }}
                      >
                        {propertyDetails.additionalFeatures?.map((feature) => {
                          return (
                            <ul>
                              <li>
                                <i className="fas fa-check"></i>
                                {feature}
                              </li>
                            </ul>
                          );
                        })}
                        {/* <div className="col-xxl-3 col-xl-4 col-6"> */}
                        {/* <ul>

                                                        <li>
                                                            <i className="fas fa-wifi"></i> Free Wi-Fi
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-hands"></i> Elevator Lift
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-power-off"></i> Power Backup
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-monument"></i> Laundry Service
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-xxl-3 col-xl-4 col-6">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-user-shield"></i> Security Guard
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-video"></i> CCTV
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-door-open"></i> Emergency Exit
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-first-aid"></i> Doctor On Call
                                                        </li>
                                            </ul> */}
                        {/* </div> 
                                                <div className="col-xxl-3 col-xl-4 col-6">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-shower"></i> Shower
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-car"></i> free Parking in the
                                                            area
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-fan"></i> Air Conditioning
                                                        </li>
                                                    </ul>*/}
                        {/* </div>  */}
                      </div>
                    </div>
                  </div>
                  <div className="desc-box">
                    <div className="page-section ratio3_2" id="gallery">
                      <h4 className="content-title">gallery</h4>
                      {/* <div className="single-gallery">
                                                <div className="gallery-for">

                                                    <div style={{ width: "100%", display: "inline-block" }}>
                                                        <div>
                                                            <img
                                                                src={propertyDetails.urlarray?.[0]}
                                                                className="bg-img"
                                                                alt=""
                                                                width="900px"
                                                                height="500px"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div>
                                                            <img
                                                                src={propertyDetails.urlarray?.[1]}
                                                                className="bg-img"
                                                                alt=""
                                                                width="900px"
                                                                height="500px"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            {propertyDetails.urlarray?.[2] ?
                                                                <img
                                                                    src={propertyDetails.urlarray?.[2]}
                                                                    className="bg-img"
                                                                    alt=""
                                                                    width="900px"
                                                                    height="500px"
                                                                /> : ""}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div>
                                                            {propertyDetails.urlarray?.[3] ?
                                                                <img
                                                                    src={propertyDetails.urlarray?.[3]}
                                                                    className="bg-img"
                                                                    alt=""
                                                                    width="900px"
                                                                    height="500px"
                                                                />
                                                                : ""}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            {propertyDetails.urlarray?.[4] ?
                                                                <img
                                                                    src={propertyDetails.urlarray?.[4]}
                                                                    className="bg-img"
                                                                    alt=""
                                                                    width="900px"
                                                                    height="500px"
                                                                />
                                                                : ""}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gallery-nav">
                                                    <div>
                                                        <img
                                                            src={propertyDetails.urlarray?.[0]}
                                                            className="img-fluid"
                                                            alt=""
                                                            width="900px"
                                                            height="500px"
                                                        />
                                                    </div>
                                                    <div>
                                                        <img
                                                            src={propertyDetails.urlarray?.[1]}
                                                            className="img-fluid"
                                                            alt=""
                                                            width="900px"
                                                            height="500px"
                                                        />
                                                    </div>
                                                    <div>
                                                        {propertyDetails.urlarray?.[2] ?
                                                            <img
                                                                src={propertyDetails.urlarray?.[2]}
                                                                className="img-fluid"
                                                                alt=""
                                                                width="900px"
                                                                height="500px"
                                                            /> : ""}
                                                    </div>
                                                    <div>{propertyDetails.urlarray?.[3] ?
                                                        <img
                                                            src={propertyDetails.urlarray?.[3]}
                                                            className="img-fluid"
                                                            alt=""
                                                            width="900px"
                                                            height="500px"
                                                        /> : ""}
                                                    </div>
                                                    <div>{propertyDetails.urlarray?.[4] ?
                                                        <img
                                                            src={propertyDetails.urlarray?.[4]}
                                                            className="img-fluid"
                                                            alt=""
                                                            width="900px"
                                                        /> : ""}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="desc-box">
                                        <div className="page-section ratio_40" id="video">
                                            <h4 className="content-title">video</h4>
                                            <div className="play-bg-image">
                                                <div>
                                                    <img
                                                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F11%20(1).jpg?alt=media&token=96811497-5a70-4a9e-953f-9d39dcbfbaed"
                                                        className="bg-img"
                                                        alt=""
                                                        width="100%"
                                                    />
                                                </div>
                                                <div className="icon-video">
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#videomodal"
                                                    >
                                                        <i className="fas fa-play"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                      <div className="container mt-5">
                        <div className="carousel-container position-relative row">
                          <div
                            id="myCarousel"
                            className="carousel slide"
                            data-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div
                                className="carousel-item active"
                                data-slide-number="0"
                              >
                                <img
                                  src={propertyDetails.urlarray?.[0]}
                                  className="d-block w-100"
                                  alt="..."
                                  data-remote={propertyDetails.urlarray?.[0]}
                                  data-type="image"
                                  data-toggle="lightbox"
                                  data-gallery="example-gallery"
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-slide-number="1"
                              >
                                <img
                                  src={propertyDetails.urlarray?.[1]}
                                  className="d-block w-100"
                                  alt="..."
                                  data-remote={propertyDetails.urlarray?.[1]}
                                  data-type="image"
                                  data-toggle="lightbox"
                                  data-gallery="example-gallery"
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-slide-number="2"
                              >
                                <img
                                  src={propertyDetails.urlarray?.[2]}
                                  className="d-block w-100"
                                  alt="..."
                                  data-remote={propertyDetails.urlarray?.[2]}
                                  data-type="image"
                                  data-toggle="lightbox"
                                  data-gallery="example-gallery"
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-slide-number="3"
                              >
                                <img
                                  src={propertyDetails.urlarray?.[3]}
                                  className="d-block w-100"
                                  alt="..."
                                  data-remote={propertyDetails.urlarray?.[3]}
                                  data-type="image"
                                  data-toggle="lightbox"
                                  data-gallery="example-gallery"
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-slide-number="4"
                              >
                                <img
                                  src={propertyDetails.urlarray?.[4]}
                                  className="d-block w-100"
                                  alt="..."
                                  data-remote={propertyDetails.urlarray?.[4]}
                                  data-type="image"
                                  data-toggle="lightbox"
                                  data-gallery="example-gallery"
                                />
                              </div>
                              <div
                                className="carousel-item"
                                data-slide-number="5"
                              >
                                <img
                                  src={propertyDetails.urlarray?.[5]}
                                  className="d-block w-100"
                                  alt="..."
                                  data-remote={propertyDetails.urlarray?.[5]}
                                  data-type="image"
                                  data-toggle="lightbox"
                                  data-gallery="example-gallery"
                                />
                              </div>
                            </div>
                          </div>

                          {/* <!-- Carousel Navigation --> */}
                          <div
                            id="carousel-thumbs"
                            className="carousel slide"
                            data-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <div className="row mx-0">
                                  <div
                                    id="carousel-selector-0"
                                    className="thumb col-4 col-sm-2 px-1 py-2 selected"
                                    data-target="#myCarousel"
                                    data-slide-to="0"
                                  >
                                    <img
                                      src={propertyDetails.urlarray?.[0]}
                                      className="img-fluid"
                                      alt="..."
                                      width="200px"
                                    />
                                  </div>
                                  <div
                                    id="carousel-selector-1"
                                    className="thumb col-4 col-sm-2 px-1 py-2"
                                    data-target="#myCarousel"
                                    data-slide-to="1"
                                  >
                                    <img
                                      src={propertyDetails.urlarray?.[1]}
                                      className="img-fluid"
                                      alt="..."
                                    />
                                  </div>
                                  {propertyDetails.urlarray?.[2] ? (
                                    <div
                                      id="carousel-selector-2"
                                      className="thumb col-4 col-sm-2 px-1 py-2"
                                      data-target="#myCarousel"
                                      data-slide-to="2"
                                    >
                                      <img
                                        src={propertyDetails.urlarray?.[2]}
                                        className="img-fluid"
                                        alt="..."
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {propertyDetails.urlarray?.[3] ? (
                                    <div
                                      id="carousel-selector-3"
                                      className="thumb col-4 col-sm-2 px-1 py-2"
                                      data-target="#myCarousel"
                                      data-slide-to="3"
                                    >
                                      <img
                                        src={propertyDetails.urlarray?.[3]}
                                        className="img-fluid"
                                        alt="..."
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {propertyDetails.urlarray?.[4] ? (
                                    <div
                                      id="carousel-selector-4"
                                      className="thumb col-4 col-sm-2 px-1 py-2"
                                      data-target="#myCarousel"
                                      data-slide-to="4"
                                    >
                                      <img
                                        src={propertyDetails.urlarray?.[4]}
                                        className="img-fluid"
                                        alt="..."
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {propertyDetails.urlarray?.[5] ? (
                                    <div
                                      id="carousel-selector-5"
                                      className="thumb col-4 col-sm-2 px-1 py-2"
                                      data-target="#myCarousel"
                                      data-slide-to="5"
                                    >
                                      <img
                                        src={propertyDetails.urlarray?.[5]}
                                        className="img-fluid"
                                        alt="..."
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="row mx-0">
                                  <div
                                    id="carousel-selector-6"
                                    className="thumb col-4 col-sm-2 px-1 py-2"
                                    data-target="#myCarousel"
                                    data-slide-to="6"
                                  >
                                    <img
                                      src={propertyDetails.urlarray?.[0]}
                                      className="img-fluid"
                                      alt="..."
                                    />
                                  </div>
                                  <div
                                    id="carousel-selector-7"
                                    className="thumb col-4 col-sm-2 px-1 py-2"
                                    data-target="#myCarousel"
                                    data-slide-to="7"
                                  >
                                    <img
                                      src={propertyDetails.urlarray?.[1]}
                                      className="img-fluid"
                                      alt="..."
                                    />
                                  </div>
                                  <div
                                    id="carousel-selector-8"
                                    className="thumb col-4 col-sm-2 px-1 py-2"
                                    data-target="#myCarousel"
                                    data-slide-to="8"
                                  >
                                    <img
                                      src={propertyDetails.urlarray?.[2]}
                                      className="img-fluid"
                                      alt="..."
                                    />
                                  </div>
                                  <div
                                    id="carousel-selector-9"
                                    className="thumb col-4 col-sm-2 px-1 py-2"
                                    data-target="#myCarousel"
                                    data-slide-to="9"
                                  >
                                    <img
                                      src={propertyDetails.urlarray?.[3]}
                                      className="img-fluid"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="col-2 px-1 py-2"></div>
                                  <div className="col-2 px-1 py-2"></div>
                                </div>
                              </div>
                            </div>
                            {/* <a className="carousel-control-prev" href="#carousel-thumbs" role="button" data-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="carousel-control-next" href="#carousel-thumbs" role="button" data-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Next</span>
                                                </a> */}
                          </div>
                        </div>
                        {/* <!-- /row --> */}
                      </div>
                      {/* <!-- /container --> */}
                    </div>
                  </div>

                  <div className="desc-box">
                    <div className="page-section" id="details">
                      <h4 className="content-title">
                        Property Details
                        <a
                          href="https://www.google.com/maps/place/New+York,+NY,+Bangalore/@40.697488,-73.979681,8z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-map-marker-alt"></i> view on map
                        </a>
                      </h4>
                      <div className="row">
                        <div className="col-md-6 col-xl-4">
                          <ul className="property-list-details">
                            <li>
                              <span>Property Type :</span>
                              {propertyDetails.propertyType}
                            </li>
                            <li>
                              <span>Property ID :</span> ZOEA245
                            </li>
                            <li>
                              <span>Property status :</span>
                              {propertyDetails.propertyStatus}
                            </li>
                            <li>
                              <span>Operating Since :</span> 2008
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-xl-4">
                          <ul className="property-list-details">
                            <li>
                              <span>Price :</span>
                              {propertyDetails.price}
                            </li>
                            <li>
                              <span>Property Size :</span>
                              {propertyDetails.area}
                            </li>
                            <li>
                              <span>Balcony :</span>
                              {propertyDetails.balcony}
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-xl-4">
                          <ul className="property-list-details">
                            <li>
                              <span>City :</span>
                              {propertyDetails.city}
                            </li>
                            <li>
                              <span>Bedrooms :</span>
                              {propertyDetails.beds}
                            </li>
                            <li>
                              <span>Bathrooms :</span>
                              {propertyDetails.baths}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h4 className="content-title mt-4">Attachments</h4>
                      <a href="javascript:void(0)" className="attach-file">
                        <i className="far fa-file-pdf"></i>Demo Property
                        Document{" "}
                      </a>
                    </div>
                  </div>
                  <div className="desc-box">
                    <div className="page-section" id="floor_plan">
                      <h4 className="content-title">Floor plan</h4>
                      <img
                        src={propertyDetails.floorurlarray}
                        alt=""
                        className="img-fluid"
                        width="900px"
                      />
                    </div>
                  </div>
                  <div className="desc-box">
                    <div className="page-section" id="location-map">
                      <h4 className="content-title">Location</h4>
                      <iframe
                        title="realestate location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+Bangalore!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  {/* <div className="desc-box">
                    <div className="page-section">
                      <h4 className="content-title">Reviews</h4>
                      <div className="review">
                        <div className="review-box">
                          <div className="media">
                            <img
                              src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2FuserProfile%2F3.jpg?alt=media&token=8d577ff4-968e-489b-b658-cbe98cee89b0"
                              className="img-70"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Olive Yew</h6>
                              <p>Sep 13, 2022</p>
                              <p className="mb-0">
                                The location, view from the rooms are just
                                awesome. Very cool landscaping has been done
                                Around the hotel. There are small activities
                                that you can indulge with your family.
                              </p>
                            </div>
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="review-box review-child">
                          <div className="media">
                            <img
                              src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2F4%20(1).jpg?alt=media&token=0442ac00-a6c7-436c-8e75-4ef15271d2db"
                              className="img-70"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Allie Grater</h6>
                              <p>Sep 25, 2022</p>
                              <p className="mb-0">
                                We were there for 3 nights and hotel was too
                                good. Greenery was flaunting everywhere. There
                                were games kept for our entertainment.
                              </p>
                            </div>
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="review-box">
                          <div className="media">
                            <img
                              src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2F2.jpg?alt=media&token=0f3e90d4-d553-41f4-814b-649c38bcc1b6"
                              className="img-70"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Walter Melon</h6>
                              <p>Oct 20, 2022</p>
                              <p className="mb-0">
                                {" "}
                                There are small activities that you can indulge
                                with your family. Very cool landscaping has been
                                done Around the hotel. The location, view from
                                the rooms are just awesome.
                              </p>
                            </div>
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <h4 className="content-title">Write a Review</h4>
                      <form className="review-form">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Comment"
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          onclick="document.location='submit-property.html'"
                          className="btn btn-gradient color-2 btn-pill"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
  </div>*/}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="left-sidebar sticky-cls single-sidebar">
                <div className="filter-cards">
                  <div className="advance-card">
                    <h6>Contact Info</h6>
                    <div className="category-property">
                      <div className="agent-info">
                        <div className="media">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F3.png?alt=media&token=a43e2409-29f3-481a-a1cd-0923f60b69de"
                            className="img-50"
                            alt=""
                          />
                          <div className="media-body ms-2">
                            <h6>Jonathan Scott</h6>
                            <p>Contact@gmail.com</p>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <i data-feather="map-pin" className="me-2"></i>A-32,
                          Albany, Newyork.
                        </li>
                        <li>
                          <i data-feather="phone-call" className="me-2"></i>
                          (+066) 518 - 457 - 5181
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="advance-card">
                    <h6>Request exploration</h6>
                    <div className="category-property">
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            placeholder="phone number"
                            className="form-control"
                            name="mobnumber"
                            id="tbNumbers"
                            oninput="maxLengthCheck(this)"
                            type="tel"
                            onkeypress="javascript:return isNumber(event)"
                            maxlength="9"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            placeholder="Message"
                            className="form-control"
                            rows="3"
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          onclick="document.location='user-listing.html'"
                          className="btn btn-gradient color-2 btn-block btn-pill"
                        >
                          Submit Request
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="advance-card">
                    <h6>filter</h6>
                    <div className="row gx-2">
                      <div className="col-12">
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle font-rubik angle-down"
                            data-bs-toggle="dropdown"
                          >
                            <span>Investment Structure</span>
                            <span>
                              <i className="fas fa-angle-down"></i>
                            </span>
                          </span>
                          <div className="dropdown-menu text-start">
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Debt
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Equity
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Mezzanine Debt
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Portfolio
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Preferred Equity
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              REIT
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle font-rubik"
                            data-bs-toggle="dropdown"
                          >
                            <span>Investment Strategy</span>
                            <span>
                              <i className="fas fa-angle-down"></i>
                            </span>
                          </span>
                          <div className="dropdown-menu text-start">
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Core
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Core Plus
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Value Add
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Cottage
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Opportunistic
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle font-rubik"
                            data-bs-toggle="dropdown"
                          >
                            <span>Property Location</span>
                            <span>
                              <i className="fas fa-angle-down"></i>
                            </span>
                          </span>
                          <div className="dropdown-menu text-start">
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Property Location
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              New Delhi
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Bangalore
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Mumbai
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Lucknow
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle font-rubik"
                            data-bs-toggle="dropdown"
                          >
                            <span>Minimun Investment</span>
                            <span>
                              <i className="fas fa-angle-down"></i>
                            </span>
                          </span>
                          <div className="dropdown-menu text-start">
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Less than 10,000
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              10,000 - 25,000
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              25,000 - 50,000
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              More than 50,000
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle font-rubik"
                            data-bs-toggle="dropdown"
                          >
                            <span>Minimum Hold Period</span>
                            <span>
                              <i className="fas fa-angle-down"></i>
                            </span>
                          </span>
                          <div className="dropdown-menu text-start">
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              0-2 years
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              2-5 years
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              5-10 years
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              More than 10 years
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <a
                          href="list-left-sidebar.html"
                          className="btn btn-gradient color-2 btn-block btn-pill mt-2"
                        >
                          Search{" "}
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                  {/* <div className="advance-card feature-card">
                                        <h6>Featured</h6>
                                        <div className="feature-slider">
                                            <div className="feature-container">
                                                <img
                                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F4.jpg?alt=media&token=2774369b-8a80-4459-8227-c3c245627c70"
                                                    className="bg-img"
                                                    alt=""
                                                    width="274px"
                                                    height="200px"
                                                />
                                                <div className="bottom-feature property2">
                                                    <h5>Neverland</h5>
                                                    <h6>
                                                        ₹13,000 <small>/ start from</small>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div>
                                                <img
                                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F16.jpg?alt=media&token=1c5c3ff8-b3bb-426c-bf33-3964bcae343a"
                                                    className="bg-img"
                                                    alt=""
                                                    width="273px"
                                                    height="200px"
                                                />
                                                <div className="bottom-feature property2">
                                                    <h5>Neverland</h5>
                                                    <h6>
                                                        ₹13,000 <small>/ start from</small>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div>
                                                <img
                                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F14.jpg?alt=media&token=f2cb22cb-7e43-4ee2-bcd6-59e072b5ff30"
                                                    className="bg-img"
                                                    alt=""
                                                    width="100%"
                                                    height="200px"
                                                />
                                                <div className="bottom-feature property2">
                                                    <h5>Neverland</h5>
                                                    <h6>
                                                        ₹13,000 <small>/ start from</small>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="labels-left">
                                            <span className="label label-success">featured</span>
                                        </div>
                                    </div>
                                    <div className="advance-card">
                                        <h6>Recently Added</h6>
                                        <div className="recent-property">
                                            <ul>
                                                <li>
                                                    <div className="media">
                                                        <img
                                                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F9%20(1).jpg?alt=media&token=e4d95dc6-45c6-407c-a354-b902e103b3b3"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                        <div className="media-body">
                                                            <h5>Sea Breezes</h5>
                                                            <span>
                                                                ₹9800 / <span>Month</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <img
                                                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F10.jpg?alt=media&token=352f7cb1-b6ed-4344-9a00-34996ef23e9a"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                        <div className="media-body">
                                                            <h5>Orchard House</h5>
                                                            <span>
                                                                ₹7500 / <span>Month</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <img
                                                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F11%20(1).jpg?alt=media&token=96811497-5a70-4a9e-953f-9d39dcbfbaed"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                        <div className="media-body">
                                                            <h5>Neverland</h5>
                                                            <span>
                                                                ₹5000 / <span>Month</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                  <div className="advance-card">
                    <h6>Mortgage</h6>
                    <div className="category-property">
                      <form>
                        <div className="input-group mb-3">
                          <span className="input-group-text">₹</span>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Loan Amount"
                            required
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">₹</span>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Down Payment"
                            required
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">%</span>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Rate of Interest"
                            required
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">₹</span>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Number Of years"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-gradient color-2 btn-block btn-pill"
                        >
                          Calculate
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- single property end --> */}

      {/* <!-- property grid start --> 
      {/* <section className="property-section pt-0">
        <div className="container">
          <div className="title-3 text-start inner-title">
            <h2>Related Properties</h2>
          </div>
          <div className="row ratio_55">
            <div className="col-12 property-grid-3">
              <div className="property-2 row column-sm zoom-gallery property-label property-grid">
                <div className="col-xl-4 col-md-6">
                  <div className="property-box">
                    <div className="property-image">
                      <div className="property-slider">
                        <a href="javascript:void(0)">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F10.jpg?alt=media&token=352f7cb1-b6ed-4344-9a00-34996ef23e9a"
                            className="bg-img"
                            alt=""
                            width="500px"
                            height="340px"
                          />
                        </a>
                        <a href="javascript:void(0)">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F5.jpg?alt=media&token=5b06a685-0f1c-467f-88c2-100ed2421524"
                            className="bg-img"
                            alt=""
                            width="500px"
                            height="340px"
                          />
                        </a>
                        <a href="javascript:void(0)">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F3.jpg?alt=media&token=9429c4ec-99d2-46c6-be3c-4fc961660a64"
                            className="bg-img"
                            alt=""
                            width="500px"
                            height="340px"
                          />
                        </a>
                        <a href="javascript:void(0)">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F4.jpg?alt=media&token=2774369b-8a80-4459-8227-c3c245627c70"
                            className="bg-img"
                            alt=""
                            width="500px"
                            height="340px"
                          />
                        </a>
                      </div>
                      <div className="labels-left">
                        <div>
                          <span className="label label-shadow">sale</span>
                        </div>
                      </div>
                      <div className="seen-data">
                        <i data-feather="camera"></i>
                        <span>10</span>
                      </div>
                      <div className="overlay-property-box">
                                                <a href="compare.html" className="effect-round" data-bs-toggle="tooltip" data-bs-placement="left" title="Compare">
                                                    <i data-feather="shuffle"></i>
                                                </a>
                                                <a href="user-favourites.html" className="effect-round like" data-bs-toggle="tooltip" data-bs-placement="left" title="wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </div> 
                    </div>

                    <div className="property-details">
                      <span className="font-roboto">New Delhi</span>
                      <a href="single-property-8.html">
                        <h3>Little Acorn Farm</h3>
                      </a>
                      <h6>₹50,000</h6>
                      <p className="font-roboto">
                        Real estate is divided into several categories,
                        including residential property, commercial property and
                        industrial property.
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
                          Sq Ft : 5000
                        </li>
                      </ul>
                      <div className="property-btn d-flex">
                        <span>August 4, 2022</span>
                        <a href="/property">
                          <button
                            type="button"
                            onclick="document.location='/property'"
                            className="btn btn-dashed btn-pill color-2"
                          >
                            Details
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="property-box">
                    <div className="property-image">
                      <div className="property-slider">
                        <a href="javascript:void(0)">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F14.jpg?alt=media&token=f2cb22cb-7e43-4ee2-bcd6-59e072b5ff30"
                            className="bg-img"
                            alt=""
                            width="500px"
                            height="340px"
                          />
                        </a>
                        <a href="javascript:void(0)">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F6.jpg?alt=media&token=805779cc-2507-41d6-a067-ef24eae1504d"
                            className="bg-img"
                            alt=""
                            width="500px"
                            height="340px"
                          />
                        </a>
                        <a href="javascript:void(0)">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F10.jpg?alt=media&token=352f7cb1-b6ed-4344-9a00-34996ef23e9a"
                            className="bg-img"
                            alt=""
                            width="500px"
                            height="340px"
                          />
                        </a>
                        <a href="javascript:void(0)">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F9%20(1).jpg?alt=media&token=e4d95dc6-45c6-407c-a354-b902e103b3b3"
                            className="bg-img"
                            alt=""
                            width="500px"
                            height="340px"
                          />
                        </a>
                      </div>
                      <div className="labels-left">
                        <div>
                          <span className="label label-dark">no fees</span>
                        </div>
                        <span className="label label-success">open house</span>
                      </div>
                      <div className="seen-data">
                        <i data-feather="camera"></i>
                        <span>42</span>
                      </div>
                       <div className="overlay-property-box">
                                                <a href="compare.html" className="effect-round" data-bs-toggle="tooltip" data-bs-placement="left" title="Compare">
                                                    <i data-feather="shuffle"></i>
                                                </a>
                                                <a href="user-favourites.html" className="effect-round like" data-bs-toggle="tooltip" data-bs-placement="left" title="wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </div> 
                    </div>
                    <div className="property-details">
                      <span className="font-roboto">Lucknow</span>
                      <a href="single-property-8.html">
                        <h3>Hidden Spring Hideway</h3>
                      </a>
                      <h6>₹50,000</h6>
                      <p className="font-roboto">
                        This home provides wonderful entertaining spaces with a
                        chef kitchen opening. Elegant retreat in a quiet Coral
                        Gables setting..
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
                          Sq Ft : 5000
                        </li>
                      </ul>
                      <div className="property-btn d-flex">
                        <span>July 18, 2022</span>
                        <a href="/property">
                          <button
                            type="button"
                            onclick="document.location='/property'"
                            className="btn btn-dashed btn-pill color-2"
                          >
                            Details
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="property-box">
                    <div className="property-image">
                      <div className="property-slider">
                        <a href="javascript:void(0)">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F12.jpg?alt=media&token=0ceb79d7-3c7b-4242-a0a0-c1d1b140db5e"
                            className="bg-img"
                            alt=""
                            width="500px"
                            height="340px"
                          />
                        </a>
                        <a href="javascript:void(0)">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F10.jpg?alt=media&token=352f7cb1-b6ed-4344-9a00-34996ef23e9a"
                            className="bg-img"
                            alt=""
                            width="500px"
                            height="340px"
                          />
                        </a>
                        <a href="javascript:void(0)">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F6.jpg?alt=media&token=805779cc-2507-41d6-a067-ef24eae1504d"
                            className="bg-img"
                            alt=""
                            width="500px"
                            height="340px"
                          />
                        </a>
                        <a href="javascript:void(0)">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F9%20(1).jpg?alt=media&token=e4d95dc6-45c6-407c-a354-b902e103b3b3"
                            className="bg-img"
                            alt=""
                            width="500px"
                            height="340px"
                          />
                        </a>
                      </div>
                      <div className="labels-left">
                        <div>
                          <span className="label label-shadow">sale</span>
                        </div>
                      </div>
                      <div className="seen-data">
                        <i data-feather="camera"></i>
                        <span>25</span>
                      </div>
                       <div className="overlay-property-box">
                                                <a href="compare.html" className="effect-round" data-bs-toggle="tooltip" data-bs-placement="left" title="Compare">
                                                    <i data-feather="shuffle"></i>
                                                </a>
                                                <a href="user-favourites.html" className="effect-round like" data-bs-toggle="tooltip" data-bs-placement="left" title="wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </div> 
                    </div>
                    <div className="property-details">
                      <span className="font-roboto">Bangalore</span>
                      <a href="single-property-8.html">
                        <h3>Home in Merrick Way</h3>
                      </a>
                      <h6>₹50,000</h6>
                      <p className="font-roboto">
                        Real estate market in most countries are not as organize
                        or efficient as markets for other, more liquid
                        investment instruments.
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
                          Sq Ft : 5000
                        </li>
                      </ul>
                      <div className="property-btn d-flex">
                        <span>January 6, 2022</span>
                        <a href="/property">
                          <button
                            type="button"
                            onclick="document.location='/property'"
                            className="btn btn-dashed btn-pill color-2"
                          >
                            Details
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <!-- property grid end --> */}
    </div>
  );
}

export default PropertyDetails;
