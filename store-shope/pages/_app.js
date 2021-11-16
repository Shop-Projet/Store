import "../public/scss/style.scss";
import "../public/scss/plugins/owl-carousel/owl.carousel.scss";
import Layout from "../components/layout.jsx";
import { useStore } from "react-redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../store/index.js";
import { actions as demoAction } from "../store/demo";
import { useEffect } from "react";
import Helmet from "react-helmet";

const WrappedApp = ({ Component, pageProps }) => {
  const store = useStore();
  useEffect(() => {
    if (store.getState().demo.current != process.env.NEXT_PUBLIC_DEMO) {
      store.dispatch(demoAction.refreshStore(process.env.NEXT_PUBLIC_DEMO));
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        persistor={store.__persistor}
        loading={
          <div className="loading-overlay">
            <div className="bounce-loader">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </div>
        }
      >
        <Helmet>
          <title>Sghyrna</title>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="images/logo-ico.ico"
          />
        </Helmet>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
};

WrappedApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default wrapper.withRedux(WrappedApp);
