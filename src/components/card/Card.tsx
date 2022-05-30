import React from "react"
import styled from 'styled-components'

type CardProps = {
  width?: string | Number
  height?: string | Number
  src?: string
  title?: string
  content?: string
  date?: string
}

const CardOutline = styled.div<{ width: string | Number; height: string | Number }>`
  width: ${(props: any) => props.width}px;
  height: ${(props: any) => props.height}px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
  position: relative;
`

const CardImage = styled.div`
  width: 100%;
  height: 60%;
  box-sizing: border-box;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CardTitle = styled.div`
  width: 100%;
  height: auto;
  padding: 8px 16px;
  font-size : 24px;
  line-height : 1;
`

const CardContent = styled.div`
  width: 100%;
  height: auto;
  margin-left: 16px;
  margin-right: 16px;
  font-size: 12px;

  /* text truncate 3行で省略する */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const CardDate = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin: 16px;
  color: #bbbbbb;
  font-size: 12px;
`


const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div>
      <CardOutline 
        width={props.width === undefined ? "300" : props.width } 
        height={props.height === undefined ? "400" : props.height }>
        <CardImage>
          <Image src={props.src} />
        </CardImage>
        <CardTitle>
          {props.title}
        </CardTitle>
        <CardContent>
          {props.content}
        </CardContent>
        <CardDate>
          {props.date}
        </CardDate>
      </CardOutline>
    </div>
  )
}

export default Card