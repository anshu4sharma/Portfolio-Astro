import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo name="Anshu Sharma" icon={null} />
      </a>
      <NavMenu>
        <NavMenuItem href="#projects">Projects</NavMenuItem>
        <NavMenuItem href="https://github.com/anshu0x">GitHub</NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/anshu0x/">
          Linkedin
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
