import styled from "styled-components"

const Container = styled.div<{ width: string, height: string, display: string}>`
  width: ${(props: any) => props.width}px;
  height: ${(props: any) => props.height}px;
  display: ${(props: any) => props.display};
`

export default Container