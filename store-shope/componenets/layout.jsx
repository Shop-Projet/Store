import Footer from './footer.jsx'

const Layout = ({children}) => {
    return (  
        <div>
            {children}
           <Footer/>
        </div>
    );
}
 
export default Layout;