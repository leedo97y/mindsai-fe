import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      black: string;
      red: string;
      gray: string;
      darkGray: string;
    };
  }
}
