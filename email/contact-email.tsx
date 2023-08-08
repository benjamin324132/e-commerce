import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  name: string;
}

export const WelcomeEmail = ({ name = "User" }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={title}>GO24</Text>
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          Welcome to GO24, the best platform for buying books on the internet.
        </Text>
        <Section style={btnContainer}>
          <Button
            pX={12}
            pY={12}
            style={button}
            href="https://e-commerce-ashy-beta.vercel.app/"
          >
            Get started
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The GO24 team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>408 Warren Rd - San Mateo, CA 94402</Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  textAlign: "center" as const,
  fontSize: "24px",
  fontWeight: "700",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#000000",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
