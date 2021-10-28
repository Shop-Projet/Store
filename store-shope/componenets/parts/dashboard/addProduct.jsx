import React, { useState }  from 'react'


export default function AddProduct() {
    const [image, setImage] = useState('')
    const [nomProduit, setNomProduit]= useState('')
    const [description, setDescription] = useState('')
    const [prix, setprix] = useState(0)
    const [categorie, setCategorie] = useState('')

    const imageHandler = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            let src = URL.createObjectURL(e.target.files[0])
            setImage(src)
          }
    }

    return (
        <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12">
              <h2 className="title-lg text-center mb-4">Ajouter un nouveau article</h2>
              </div>
            </div>
            <div className="row tm-edit-product-row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <form action="" className="tm-edit-product-form">
                  <div className="form-group mb-3">
                    <label htmlFor="name">Nom du produit </label> <br/>
                    <input id="name" name="name" type="text" className="form-control validate" required="" onChange={e=>setNomProduit(e.target.value)}/>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control validate" rows="3" required="" onChange={e=> setDescription(e.target.value)}></textarea>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="category">Catégorie</label>
                    <select className="custom-select tm-select-accounts" id="category" onChange={e => {setCategorie(e.target.value);}}>
                      <option selected="">Séléctionner une catégorie</option>
                      <option value="1">Naissance</option>
                      <option value="2">Jeux d&apos;éveil</option>
                      <option value="3">Jeux éducatifs</option>
                      <option value="4">Jeux créatifs</option>
                      <option value="5">Jeux de construction</option>
                      <option value="6">Sport et activités en plein air</option>
                      <option value="7">Média et jeux vidéo</option>
                      <option value="8">Scolaire</option>
                      <option value="9">Décoration</option>
                      <option value="10">Livres</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="name">Prix </label> <br/>
                    <input id="price" name="name" type="number" className="form-control validate" required="" onChange={e=>setprix(e.target.value)}/>
                  </div>
              </form></div>
              <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-5">
                <div className="wrapper ">
                   {!image ?
                   <div> <img  src="images/dashboard/inputImage.PNG" alt="" className="rounded mx-auto d-block img-fluid img-thumbnail" style={{height:"280px", width:"400px"}}/></div>
                   :
                   <div> <img  src={image} alt="" className="rounded mx-auto d-block img-fluid img-thumbnail" style={{height:"280px", width:"400px"}}/></div>
                   } 
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFileLang" lang="fr" onChange={ imageHandler}/>
                        <label className="custom-file-label" htmlFor="customFileLang">Ajouter votre image</label>
                    </div>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block text-uppercase" >Je vends</button>
              </div>
            </div>
          </div>
    )
}
