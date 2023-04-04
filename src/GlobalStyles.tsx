import React from "react";
import { Global, css } from "@emotion/react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    backgroundColor: "#03060a",
    color: "#fff",
    ...tw`antialiased`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
