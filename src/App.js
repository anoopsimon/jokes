import * as React from "react"
import Jokes from './jokes'
import  {ChakraProvider}  from "@chakra-ui/react"

function App({ Component }) {
  return (
    <ChakraProvider>
      <Jokes></Jokes>
    </ChakraProvider>
  )
}

export default App;
