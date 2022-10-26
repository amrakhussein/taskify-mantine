import { Container } from '@mantine/core'
import TheFooter from './TheFooter'
import TheHeader from './TheHeader'

interface LayoutProps {
  children: JSX.Element
  count: Number | String
}

export default function Layout({ children, count }: LayoutProps) {
  return (
    <>
      <TheHeader count={count} />
      <Container size='xl'>{children}</Container>
      <TheFooter />
    </>
  )
}
