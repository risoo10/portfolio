import React from "react"
// import styles from "./layout.module.scss"
import Navigation from "../navigation/navigation"
import { $lightBackgroundColor } from "../../constants"

const navigationWrapperStyles = {
  backgroundColor: $lightBackgroundColor,
}

export default function Layout({ children }) {
  return <React.Fragment>
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div style={navigationWrapperStyles} className="col-2">
          <Navigation></Navigation>
        </div>
        <div className="col-10">
          { children }
        </div>
      </div>
    </div>
  </React.Fragment>
};