import React from "react"
import useScreenSize from "./useScreenSize"

const ResponsiveWrapper = ({ mobileComponent: MobileComponent, desktopComponent: DesktopComponent }) => {
  const isLargeScreen = useScreenSize()

  return React.createElement(isLargeScreen ? DesktopComponent : MobileComponent)
}

export default ResponsiveWrapper