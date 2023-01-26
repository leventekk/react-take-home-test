import type { PropsWithChildren, ReactElement } from 'react'

const Category = ({ title, children }: PropsWithChildren<{ title: string }>): ReactElement => (
  <div>
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
)

export default Category
