import { useEffect, useState } from "react";
import {
  Image,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import "./App.css";
import Information from "./Information";
import { Parallax } from "react-scroll-parallax";

function App() {
  const { progress, setProgress } = useState();
  var count = 0;
  var hero, img1, img2, img3, img4, img5;
  var mod1, mod2, mod3;
  var web1, web2, web3, web4;

  window.onscroll = () => {
    if (scrollY < 24) {
      window.scroll(0, 24);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      switch (count) {
        case 0:
          img1.classList.add("hide");
          img2.classList.remove("hide");
          mod1.classList.add("hide");
          mod2.classList.remove("hide");
          web1.classList.add("hide");
          web2.classList.remove("hide");
          count++;
          break;
        case 1:
          img2.classList.add("hide");
          img3.classList.remove("hide");
          mod2.classList.add("hide");
          mod3.classList.remove("hide");
          web2.classList.add("hide");
          web3.classList.remove("hide");
          count++;
          break;
        case 2:
          img3.classList.add("hide");
          img4.classList.remove("hide");
          mod3.classList.add("hide");
          mod2.classList.remove("hide");
          web3.classList.add("hide");
          web4.classList.remove("hide");
          count++;
          break;
        case 3:
          img4.classList.add("hide");
          img5.classList.remove("hide");
          mod2.classList.add("hide");
          mod1.classList.remove("hide");
          web1.classList.remove("hide");
          web4.classList.add("hide");
          count++;
          break;
        case 4:
          img5.classList.add("hide");
          img1.classList.remove("hide");
          count = 0;
          break;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  window.onload = () => {
    hero = document.getElementById("hero");
    img1 = document.getElementById("image1");
    img2 = document.getElementById("image2");
    img3 = document.getElementById("image3");
    img4 = document.getElementById("image4");
    img5 = document.getElementById("image5");
    mod1 = document.getElementById("model1");
    mod2 = document.getElementById("model2");
    mod3 = document.getElementById("model3");
    web1 = document.getElementById("web1");
    web2 = document.getElementById("web2");
    web3 = document.getElementById("web3");
    web4 = document.getElementById("web4");

    window.scroll(0, 24);

    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("heading-reveal");
        }
      });
    });

    observer.observe(document.querySelector(".heading"));
    observer.observe(document.querySelector(".infobox"));
  };

  return (
    <Box className="App" margin="0" padding="0">
      {/*
      <Navbar />
      <Image src='assets/Logo.png' className='hero-logo'  pos='absolute' left='40%' top='0px' />
      <Box w='100%' h='920px' backgroundColor='teal.500'>
        <Image src='assets/down.svg' w='50px' pos='absolute' top='800px' left='50%' onClick={() => {hero.scrollIntoView({behavior: 'smooth', block: 'center'})}}></Image>
      </Box>
      <Information />
      <FormControl backgroundColor='#171717' color='white' display='flex' flexDir='column' justifyContent='center' textAlign='center' alignItems='center'>
        <Image src='assets/Logo.png' className='toWhite' w='400px' marginBottom='-100px' marginTop='-100px'/>
        <Input type='text' w='600px' placeholder='Company Name' marginBottom='30px'/>
        <Input type='email' w='600px' placeholder='Your Email'  marginBottom='30px'/>
        <Input type='text' w='600px' h='200px' placeholder='Additional Information'  marginBottom='30px'/>
        <Button type='submit' colorScheme={'whiteAlpha'}  marginBottom='30px'>Submit</Button>
      </FormControl>
      */}
      <Navbar />
      <Parallax speed={40}>
        <Box className="wrapper">
          <video
            className="hero-video"
            src="assets/PotentialFinalDraft.mp4"
            controls
            muted
            autoPlay
            loop
          />
          <Image src="assets/LogoForWebsuteNEW.png" className="logo" />
          <Image
            src="assets/down.svg"
            className="toWhite"
            w="5%"
            pos="absolute"
            top="80%"
            left="45%"
            onClick={() => {
              hero.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          />
        </Box>
      </Parallax>
      <Information />
    </Box>
  );
}

export default App;
