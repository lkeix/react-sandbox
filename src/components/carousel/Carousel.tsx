import styled from 'styled-components'
import Card from '../card/Card'

const Slides = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behaivior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Slide = styled.div`
  margin: 8px;
`

const Carousel = () => {

  const width = 400
  const height = 300

  return (
    <Slides>
      <Slide>
        <Card 
            src="https://placehold.jp/640x360.png" 
            width={width}
            height={height}
            title='hello'
            content='react-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandbox'
            date='2022/05/28' />
      </Slide>
      <Slide>
        <Card 
            src="https://placehold.jp/640x360.png" 
            width={width}
            height={height}
            title='hello'
            content='react-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandbox'
            date='2022/05/28' />
      </Slide>
      <Slide>
        <Card 
            src="https://placehold.jp/640x360.png" 
            width={width}
            height={height}
            title='hello'
            content='react-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandbox'
            date='2022/05/28' />
      </Slide>
      <Slide>
        <Card 
            src="https://placehold.jp/640x360.png" 
            width={width}
            height={height}
            title='hello'
            content='react-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandbox'
            date='2022/05/28' />
      </Slide>
      <Slide>
        <Card 
            src="https://placehold.jp/640x360.png" 
            width={width}
            height={height}
            title='hello'
            content='react-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandbox'
            date='2022/05/28' />
      </Slide>
    </Slides>
  )
}

export default Carousel