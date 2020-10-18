import React from 'react'
import ReactDOM from 'react-dom'

type Props = {
  name: string
}

const Hello: React.FC<Props> = ({ name = "David" }) => (
  <div>Hello qwe {name}!</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})

