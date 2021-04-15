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
  ReactGa.pageview("/en");

  return (
    <LandingLayout lang="en">
      <Seo lang="en" />
      <Header lang="en"/>
      <AppInfo lang="en"/>
      <AppDescription lang="en"/>
      <MapDescription lang="en"/>
      <PromoteDescription lang="en"/>
      <Footer />
    </LandingLayout>
  )
}

