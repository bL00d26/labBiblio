import React, { useEffect, useState } from "react";
import { db } from "../db/firebase";
import { loadUser } from "../db/controller";
const Home = () => {
  const userID = JSON.parse(sessionStorage.getItem("userID"));
  const [user, setUser] = useState(false);
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    async function data() {
      db.collection("usuarios")
        .doc(userID)
        .onSnapshot(function (doc) {
          setUser(doc.data());
        });
      db.collection("inventario").onSnapshot((querySnapshot) => {
        let array = [];
        querySnapshot.forEach((doc) => {
          array.push(doc.data());
        });
        setInventory(array);
      });
    }
    data();
  }, [userID]);

  const returnResource = async (e, loan) => {
    e.preventDefault();
  };
  const requestResource = async (e, object) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {user !== false && inventory !== [] ? (
            <div>
              <h3>{user.email}</h3>
              <ul className="list-group">
                <h2>MIS PRÉSTAMOS</h2>
                {user.loans.map((loan, index) => (
                  <li key={index} className="list-group-item">
                    {loan}
                    <button
                      className="btn btn-primary float-right"
                      onClick={(e) => returnResource(e, loan)}
                    >
                      DEVOLVER
                    </button>
                  </li>
                ))}
              </ul>
              <div className="row">
              <div className="col-6">
                <ul className="list-group">
                  <h2>INVENTARIO</h2>
                  {inventory.map((object, index) => (
                    <li key={index} className="list-group-item">
                      <h3>{object.name}</h3>{" "}
                      <h3 className="float-right"> - {object.author}</h3>
                      <button
                        className="btn btn-primary float-right"
                        onClick={(e) => requestResource(e, object)}
                      >
                        SOLICITAR
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
             
            </div>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
