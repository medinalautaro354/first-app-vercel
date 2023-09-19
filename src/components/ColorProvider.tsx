'use client';

import React from "react";

type Props = {
    children: JSX.Element | JSX.Element[]
}


const ColorProvider = ({ children} : Props) => {
    const [colorTheme, setColorTheme] = React.useState('light');
  const colorVariables = colorTheme === 'light'
    ? 'light'
    : 'dark';

  return (
    <body>
      {children}
      {colorVariables}
    </body>
  )
}

export default ColorProvider;