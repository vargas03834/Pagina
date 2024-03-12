/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { MoonIcon, ViewOffIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <RadixThemesFlex align={`start`} css={{"alignItems": "flex-start", "transition": "left 0.5s, width 0.5s", "position": "relative"}} direction={`row`} gap={`2`}>
  <RadixThemesBox css={{"position": "fixed"}}>
  <RadixThemesFlex align={`start`} css={{"height": "100dvh"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img css={{"position": "fixed", "top": "2%", "left": "20px", "right": "10px"}} src={`/logo.png`}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"position": "fixed", "top": "10%", "transform": "translateY(0%)", "left": "880", "fontSize": "3em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`Acceso`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} css={{"position": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"position": "fixed", "top": "17%", "transform": "translateY(0%)", "left": "810", "fontSize": "1.5em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`Inicia sesión para continuar`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"position": "fixed", "top": "23%", "transform": "translateY(0%)", "left": "810", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`CORREO ELECTRONICO `}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <MoonIcon sx={{"position": "fixed", "top": "28.2%", "transform": "translateY(0%)", "left": "775", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"}}/>
  <RadixThemesTextField.Input css={{"position": "fixed", "top": "27%", "transform": "translateY(0%)", "left": "800", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px"}} placeholder={`Ingrese su correo electrónico`}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesButton css={{"position": "fixed", "bottom": "10px", "right": "10px", "color": "white", "background-color": "black", "border": "none", "border-radius": "4px", "cursor": "pointer"}}>
  {`Regresar`}
</RadixThemesButton>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"position": "fixed", "top": "34%", "transform": "translateY(0%)", "left": "810", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`CONTRASEÑA `}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <ViewOffIcon sx={{"position": "fixed", "top": "39.5%", "transform": "translateY(0%)", "left": "775", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"}}/>
  <RadixThemesTextField.Input css={{"position": "fixed", "top": "38%", "transform": "translateY(0%)", "left": "800", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px"}} placeholder={`Ingrese su contraseña`} type={`password`}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesLink asChild={true} css={{"fontSize": "1.4em", "position": "fixed", "top": "45%", "transform": "translateY(0%)", "left": "900", "width": "170px", "height": "50px", "margin-top": "100px", "color": "white", "background-color": "black", "border": "none", "border-radius": "20px", "cursor": "pointer", "text-align": "center"}}>
  <NextLink href={`http://localhost:3000/menu/`} passHref={true}>
  {`Ingresar`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Inicio`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
