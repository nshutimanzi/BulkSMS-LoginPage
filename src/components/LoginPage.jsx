import React from "react";
import './LoginPage.scss';
import backgroundImage from '../assets/mtn-background.jpg';
import mtnlogo from '../assets/MTN.JO-d1d53d13.png';
import { Button, Container, PasswordInput, TextInput, Title, Text } from "@mantine/core";
import { IconLock, IconUser } from "@tabler/icons-react";

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="login-image-container">
                <div className="image-wrapper">
                    <img
                        src={backgroundImage}
                        alt="Background"
                        className="background-image"
                    />
                    <div className="logo-container">
                        <img
                            src={mtnlogo}
                            width="100px"
                            alt="MTN Logo"
                        />
                    </div>
                </div>
            </div>

            <Container className="form-container">
                    <form>
                        <Title order={1} className="form-title">Bulk SMS</Title>
                        <Text size="sm" opacity="0.8" className="form-subtitle">Welcome to the Bulk SMS Platform</Text>
                        <TextInput size="md" radius="lg" label="Username" placeholder="Enter your username" leftSection={<IconUser size={25} stroke={1}/>}
                        classNames={{
                            input: 'custom-input',
                            label: 'custom-label'
                        }}/>

                        <PasswordInput size="md" radius="lg" label="Password" placeholder="Enter your password" leftSection={<IconLock size={25} stroke={1}/>}
                        classNames={{
                            input: 'custom-input',
                            label: 'custom-label'
                        }}/>

                        <Button type="submit" fullWidth radius="lg" className="submit-button">Login</Button>
                    </form>
            </Container>
        </div>
    );
};

export default LoginPage;