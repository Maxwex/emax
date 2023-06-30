import React, {useRef, useState} from 'react';
import {TextField, Button, Box, Typography} from '@mui/material';
import emailjs from '@emailjs/browser';
import Section from "./Section";
import AnimateBox from "./AnimateBox";
import PrimaryButton from "./PrimaryButton";

const PreorderForm = () => {
    const key = process.env.REACT_APP_MAILJS_KEY;
    const serviceId = process.env.REACT_APP_MAILJS_SERVICE_ID;
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceId, 'template_puvnzh2', form.current, key)
            .then((result) => {
                console.log(result.text);
                setIsSubmitted(true);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <Section idName={"preorder"} minHeight={'100vh'} backgroundColor={"white"} padding={' 0 1rem'}>
            <Box pt={'5rem'} maxWidth="500px" mx="auto">
                <Typography variant="h4" mb='2rem' component={'h2'} style={{fontWeight: 'bold'}} color="primary"
                            textAlign="center">
                    Jetzt vorbestellen!
                </Typography>
                <AnimateBox>
                    <Typography variant="body1" mb={3} component={'p'} color="black" textAlign="center">
                        Seien Sie einer der Ersten, die den eMax fahren und erleben dürfen.
                        Sichern Sie sich jetzt einen platz auf der Warteliste.
                        Füllen Sie einfach das Formular aus und wir melden uns bei Ihnen. Beeilen Sie sich, da die Verfügbarkeit begrenzt ist!
                    </Typography>
                </AnimateBox>

            </Box>
            <Box maxWidth="500px" mx="auto">
                <AnimateBox>
                    {!isSubmitted ? (
                        <form ref={form} onSubmit={handleSubmit}>
                            <TextField
                                name="name"
                                label="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                name="email"
                                label="E-Mail"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                name="comment"
                                label="Kommentar (optional)"
                                value={formData.comment}
                                onChange={handleChange}
                                fullWidth
                                multiline
                                rows={4}
                                margin="normal"
                            />
                            <PrimaryButton bg={'black'} hc={'#333'} mt={2} type="submit" variant="contained" color="primary">
                                Vorbestellen
                            </PrimaryButton>
                        </form>
                    ) : (
                        <AnimateBox >
                        <Typography my={8} variant="h6" color="primary" textAlign="center">
                            Vielen Dank für Ihre Vorbestellung!


                        </Typography>
                        <Typography  variant="body1" color="primary" textAlign="center">
                            Wir werden uns in Kürze bei Ihnen melden. <br/><br/>
                            Ihr eMax Team


                        </Typography>
                            </AnimateBox        >
                    )}
                </AnimateBox>
            </Box>

            <Typography  variant="body2" color="primary" textAlign="center" mb={0} mt={4} maxWidth={'500px'}>
                Bitte beachten Sie, dass die Vorbestellung unverbindlich ist und keine rechtlichen Verpflichtungen zur Kaufverpflichtung beinhaltet. Die tatsächliche Bestellung und der Kaufvertrag erfolgen zu einem späteren Zeitpunkt.            </Typography>
        </Section>
    );
};

export default PreorderForm;
