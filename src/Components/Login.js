import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../FirebaseAuth/firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock } from "react-feather";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDoc, doc } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const docref = doc(db, "adminUser", userCredential.user.uid);
        getDoc(docref)
          .then((doc) => {
            console.log(doc);
            if (doc.exists) {
              if (doc.data().isAdmin === "true") {
                navigate("/admin-panel");
                console.log("signed in");
              } else {
                logOut();
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setErr("Wrong Password");
          setTimeout(() => setErr(""), 3000);
        } else if (err.code === "auth/invalid-email") {
          setErr("Invalid Email");
        } else if (err.code === "auth/user-not-found") {
          setErr("User Not Found");
        } else {
          setErr(err.message);
        }
      });
  };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log('signed in')
  //       // navigate("/admin-panel")
  //     } else {
  //       console.log('signed out')
  //       // navigate("/login")
  //     }
  //   });
  // }, []);

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

  return (
    <div>
      <section className="breadcrumb-section p-0">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Finner-background.jpg?alt=media&token=8c27af4d-9eee-4aa4-87b8-b3fb6a0e8772"
          className="bg-img img-fluid"
          alt=""
          width="100%"
        />
        <div className="container">
          <div className="breadcrumb-content">
            <div>
              <h2>Log in</h2>
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/property-list">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Log in
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="login-wrap">
        <div className="container">
          <div className="row log-in">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
              <div className="theme-card">
                <div className="title-3 text-start">
                  <h2>Log in</h2>
                </div>
                <form>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <User />
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <Lock />
                        </div>
                      </div>
                      <input
                        type={seePassword ? "text" : "password"}
                        id="pwd-input"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                      />
                      <div className="input-group-apend">
                        <div
                          className="input-group-text"
                          onClick={() => setSeePassword(!seePassword)}
                        >
                          <i
                            id="pwd-icon"
                            className={
                              seePassword ? "far fa-eye" : "far fa-eye-slash"
                            }
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div className="important-note" style={{ color: "red" }}>
                      {err}
                    </div>
                  </div>
                  {/* <div className="d-flex">
                    <label className="d-block mb-0" for="chk-ani">
                      <input
                        className="checkbox_animated color-2"
                        id="chk-ani"
                        type="checkbox"
                      />{" "}
                      <span>Remember me</span>
                    </label>
                    <a
                      href="/forgotPassword"
                      className="font-rubik text-color-2"
                    >
                      Forgot password ?
                    </a>
                  </div>*/}
                  <div>
                    <button
                      type="submit"
                      className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                      style={{ cursor: "pointer", width: "130px" }}
                      onClick={signIn}
                    >
                      Log in
                    </button>
                    {/* <a
                      href="/signup"
                      className="btn btn-dashed btn-pill color-2"
                    >
                      Create Account
                    </a> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
