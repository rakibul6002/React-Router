import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import  Footer  from "../Footer/Footer";


export default function Home() {
  const navigation = useNavigation();
  return (
    <div className="max-w-screen-lg mx-auto ">
        <Header ></Header>
        {
          navigation.state ==='loading'?<div className="text-center mt-20"><span className="loading loading-spinner text-primary "></span></div>:<Outlet></Outlet>
        }
        
        <Footer></Footer>
        
    </div>
  )
}
