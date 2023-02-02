import { Heading, Box, Text, Image } from '@chakra-ui/react';

const Struct = (props) => {
    return (
        <Box backgroundColor='#171717' color='white'  paddingBottom='500px'>
                <Box display='flex' alignItems={'center'}>
                    <Box marginLeft='20%' textAlign={'center'}>
                        <Heading>{props.header}</Heading>
                        <Text w='400px'>
                            {props.text}
                        </Text>
                    </Box>
                </Box>
            </Box>
    )
}

export default Struct;