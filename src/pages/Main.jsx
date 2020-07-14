import React, { useState } from "react";
import { loginDB,registerDB } from "../db/controller";

const Main = (props) => {
  const [loginView, setLoginView] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const login = async (e,email,password)=>{
    e.preventDefault();
    try {
    let res = await loginDB(email,password);
   
    sessionStorage.setItem('userID',JSON.stringify(res.user.uid));
    props.history.push('/home');
        
    } catch (error) {
        console.log(error);
    }
  }
  const register = async (e,email,password)=>{
    e.preventDefault();
    try {
       await registerDB(email,password);
   
        setEmail('');
        setPassword('');
    } catch (error) {
        console.log(error);
    }
  }
  
  
  return (
    <div className="container">
      <div className="row mt-5">
        <h1 className="mx-auto">Biblioteca</h1>
        <div className="col-6">
          {loginView ? (
            <div>
              <h2>LOGIN</h2>
              <form className="form-group" onSubmit={(e) => login(e,email,password)}>
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="form-control mt-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="row">
                  <div className="col-4">
                    <button className="btn btn-primary mt-2" type="submit">
                      LOGIN
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-secondary mt-2"
                      type="button"
                      onClick={(e) => setLoginView(false)}
                    >
                      REGISTRO
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <h2>REGISTRO</h2>
              <form className="form-group" onSubmit={(e) => register(e,email,password)}>
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="form-control mt-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="row">
                  <div className="col-4 mt-2">
                    <button className="btn btn-primary" type="submit">
                      REGISTRO
                    </button>
                  </div>
                  <div className="col-4 mt-2">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={(e) => setLoginView(true)}
                    >
                      ATRÁS
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
