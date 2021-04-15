import * as React from "react"
import LandingLayout from "../layouts/LandingLayout";
import Header from "../components/Header";
import AppInfo from "../components/AppInfo"
import AppDescription from "../components/AppDescription";
import MapDescription from "../components/MapDescription/MapDescription";
import PromoteDescription from "../components/promoteDescription";
import Footer from "../components/Footer";
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