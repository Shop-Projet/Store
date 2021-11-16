import { React, useState, useEffect } from "react";

export default function NbrDenfants() {
  const [nbrEnfants, setNbrEnfants] = useState(1);
  const [id, setId] = useState(null);
  const [age, setAge] = useState(null);
  const [unite, setUnite] = useState(null);
  const [enfants, setEnfants] = useState(null);

  useEffect(() => {
    setEnfants({ ...enfants, [id]: { age, unite } });
  }, [unite, age]);

  return (
    <div>
      <form action="#">
        <div className="row">
          <div className="col-lg-6 col-md-4  col-xl-7 col-sm-4">
            <label htmlFor="nbenfant">Nombre d'enfants</label>
            <br />
            <select
              id="nbenfant"
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
                  <div className="col-lg-7 col-sm-6 col-md-6" key={index}>
                    <label>Age de votre enfant </label>
                    <input
                      type="telephone"
                      className="form-control"
                      onChange={(e) => {
                        setAge(e.target.value);
                        setId(index + 1);
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
                      id="unite"
                      className="form-control form-select"
                      onChange={(e) => {
                        setUnite(e.target.value);
                      }}
                      required
                    >
                      <option disabled selected value={null}>
                        Unité
                      </option>
                      <option value="mois">mois</option>
                      <option value="ans">ans</option>
                    </select>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
}
