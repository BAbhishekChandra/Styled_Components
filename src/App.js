import {Heading, CustomButton} from './styledComponents'

import './App.css'

// <h1 className="heading">Hello World</h1>
// <CustomButton type="button" color= "#0070c1" bgColor= "#ffffff">Click</CustomButton>
// <CustomButton type="button" color= "#ffffff" bgColor= "#0070c1">Click</CustomButton>
// <CustomButton type="button" outline = {false}>Click</CustomButton>
// <CustomButton type="button" outline = {true}>Click</CustomButton>

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <CustomButton type="button">Click</CustomButton>
    <CustomButton type="button" outline>
      Click
    </CustomButton>
  </>
)
export default App
