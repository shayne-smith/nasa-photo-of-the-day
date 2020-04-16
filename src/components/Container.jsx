// exports a styled div
// should bring in the .container styles inside styles.less
// should allow an optional 'flex' prop to set display: flex
// prove you can use nesting of styles, like in less
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 8px;
  padding: 12px;
  background-color: white;
`

export default Container