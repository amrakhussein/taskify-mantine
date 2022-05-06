import { Box, Text } from '@mantine/core'

export default function TheFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingInline: '1rem',
      }}
      component='footer'
    >
      <Text component='p'>
        Check Source Code - github repo:{' '}
        <a target='_blank' href='https://github.com/amromoorie/taskify-mantine'>
          github.com/amromoorie/taskify-mantine
        </a>{' '}
      </Text>
    </Box>
  )
}
