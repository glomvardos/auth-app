import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='h-screen flex items-center justify-center p-3'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
