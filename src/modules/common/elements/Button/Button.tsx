import type { PropsWithChildren, ReactElement } from 'react'
import styled from 'styled-components'

const Button = ({ children }: PropsWithChildren): ReactElement => <button>{children}</button>

export default Button
