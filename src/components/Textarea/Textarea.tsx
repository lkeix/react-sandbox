import styled from "styled-components"

const Textarea = styled.textarea<{height?: string}>`
  border: 1px solid #e0e0e0;
  width: 100%;
  height: ${(props: any) => props.height};
  min-height: 100px;
  outline: none;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 16px;
  box-sizing: border-box;
  -webkit-appearance: none;
  resize: vertical;
  /* not display resizer */
  &::-webkit-resizer {
    display: none;
  }
`

export default Textarea