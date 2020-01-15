import * as React from "react";
import { render } from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import { color, variant, ColorProps } from "styled-system";
import { Global } from "./components/Global";

type FooProps = {
  size: "s" | "m" | "l";
};

const Foo = styled.div<FooProps & ColorProps>`
  ${variant({
    prop: "size",
    key: "fooSizes"
  })}
  ${color}
`;

const theme = {
  fooSizes: {
    s: {
      padding: "0.5rem"
    },
    m: {
      padding: "1rem"
    },
    l: {
      padding: "2rem"
    }
  }
};

function App() {
  return (
    <div>
      <Global />
      <ThemeProvider theme={theme}>
        <Foo bg="blue" color="white" size="s">
          S
        </Foo>
        <Foo bg="green" color="white" size="m">
          M
        </Foo>
        <Foo bg="orange" color="white" size="l">
          L
        </Foo>
      </ThemeProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
