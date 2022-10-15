import React, { useState } from 'react'

interface Props {
  description: string
}

const ReadMore: React.FC<Props> = (props: Props) => {
  var text: string = props.description
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  return (
    <p className="text w-[100%] break-all">
      {isReadMore ? text.slice(0, 20) : text}
      <span onClick={toggleReadMore} className="cursor-pointer text-accent">
        {text.length > 20 ? (isReadMore ? '...Read more' : ' Show less') : ''}
      </span>
    </p>
  )
}

export default ReadMore
