import React from "react"

const Home = props => (
  <Flex height='100vh' alignItems='center'>
    <Container py={[5, 6]} px={[3, 4, 5]}>
      <Div textAlign="center">
        <H1 fontSize={[4,5,7]} mt={0} mb={2}>
          Cloudflare Design
        </H1>
        <A
          color="gray.3"
          fontWeight={600}
          fontSize={[3,5]}
          href="https://www.cloudflare.com/careers/departments/design/"
        >
          Come work with us
        </A>
      </Div>
    </Container>
  </Flex>
)

export default Home
