import Section from "./Section";
import image from "../assets/battery3.png";
import {Box, Grid, useMediaQuery} from "@mui/material";
import TextBox from "./TextBox";
import PrimaryButton from "./PrimaryButton";
import AnimatedComponent from "./AnimatedComponent";
import AnimateBox from "./AnimateBox";

const Battery = () => {
    const isMobile = useMediaQuery('(max-width: 600px)');
    const isSmall = useMediaQuery('(max-width: 900px)');
    const isTablet = useMediaQuery('(max-width: 1200px)');

    const contentArray = [
        { title: 'Batteriekapazität', text: '450 kW' },
        { title: 'Ladezeit bis 80% ', text: '45 min' },
        { title: 'Reichweite', text: '300 km' },
    ];

    return (
        <Section backgroundColor={"white"}
                 padding={'0'}
                 sx={{
                     display: 'flex',
                     flexDirection: 'column',
                 }}
        >

            <Box sx={{
                display: 'flex',
                flexDirection: isTablet ? 'column' : 'row',
            }}>
                <Box sx={{

                    width: isTablet? '100%' :'80%',
                    position : 'relative',
                }}>

                        <img src={image} alt="range" width={'100%'}/>


                    <Box style={
                        {
                            width: '100%',
                            position: 'absolute',
                            bottom: '4rem',
                            display: 'flex',
                            justifyContent: 'center',
                           }
                    }>
                        <AnimatedComponent content={contentArray} />
                    </Box>

                </Box>


                <Box sx={
                    {
                        display: 'flex',
                        flexDirection: (isTablet&& ! isSmall)? 'row': 'column',
                        justifyContent: isTablet?'flex-start': 'space-between',
                        textAlign: 'center',
                        width: isTablet? 'fill' :'300px',
                        padding: '3rem',
                        gap: '2rem',

                    }
                }
                >
                    <AnimateBox>
                    <TextBox  title={"Batterie"}
                             text={"Die Batterie ist das Herzstück des eMax. Sie ist in der Lage, eine Reichweite von bis zu 300 km zu erzielen. Die Batterie kann in 45 Minuten auf 80% aufgeladen werden."}
                             color={"black"}
                    />
                    </AnimateBox>
                    <Box>
                    <PrimaryButton  color={"black"} bg={"white"} bc={"black"}
                                    href="#data"                    >

                        Mehr erfahren
                    </PrimaryButton>

                </Box>
                </Box>
            </Box>
        </Section>

    )
}


export default Battery