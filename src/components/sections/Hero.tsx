import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { keyframes } from "@emotion/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = styled.section`
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.xl};
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.light};
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.h2`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.2s forwards;
  opacity: 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: ${theme.spacing.lg};
  opacity: 0.9;
  font-weight: 500;
`;

const Description = styled.p`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.4s forwards;
  opacity: 0;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  max-width: 600px;
  margin-bottom: ${theme.spacing.xl};
  opacity: 0.8;
  line-height: 1.7;
`;

const SocialLinks = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.6s forwards;
  opacity: 0;
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;

  a {
    color: ${theme.colors.textLight};
    font-size: 1.5rem;
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.glass.background};

    &:hover {
      color: ${theme.colors.light};
      transform: translateY(-3px);
      background: ${theme.colors.glass.card};
      box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
    }
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${theme.colors.accent};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  animation: ${fadeUpKeyframes} 0.6s ease-out forwards;
  margin-bottom: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    width: 240px;
    height: 240px;
  }
`;

export const Hero = () => {
  return (
    <HeroSection id="hero" role="region" aria-label="Introduction">
      <div className="container">
        <HeroContent>
          <ProfileImage src="/profile-pic.png" alt="Muaad Alomari" />
          <Title role="heading" aria-level={2}>
            Hi, I'm Muaad Alomari
          </Title>
          <Subtitle role="heading" aria-level={3}>
            Full Stack Developer
          </Subtitle>
          <Description role="paragraph">
            I create elegant solutions to complex problems, specializing in
            modern web development with a focus on user experience and clean
            code.
          </Description>
          <SocialLinks role="list" aria-label="Social media links">
            <a
              href="https://github.com/Movieguy3333"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              role="listitem"
            >
              <FaGithub aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muaadalomari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              role="listitem"
            >
              <FaLinkedin aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:Muaad.Alomari@outlook.com"
              aria-label="Send me an email"
              role="listitem"
            >
              <FaEnvelope aria-hidden="true" />
              <span className="sr-only">Email</span>
            </a>
          </SocialLinks>
        </HeroContent>
      </div>
    </HeroSection>
  );
};
