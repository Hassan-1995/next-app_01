import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Tailwind,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="bold text-2xl">Hello {name}</Text>
            <Link href="https://www.linkedin.com/in/hassan-mansoor/">
              www.linkedin.com/in/hassan-mansoor/
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
