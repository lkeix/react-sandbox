import styled from "styled-components"

const Container = styled.div<{ width?: string, height?: string, display?: string, position?: string, maxHeight?: string}>`
  width: ${(props: any) => props.width === undefined ? 'auto' : props.width};
  height: ${(props: any) => props.height === undefined ? 'auto' : props.height};
  display: ${(props: any) => props.display === undefined ? 'flex' : props.display};
  position: ${(props: any) => props.position === undefined ? 'relative' : props.position};
  max-height: ${(props: any) => props.maxHeight === undefined ? 'none' : props.maxHeight};
`

export default Container