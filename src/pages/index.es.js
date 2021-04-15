import * as React from "react"
import LandingLayout from "../layouts/LandingLayout/index";
import Header from "../components/Header/index";
import AppInfo from "../components/AppInfo/index"
import AppDescription from "../components/AppDescription/index";
import MapDescription from "../components/MapDescription/index";
import PromoteDescription from "../components/PromoteDescription/index";
import Footer from "../components/Footer/index";
import Seo from "../components/seo"
import ReactGa from 'react-ga';

export default function IndexPage() {

  //Initialize Google Analytics and report the page view
  ReactGa.initialize('G-W4QNLEDPB5');
  ReactGa.pageview("/es");

  return (
    <LandingLayout lang="es">
      <Seo lang="es" />
      <Header lang="es"/>
      <AppInfo lang="es"/>
      <AppDescription lang="es"/>
      <MapDescription lang="es"/>
      <PromoteDescription lang="es"/>
      <Footer />
    </LandingLayout>
  )
}