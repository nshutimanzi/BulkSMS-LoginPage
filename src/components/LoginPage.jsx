import React from "react";
import './LoginPage.scss';
import backgroundImage from '../assets/Login page-1~2.jpg';
import mtnlogo from '../assets/MTN.JO-d1d53d13.png';
import { Button, Container, Paper, PasswordInput, TextInput, Title, Text, rem } from "@mantine/core";
import { IconLock, IconMail } from "@tabler/icons-react";

const LoginPage = () => {
    const inputStyles = {
        input: {
            '&:focus': {
                borderColor: '#FFE14D'
            }
        }
    };

    const iconProps = {
        size: rem(10),
        stroke: 1,
        color: 'gray'
    };
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
                            alt="MTN Logo"
                            className="mtn-logo"
                        />
                    </div>
                </div>
            </div>

            <Container className="form-container">
                <Paper className="form-paper" radius="md">
                    <Title order={1} className="form-title">Bulk SMS</Title>
                    <Text size="sm" className="form-subtitle">Welcome to the Bulk SMS Platform</Text>
                    <form>
                        <TextInput size="md" radius="lg" label="Username" placeholder="Enter your username" leftSection={<IconMail {...iconProps}/>}
                        styles={inputStyles}
                        classNames={{
                            input: 'custom-input',
                            label: 'custom-label'
                        }}/>

                        <PasswordInput size="md" radius="lg" label="Password" placeholder="Enter your password" leftSection={<IconLock {...iconProps}/>}
                        styles={inputStyles}
                        classNames={{
                            input: 'custom-input',
                            label: 'custom-label'
                        }}/>

                        <Button type="submit" fullWidth className="submit-button">Login</Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default LoginPage;