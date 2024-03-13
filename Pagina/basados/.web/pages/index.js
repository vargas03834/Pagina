/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, TextField as RadixThemesTextField } from "@radix-ui/themes"
import NextLink from "next/link"
import { ButtonGroup } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
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
  <RadixThemesHeading css={{"position": "fixed", "top": "50%", "transform": "translateY(-300%)", "left": "250px", "fontSize": "2em", "marginBottom": "20px", "align": "start"}}>
  {`Lo mejor en `}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"position": "fixed", "top": "50%", "transform": "translateY(-100%)", "left": "250px", "fontSize": "4em", "marginBottom": "20px", "align": "start"}}>
  {`Smartphone's`}
</RadixThemesHeading>
  <RadixThemesLink asChild={true} css={{"fontSize": "1.4em", "position": "fixed", "bottom": "42%", "transform": "translateY(0%)", "left": "400px", "width": "150px", "height": "40px", "margin-top": "100px", "color": "white", "background-color": "black", "border": "none", "border-radius": "20px", "cursor": "pointer"}}>
  <NextLink href={`http://localhost:3000/settings/`} passHref={true}>
  {`Explora Ahora`}
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex align={`start`} css={{"position": "fixed", "top": "11%", "left": "400px", "transform": "translateY(-50%)", "widht": "100%", "fontSize": "2em"}} direction={`row`} gap={`2`}>
  <ButtonGroup spacing={8} variant={`link`}>
  <RadixThemesButton css={{"fontSize": "0.7em", "color": "black", "background": "#B8BBBE"}}>
  {`Inicio`}
</RadixThemesButton>
  <RadixThemesButton css={{"fontSize": "0.7em", "color": "black", "background": "#B8BBBE"}}>
  {`Productos`}
</RadixThemesButton>
  <RadixThemesButton css={{"fontSize": "0.7em", "color": "black", "background": "#B8BBBE"}}>
  {`Sobre Nosotros`}
</RadixThemesButton>
  <RadixThemesButton css={{"fontSize": "0.7em", "color": "black", "background": "#B8BBBE"}}>
  {`Soporte`}
</RadixThemesButton>
</ButtonGroup>
</RadixThemesFlex>
  <RadixThemesBox css={{"position": "fixed", "top": "0", "right": "0", "width": "600px", "height": "100%", "background-color": "#B8BBBE"}}/>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesTextField.Input css={{"position": "fixed", "top": "9%", "right": "200px", "height": "30px", "width": "15%", "background": "white"}} placeholder={`Buscar`}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <SearchIcon sx={{"position": "fixed", "top": "10.5%", "right": "175px", "transform": "translateY(-40%)", "widht": "100%"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img css={{"position": "fixed", "top": "50%", "transform": "translateY(-50%)", "right": "350px", "width": "auto", "height": "auto"}} src={`/celular.png`}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Menu`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`/github.svg`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
