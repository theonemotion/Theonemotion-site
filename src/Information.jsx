import { useState, useRef, useEffect } from 'react'
import { Box, Heading, Text, Image, Button} from "@chakra-ui/react";
import { Carousel } from 'antd';

function Information() {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    }

    return (
        <Box className='info'>
            <Box w='100%' color='#171717' h='600px' display='flex' flexDir='column' alignItems={'center'} textAlign='center' marginBottom='400px' id='hero'>
                <Heading marginBottom='5' className='heading'>Welcome to TheOneMotion</Heading>
                <Text className='aboutus'>Our mission is to help businesses throughout the world <a className='purple'>exceed their goals</a> <br/> and to help them take their businesses to the next level.</Text>
                <Box marginTop='16'>
                    <Heading>Meet the team</Heading>
                    <Box display='flex' w='400px' justifyContent='space-around' marginTop='2'>
                        <Box>
                            <Image src='src/assets/aboutus/File2.jpg' borderRadius={'10px'} width='70%' marginLeft='25%'/>
                            <Box>
                                <Heading size='xs'>Saad Shaikh</Heading>
                                <Text>CEO & Founder</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Image src='src/assets/aboutus/File1.jpg' borderRadius={'10px'} width='70%' marginLeft='25%'/>
                            <Box>
                                <Heading size='xs'>Emmanuel Bacolod</Heading>
                                <Text>CFO & Co-founder</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Text width='900px' textAlign={'center'} marginTop='20' className='aboutus'>
                    We are driven by creativity, we are film and media graduates with marketing background.
                    We’ve always had a goal to use our skills to help other businesses and individuals reach
                    their goals and build long lasting mutually beneficial relations along the way. We want to be
                    known for our creativity and passion for building ideas and executing them with our partners
                    and helping them become the best in their field whilst we do the same and that is when we
                    decided to start TheOneMotion.
                </Text>
            </Box>
            <Box style={{backgroundImage: 'url("src/assets/wallpaper.jpg"'}}>
                <Box w='100%' h='800px'  display={'flex'}  color='white' id='ads'>
                    <Box className='image-container'>
                        <Image src='src/assets/fb.png' id='image1' className='image img1'/>
                        <Image src='src/assets/IG.png' id='image2' className='image hide'/>
                        <Image src='src/assets/SC.png' id='image3' className='image hide'/>
                        <Image src='src/assets/Tiktok.png' id='image4' className='image hide'/>
                        <Image src='src/assets/YT.png' id='image5' className='image hide'/>
                    </Box>
                    <Box textAlign={'center'} className='text-container'>
                        <Heading>Paid Ads</Heading>
                        <Text w='600px'>
                            Here at Theonemotion, we keep things simple for you and we take
                            care of the complex parts. Our goal is to create a <a className='purple'>high return on ad
                            spend</a> (ROAS) with little to no work for our clients. Our in-house
                            team creates <a className='purple'>successful campaigns</a> by conducting research and
                            performing data and trend analysis. You tell us what you want and let
                            us handle the rest.
                        </Text>
                    </Box>
                </Box>
                <Box w='100%' color='white' display='flex' paddingTop='200px' paddingBottom='200px' id='content'>
                    <Box marginLeft='15%' w='100%'>
                        <Carousel className='carousel'>
                            <video id='video1' src='src/assets/I_m Sorry Sam Trailer.mp4' width={'400px'} controls/>
                            <video id='video1' src='src/assets/GoI.mp4' width={'400px'} controls />
                            <video id='video1' src='src/assets/TPTBAP.mp4' width={'400px'} controls />
                            <video id='video1' src='src/assets/TME.mp4' width={'400px'} controls />

                        </Carousel>
                    </Box>
                    <Box textAlign={'center'} marginRight='20%'>
                        <Heading>Content Creation</Heading>
                        <Text w='600px'>
                            Creativity can’t be taught, you either have it or you don’t! Here at
                            Theonemotion, we pride ourselves on our creative nature since we
                            approach each of our client's creative needs in a <a className='purple'>unique way.</a> Whether
                            you need creatives for your ad campaigns and social media marketing,
                            or if you need a music video shot and edited, <a className='purple'>we do it all.</a> And we do
                            it well.
                        </Text> 
                    </Box>
                </Box>
                <Box w='100%' color='white' display='flex' paddingTop='200px' paddingBottom='200px' id='marketing'>
                    <Box marginLeft='15%' w='100%' marginTop='25px'>
                        <Box marginTop='-150px'>
                            <Heading marginLeft='150px' marginBottom='-65px'>Before</Heading>
                            <Image src='src/assets/marketing/Marketing2.png' className='image'/>
                        </Box>
                        <Box marginTop='300px'>
                            <Heading marginLeft='155px' marginBottom='-50px'>After</Heading>
                            <Image src='src/assets/marketing/Marketing1.png' className='image'/>
                        </Box>
                    </Box>
                    <Box textAlign={'center'} marginRight='20%' >
                        <Heading>Marketing</Heading>
                        <Text w='600px'>
                        Why spend your time handling and creating posts when you can focus
                        on growing your business and dealing with clients. Let us take care of
                        creating successful social media posts and raising your <a className='purple'>brand
                        awareness</a> as much as possible. We have our own secret formula to
                        help our clients gain an <a className='purple'>authentic following</a> over a period of time.
                        </Text> 
                    </Box>
                </Box>
                <Box w='100%' color='white' display='flex' paddingTop='200px' paddingBottom='200px' id='seo'>
                    <Box marginLeft='15%' w='100%'>
                        <video id='video1' width={'400px'} muted autoPlay preload loop className='round'>
                            <source src='src/assets/GoogleSEO.mp4' type="video/mp4" />
                        </video>
                    </Box>
                    <Box textAlign={'center'} marginRight='20%' >
                        <Heading>Google SEO</Heading>
                        <Text w='600px'>
                        One of the best ways to get <a className='purple'>organic traffic</a> for your website is through
                        Google SEO, did you know that 75% of users only take a look at the
                        first page on google, now unless you would like to be on the second
                        page or lower I recommend you to contact us so that we can improve
                        your page and start getting your business <a className='purple'>more leads</a> through Google SEO.
                        </Text> 
                    </Box>
                </Box>
                <Box w='100%' color='white' display='flex' paddingTop='200px' paddingBottom='200px' id='web-dev'>
                    <Box marginLeft='15%' w='100%'>
                        <Image src='src/assets/web-dev/File1.jpg' className='image round' id='web1' />
                        <Image src='src/assets/web-dev/File2.jpg' className='image hide round' id='web2' />
                        <Image src='src/assets/web-dev/File3.jpg' className='image hide round' id='web3' />
                        <Image src='src/assets/web-dev/File4.jpg' className='image hide round' id='web4' />
                    </Box>
                    <Box textAlign={'center'} marginRight='20%' >
                        <Heading>Web Development</Heading>
                        <Text w='600px'>
                        We create websites that are perfectly catered to your needs. Creative
                        and engaging websites that have your <a className='purple'>audience choosing you </a>
                        immediately and not looking elsewhere. Whether you would like a
                        multiple page website or a one page website, contact us and let us
                        create the <a className='purple'>perfect website for you.</a>
                        </Text> 
                    </Box>
                </Box>
                <Box w='100%' color='white' display='flex' paddingTop='200px' paddingBottom='200px' id='models'>
                    <Box marginLeft='15%' w='100%' marginTop='5%'>
                        <Image src='src/assets/models/File1.jpg' className='image round' id='model1'/>
                        <Image src='src/assets/models/File2.jpg' className='image hide round' id='model2'/>
                        <Image src='src/assets/models/File3.jpg' className='image hide round' id='model3'/>
                    </Box>
                    <Box textAlign={'center'} marginRight='20%' >
                        <Heading>Influencers and models</Heading>
                        <Text w='600px'>
                            Collaborate with the 1M social media influencers and models.
                            Influencers have a <a className='purple'>large audience</a> who keep up with their
                            socials for a specific topic. Take a look at our Influencers and
                            find the one who will <a className='purple'>grow your business</a> instantly, and if you
                            do not see anyone that fits your category do not worry, contact
                            us and we will find you an influencer that fits your criteria.
                            <br />
                            <br/>
                            Don’t forget about the 1M models, these models will be
                            perfect to <a className='purple'>market your business</a>, whether you need an athlete
                            for gym clothing, or a model that has experience with beauty
                            and make up. We have a variety of models that will <a className='purple'>represent
                            your brand</a> to the highest level.
                            <br />
                            <br />
                            Contact us today and <a className='purple'>collaborate</a> with the 1M influencers and
                            models.
                        </Text> 
                    </Box>
                </Box>
                <form className='form' action='mailto:admin@theonemotion.com' method='POST' enctype='text/plain'>
                    <Image src='src/assets/LogoForWebsuteNEW.png'  w='500px' marginBottom='-50px' marginTop='-100px'/>
                    <Button type='submit' colorScheme={'whiteAlpha'}  marginBottom='30px'>Email Us</Button>
                </form>
                <Box color='white' paddingTop='48' paddingBottom={'24'}>
                    <Heading textAlign={'center'} size='2xl'>Contact Us</Heading>
                    <Text textAlign={'center'} className='aboutus'>
                    Email: <b>admin@theonemotion.com</b> <br />
                    Instagram: <b>theonemotion_</b> <br />
                    TikTok: <b>theonemotion</b> <br />
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Information;