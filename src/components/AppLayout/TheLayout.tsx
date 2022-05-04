import { Container } from '@mantine/core'
import TheHeader from './TheHeader'

interface LayoutProps {
  children: JSX.Element[]
  count: number | string
}

export default function Layout({ children, count }: LayoutProps) {
  return (
    <>
      <TheHeader count={count} />
      <Container size='xl'>{children}</Container>
    </>
  )
}
