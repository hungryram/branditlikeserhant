import localFont from "next/font/local"
 
 
// Font files can be colocated inside of `app`
export const HelveticaNue = localFont({
  src: './Helvetica-Neue-LT-Std-95-Black.woff2',
  display: 'swap',
  variable: '--heading-font'
})

export const HouseSlant = localFont({
  src: './HouseSlant-Regular.otf',
  display: 'swap',
  variable: '--secondary-heading-font'
})

export const SignPainter = localFont({
  src: './signpainter.ttf',
  display: 'swap',
  variable: '--secondary-body-font'
})