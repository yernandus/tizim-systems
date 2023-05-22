import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Root from "./screens/Root";

function App() {
  return (
    <ChakraProvider>
      <Root />
    </ChakraProvider>
  );
}

export default App;
