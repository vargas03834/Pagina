/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { MoonIcon as LucideMoonIcon } from "lucide-react"
import { ViewOffIcon } from "@chakra-ui/icons"
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
  <RadixThemesHeading css={{"position": "absolute", "top": "8vh", "transform": "translatex(40%)", "fontSize": "3.2em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`Crear Nueva Cuenta`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"position": "absolute", "top": "20vh", "transform": "translatex(41%)", "fontSize": "1.7em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`Ya se encuentra registrado?, Ingrese`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"position": "fixed", "top": "25vh", "transform": "translate(44.2%)", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`NOMBRE `}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesAvatar css={{"position": "absolute", "top": "29.5vh", "left": "41%", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"}} size={`2`}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesTextField.Input css={{"position": "absolute", "top": "27vh", "left": "850px", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px", "background": "#B8BBBE"}} placeholder={`Ingrese su nombre`}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"position": "absolute", "top": "37vh", "transform": "translate(44.2%)", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`CORREO ELECTRONICO `}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <LucideMoonIcon css={{"color": "var(--current-color)", "position": "absolute", "top": "41vh", "left": "41.5%", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"}}/>
  <RadixThemesTextField.Input css={{"position": "absolute", "top": "38vh", "left": "850px", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px", "background": "#B8BBBE"}} placeholder={`Ingrese su correo electrónico`}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"position": "absolute", "top": "47vh", "transform": "translate(44.2%)", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`CONTRASEÑA `}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <ViewOffIcon sx={{"position": "fixed", "bottom": "42.4%", "transform": "translateY(0%)", "left": "800px", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"}}/>
  <RadixThemesTextField.Input css={{"position": "absolute", "top": "48vh", "left": "850px", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px", "background": "#B8BBBE"}} placeholder={`Ingrese su contraseña`} type={`password`}/>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"position": "fixed", "top": "57%", "transform": "translateY(50%)", "left": "850px", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`FECHA DE NACIMIENTO `}
</RadixThemesText>
  <RadixThemesFlex align={`start`} css={{"position": "fixed", "top": "62%", "left": "850px", "fontSize": "1.5em", "marginBottom": "20px", "border": "2px solid lightgray", "align": "start", "width": "350px", "height": "50px"}} direction={`column`} gap={`2`}>
  <div dangerouslySetInnerHTML={{"__html": "<input type='date' name='fecha' id='fecha', placeholder='Seleccione su fecha de nacimiento'>"}}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesLink asChild={true} css={{"fontSize": "1.5em", "position": "fixed", "top": "70%", "left": "900px", "width": "170px", "height": "50px", "margin-top": "100px", "color": "white", "background-color": "black", "border": "none", "border-radius": "20px", "cursor": "pointer", "text-align": "center"}}>
  <NextLink href={`http://localhost:3000/dashboard/`} passHref={true}>
  {`Ingresar`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`SmartShop`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
