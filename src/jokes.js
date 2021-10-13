import React, { Component } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Center,
  Heading,
  CircularProgress
} from "@chakra-ui/react";



class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      loading:true
    };
  }

  componentDidMount = async () => {
    const headers = {
      "Content-Type": "text/plain",
    };
    await axios
      .get(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10"
      )
      .then(
        (res) => {
          this.setState({ jokes: res.data.jokes ,loading:false});
        },
        { headers }
      );
  };

  render() {
    if(this.state.loading){
      return <Center>
        <CircularProgress isIndeterminate color="#7928CA">
        </CircularProgress>
        </Center>
    }
    return (
      <>
        <br></br>
        <Box p={4} display={{ md: "flex" }}>
          <Center>
          <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          >Joke.
          </Heading>
          </Center>
        </Box>
        <Center>
          <Box p={4} display={{ md: "flex" }}>
            {this.state.jokes.map((joke, key) => (
              <Box key={key}
               border={3}
               borderRadius={"lg"} 
               marginBottom="2rem"
               width={"fit-content"}
               blockSize={"fit-content"}
               
               >
               
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                  <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="teal.600"
                  >
                    {joke.category}
                  </Text>

                  <Text
                    mt={2}
                    color="gray.500"
                    fontSize="lg"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontWeight="bold"
                  >
                    {joke.joke}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Center>
      </>
    );
  }
}

export default Jokes;
