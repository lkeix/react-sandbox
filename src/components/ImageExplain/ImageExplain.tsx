import React, { useCallback, useRef } from "react"
import Container from '../Container/Container'
import Image from "../Image/Image"
import styled from "styled-components"
import Textarea from "../Textarea/Textarea"
import { text } from "stream/consumers"

const ImageWrapper = styled.div`
  width: 25%;
  height: 25%;
`

const TextareaWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
`


const ImageExplain: React.FC = () => {

  const textarea = useRef<HTMLTextAreaElement>(null)
  const textareaWrapper = useRef<HTMLDivElement>(null)

  const [textareaHeight, setTextareaHeight] = React.useState(textarea.current?.offsetHeight)

  const useTextareaEffect = useCallback(() => {
    setTextareaHeight(textarea.current?.scrollHeight)
  }, [textarea])

  const min = (a: number, b: number): number => {
    if (a > b) {
      return b
    }
    return a
  }

  const handleTextareaChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const scrollTop = textarea.current?.scrollTop === undefined ? 0 : textarea.current?.scrollTop
    const scrollHeight = textarea.current?.scrollHeight === undefined ? 0 : textarea.current?.scrollHeight
    const wrapperHeight = textareaWrapper.current?.clientHeight === undefined ? 0 : textareaWrapper.current?.clientHeight
    
    console.log(wrapperHeight)
    setTextareaHeight(min(scrollHeight - scrollTop, wrapperHeight - 36))
  }, [])

  return(
    <Container 
    ref={textareaWrapper}
    width='100%' 
    height="100%" 
    position="relative"
    display="flex"
    maxHeight="300px">
      <ImageWrapper>
        <Image src="/logo512.png" />
      </ImageWrapper>
      <TextareaWrapper>
        <Textarea height={
          textarea.current?.scrollHeight === undefined ? 
          'auto' : 
          `${textarea.current?.scrollHeight}px`}
          onChange={handleTextareaChange} 
          ref={textarea}  />
      </TextareaWrapper>
    </Container>
  )
}

export default ImageExplain
