import { useState, useEffect } from "react";
import {
  Airplay,
  BarChart,
  Bell,
  ChevronsLeft,
  ChevronsRight,
  Grid,
  Layout,
  Mail,
  Save,
  Search,
  Settings,
} from "react-feather";
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { db } from "../FirebaseAuth/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  orderBy,
  query,
  getDoc,
  doc,
  setDoc,
  where,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../FirebaseAuth/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Select from "react-select";
import "../styles/Investment.css";

function Investment() {
  const [sideBar, setSideBar] = useState(false);
  const [details, setDetails] = useState({
    investmentAmount: "",
    investmentPercentage: "",
    investmentDate: "",
    investmentDuration: "",
  });
  const navigate = useNavigate();
  const [propertyOptions, setPropertyOptions] = useState([]);
  const [customerOptions, setCustomerOptions] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [successAlert, setSuccessAlert] = useState(false);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/investment");
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
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "propertyDetails"),
          orderBy("id", "asc")
        );
        const querySnapshot = await getDocs(q);
        const optionsData = querySnapshot.docs.map((doc) => ({
          value: `${doc.data().id} - ${doc.data().propertyName} - ${
            doc.data().docId
          }`,
          label: `${doc.data().id} - ${doc.data().propertyName}`,
        }));
        setPropertyOptions(optionsData);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "kyc"));
        const querySnapshot = await getDocs(q);
        const optionsData = querySnapshot.docs.map((doc) => ({
          value: `${doc.data().fullName} - ${doc.data().uid}`,
          label: doc.data().fullName,
        }));
        setCustomerOptions(optionsData);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchData();
  }, []);

  const handleProperty = async (propertySelected) => {
    const value = propertySelected.value;
    const parts = value.split(" - ");
    const docId = parts[parts.length - 1];
    setSelectedProperty(docId);
  };

  const handleCustomer = (customerSelected) => {
    const value = customerSelected.value;
    const parts = value.split(" - ");
    const uid = parts[parts.length - 1];
    setSelectedCustomer(uid);
  };

  const onChangeHandler = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const customDocId = selectedCustomer;

      const investedPropertiesDocRef = doc(
        db,
        "investedProperties",
        customDocId
      );
      const propertiesSubcollectionRef = collection(
        investedPropertiesDocRef,
        "investmentDetails"
      );

      await addDoc(propertiesSubcollectionRef, {
        property: selectedProperty,
        customer: selectedCustomer,
        investmentAmount: Number(details.investmentAmount),
        investmentPercentage: Number(details.investmentPercentage),
        investmentDate: details.investmentDate,
        investmentDuration: Number(details.investmentDuration),
        createdAt: new Date(),
      });

      setSuccessAlert(true);
      setTimeout(() => setSuccessAlert(false), 3000);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <div>
      {/* <!-- Loader start --> */}
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
      {/* <!-- Loader end --> */}

      <div className="page-wrapper">
        {/* <!-- page header start --> */}
        <div
          className={
            sideBar ? "page-main-header row close_Icon" : "page-main-header row"
          }
        >
          <div
            id="sidebar-toggle"
            className="toggle-sidebar col-auto"
            onClick={() => setSideBar(!sideBar)}
          >
            {sideBar ? <ChevronsRight /> : <ChevronsLeft />}
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
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F3.png?alt=media&token=a43e2409-29f3-481a-a1cd-0923f60b69de"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <ul className="profile-dropdown onhover-show-div">
                  <li onClick={logOut}>
                    <a href="">
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
          <div className={sideBar ? "page-sidebar close_icon" : "page-sidebar"}>
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
                  <li className="sidebar-item">
                    <a href="/admin-panel" className="sidebar-link">
                      <Grid />
                      <span>Add property</span>
                    </a>
                  </li>

                  <li className="sidebar-item" style={{ cursor: "pointer" }}>
                    <a href="/property-list" className="sidebar-link">
                      <Layout />
                      <span>Property List</span>
                    </a>
                  </li>
                  <li className="sidebar-item" style={{ cursor: "pointer" }}>
                    <a href="/investment" className="sidebar-link active">
                      <BarChart />
                      <span>Investment</span>
                    </a>
                  </li>
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
                        Investment
                        {/* <small>Welcome to admin panel</small> */}
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
              {successAlert ? (
                <div className="alert alert-success" role="alert">
                  Details Successfully Submitted!
                </div>
              ) : (
                ""
              )}
            </div>
            {/* <!-- Container-fluid end --> */}

            {/* <!-- Container-fluid start --> */}
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header pb-0">
                      <h5>Add investment</h5>
                    </div>
                    <div className="card-body admin-form">
                      <form
                        className="row gx-3"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <div className="form-group col-sm-4">
                          <label>Property</label>

                          <Select
                            options={propertyOptions}
                            isSearchable
                            placeholder="Select an option"
                            onChange={handleProperty}
                          />
                        </div>
                        <div className="form-group col-sm-4">
                          <label>Customer</label>

                          <Select
                            options={customerOptions}
                            isSearchable
                            placeholder="Select an option"
                            onChange={handleCustomer}
                          />
                        </div>
                        <div className="form-group col-sm-4">
                          <label>Investment Amount</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="₹2800"
                            name="investmentAmount"
                            value={details.investmentAmount}
                            onChange={onChangeHandler}
                            required=""
                          />
                        </div>
                        <div className="form-group col-sm-4">
                          <label>Investment Percentage</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="20%"
                            name="investmentPercentage"
                            value={details.investmentPercentage}
                            onChange={onChangeHandler}
                            required
                          />
                        </div>
                        <div className="form-group col-sm-4">
                          <label>Investment Date</label>
                          <input
                            type="date"
                            className="form-control"
                            name="investmentDate"
                            value={details.investmentDate}
                            onChange={onChangeHandler}
                            required
                          />
                        </div>
                        <div className="form-group col-sm-4">
                          <label>Investment Duration</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="2years"
                            name="investmentDuration"
                            value={details.investmentDuration}
                            onChange={onChangeHandler}
                            required
                          />
                        </div>

                        <div className="form-btn col-sm-12">
                          {/* <button type="button" className="btn btn-pill btn-gradient color-4 " style={{ width: "100px" }} onClick={() => {uploadFloorPlan(); uploadProperty();}}>Upload</button> */}
                          <button
                            type="submit"
                            className="btn btn-pill btn-gradient color-4 "
                            style={{ width: "150px" }}
                            onClick={submitHandler}
                          >
                            Submit
                          </button>
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
    </div>
  );
}

export default Investment;
