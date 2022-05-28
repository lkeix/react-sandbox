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
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
  position: relative;
`

const CardImage = styled.div<{ src?: string; }>`
  width: 100%;
  height: 60%;
  background: url(${(props) => props.src}) no-repeat center;
  object-fit: cover;
  box-sizing: border-box;
`

const CardTitle = styled.div`
  width: 100%;
  height: auto;
  padding: 16px;
  font-size : 24px;
  line-height : 1;
`

const CardContent = styled.div`
  width: 100%;
  height: auto;
  margin-left: 16px;
  margin-right: 16px;
  font-size: 16px;
`

const CardDate = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin: 16px;
  color: #bbbbbb;
`


const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div>
      <CardOutline 
        width={props.width === undefined ? "300" : props.width } 
        height={props.height === undefined ? "400" : props.height }>
        <CardImage src={props.src} />
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