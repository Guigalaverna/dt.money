import Document, { Head, Html, Main, NextScript } from "next/document";
import { getCssText, globalStyles } from "../styles";

export default class MyDocument extends Document {
  render() {
    globalStyles();
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
