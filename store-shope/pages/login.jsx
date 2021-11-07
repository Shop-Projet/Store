import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import ALink from "../componenets/features/alink";

function Login() {
  return (
    <div className="main">
      <nav className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Accueil</ALink>
            </li>
            <li className="breadcrumb-item active">Connexion</li>
          </ol>
        </div>
      </nav>
      <div
        className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
        style={{
          backgroundImage: `url(images/backgrounds/login-bg2.jpg)`,
          opacity: 1,
        }}
      >
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              <Tabs selectedTabClassName="show" defaultIndex={0}>
                <TabList className="nav nav-pills nav-fill">
                  <Tab className="nav-item">
                    <span className="nav-link">S&apos;identifier</span>
                  </Tab>

                  <Tab className="nav-item">
                    <span className="nav-link">S&apos;inscrire</span>
                  </Tab>
                </TabList>

                <div className="tab-content">
                  <TabPanel style={{ paddingTop: "2rem" }}>
                    <div>
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="singin-email-2">
                            Nom d&apos;utilisateur ou addresse mail *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="singin-email-2"
                            name="singin-email"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="singin-password-2">
                            Mot de passe *
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="singin-password-2"
                            name="singin-password"
                            required
                          />
                        </div>

                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>CONNEXION</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>

                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="signin-remember-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="signin-remember-2"
                            >
                              se souvenir de moi
                            </label>
                          </div>

                          <ALink href="/pages/login" className="forgot-link">
                            Mot de passe oublié?
                          </ALink>
                        </div>
                      </form>
                      <div className="form-choice">
                        <p className="text-center">ou se connecter </p>
                        <div className="row">
                          <div className="col-sm-6">
                            <ALink
                              href="/pages/login"
                              className="btn btn-login btn-g"
                            >
                              <i className="icon-google"></i>
                              avec Google
                            </ALink>
                          </div>
                          <div className="col-sm-6">
                            <ALink
                              href="/pages/login"
                              className="btn btn-login btn-f"
                            >
                              <i className="icon-facebook-f"></i>
                              avec Facebook
                            </ALink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <form action="#">
                      <div className="form-group">
                        <label htmlFor="register-email-2">
                          Adresse Email *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="register-email-2"
                          name="register-email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="register-password-2">
                          Mot de passe *
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="register-password-2"
                          name="register-password"
                          required
                        />
                      </div>

                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>S&apos;INSCRIRE</span>
                          <i className="icon-long-arrow-right"></i>
                        </button>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="register-policy-2"
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="register-policy-2"
                          >
                            J&apos;accepte la politique de confidentialité *
                          </label>
                        </div>
                      </div>
                    </form>
                    <div className="form-choice">
                      <p className="text-center">ou se connecter </p>
                      <div className="row">
                        <div className="col-sm-6">
                          <ALink
                            href="/pages/login"
                            className="btn btn-login btn-g"
                          >
                            <i className="icon-google"></i>
                            avec Google
                          </ALink>
                        </div>
                        <div className="col-sm-6">
                          <ALink
                            href="/pages/login"
                            className="btn btn-login  btn-f"
                          >
                            <i className="icon-facebook-f"></i>
                            avec Facebook
                          </ALink>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
