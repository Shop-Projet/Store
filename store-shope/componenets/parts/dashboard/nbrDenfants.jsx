import { React, useState, useEffect } from "react";

export default function NbrDenfants() {
  const [nbrEnfants, setNbrEnfants] = useState(1);
  const [age, setAge] = useState(null);
  const [unite, setUnite] = useState("");
  const [enfants, setEnfants] = useState([]);

  useEffect(() => {
    setEnfants([...enfants, { id: null, age: age, unite: unite }]);
  }, [age, unite]);
  return (
    <div>
      <form action="#">
        <div className="row">
          <div className="col-lg-6 col-sm-5 ">
            <label htmlFor="etat">Nombre d'enfants</label>
            <br />
            <select
              id="etat"
              className="form-control form-select"
              onChange={(e) => {
                setNbrEnfants(e.target.value);
              }}
              required
            >
              <option value="" disabled selected hidden>
                Nombre d'enfants
              </option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
            </select>
          </div>
          <div className="row pl-3">
            {[...Array(+nbrEnfants)].map((item, index) => {
              return (
                <>
                  <div className="col-lg-6 col-sm-6" key={index}>
                    <label>Age de votre enfant </label>
                    <input
                      type="telephone"
                      className="form-control"
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                      maxLength={2}
                      required
                    />
                  </div>
                  <div className="col-lg-5 col-sm-5 ">
                    <label>
                      <br />
                    </label>

                    <select
                      id="etat"
                      className="form-control form-select"
                      onChange={(e) => {
                        setUnite(e.target.value);
                      }}
                      required
                    >
                      <option value="mois">mois</option>
                      <option value="ans">ans</option>
                    </select>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="pl-3 pt-3">
          <button type="submit" className="btn btn-outline-primary-2 ">
            <span>SAUVEGARDER LES MODIFICATIONS</span>
            <i className="icon-long-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
