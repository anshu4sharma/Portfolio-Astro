import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Anshu Sharma</GradientText> 👋
        </>
      }
      description={
        <>
          I am pursuing my Bachelor's Degree in the stream of computer
          science. I have Strong knowledge of web technologies such as HTML,
          CSS, Javascript , React Js, Next Js, Redux Toolkit , Express Js, Node
          js, Mongodb, Tailwindcss.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/github.png"
              alt="github icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/anshu0x/">
            <HeroSocial
              src="/assets/images/linkedin.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="mailto:anshusharma6327@gmail.com">
            <HeroSocial
              src="/assets/images/gmail.png"
              alt="gmail icon"
            />
          </a>
          <a href="tel:9518008087">
            <HeroSocial
              src="/assets/images/telephone.png"
              alt="telephone icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
