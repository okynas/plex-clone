import React, { useState } from 'react';
import {Container, Logo, Title, Wrapper, SubTitle, Section, Button, Splitter, Form, Input, InputBox, Submit} from "./styles/login"

export default function Login({children}) {
  return(
    <Container>
      {children}
    </Container>
  )
}

Login.Container = function LoginContainer ({children}) {
  return <Container>{children}</Container>;
}

Login.Logo = function LoginLogo ({src}) {
  return <Logo src={src}/>
}

Login.Wrapper = function LoginWrapper ({children}) {
  return <Wrapper>{children}</Wrapper>;
}

Login.Title = function LogoTitle ({text}) {
  return <Title>{text}</Title>
}

Login.SubTitle = function LogoSubTitle ({text}) {
  return <SubTitle>{text}</SubTitle>
}

Login.Section = function LoginSection ({children}) {
  return <Section>{children}</Section>;
}

Login.Button = function LoginButton ({src, icon, text, color}) {
  return <Button href={src} color={color} >{icon}{text}</Button>;
}

Login.Submit = function LoginSubmit ({text, color}) {
  const [submit, setSubmit] = useState("");
  
  return <Submit color={color} >{text}</Submit>;
}

Login.Splitter = function LoginSplitter ({text}) {
  return <Splitter>{text}</Splitter>
}

Login.Form = function LoginForm ({children}) {
  return <Form>{children}</Form>
}

Login.InputBox = function LoginInputBox ({children}) {
  return <InputBox>{children}</InputBox>
}

Login.Input = function LoginInput ({type}) {
  return <Input type={type} />
}