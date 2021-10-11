import React, { Component } from "react";
import axios from "axios";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Link, Box, Text, Image ,Center, Square, Circle} from "@chakra-ui/react";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: null,
    };
  }
   componentDidMount = async()=> {
    const headers = {
      "Content-Type": "text/plain",
    };
    await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=single").then(
      (res) => {
        console.log("Response : " + res.data);
        this.setState({ jokes: res.data });
      },
      { headers }
    );
  }

  render() {
    return (
      <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Center  h="100px" color="white">
        <Box p={4} display={{ md: "flex" }}>
          <Box flexShrink={0}>
            <Image
              borderRadius="lg"
              width={{ md: 40 }}
              src="https://bit.ly/2jYM25F"
              alt="Woman paying for a purchase"
            />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="sm"
              letterSpacing="wide"
              color="teal.600"
            >
              {this.state.jokes?.category}
            </Text>
            <Link
              mt={1}
              display="block"
              fontSize="lg"
              lineHeight="normal"
              fontWeight="semibold"
              href="#"
            >
              {this.state.type}
            </Link>
            <Text mt={2} color="gray.500">
              {this.state.jokes?.joke}
            </Text>
          </Box>
        </Box>
        </Center>
      </>
    );
  }
}

export default Jokes;
