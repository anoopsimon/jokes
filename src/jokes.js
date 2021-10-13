import React, { Component } from "react";
import axios from "axios";
import { Box, Text, Center, Heading, CircularProgress } from "@chakra-ui/react";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      loading: true,
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
          this.setState({ jokes: res.data.jokes, loading: false });
        },
        { headers }
      );
  };

  jokes = () => {
    return this.state.jokes.map((joke, key) => (
      <Box
        key={key}
        border={3}
        borderRadius={"lg"}
        bg="var(--chakra-colors-teal-300)"
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
            paddingLeft=".6rem"
            paddingTop=".6rem"

          >
            {joke.category}
          </Text>

          <Text
            mt={2}
            fontSize="lg"
            bgClip="text"
            fontWeight="bold"
            color="white"
            padding="1rem"
          >
            {joke.joke}
          </Text>
        </Box>
      </Box>
    ));
  };

  render() {
    if (this.state.loading) {
      return (
        <Center>
          <CircularProgress isIndeterminate color="#7928CA"></CircularProgress>
        </Center>
      );
    }
    return (
      <>
        {this.header()}
        <Center>
          <Box p={4} display={{ md: "flex" }}>
            {this.jokes()}
          </Box>
        </Center>
      </>
    );
  }

  header() {
    return (
      <Box p={4} display={{ md: "flex" }}>
        <Center>
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Joke.
          </Heading>
        </Center>
      </Box>
    );
  }
}

export default Jokes;
