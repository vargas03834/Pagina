/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { MoonIcon as LucideMoonIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import env from "/env.json"
import { ViewOffIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import NextHead from "next/head"



export function Fragment_ac0b06893fc1b15016f3e0532508036d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_e9a05c105aa9215aeba52aeec8fe2e76 () {
  const state = useContext(StateContexts.state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(((!state.is_hydrated) || (connectErrors.length > 0))) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}>
  {`wifi_off`}
</LucideWifiOffIcon>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_e9a05c105aa9215aeba52aeec8fe2e76/>
</div>
  <Fragment_ac0b06893fc1b15016f3e0532508036d/>
</Fragment>
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
  <RadixThemesHeading css={{"position": "fixed", "top": "8%", "transform": "translateY(0%)", "left": "750", "fontSize": "3.2em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`Crear Nueva Cuenta`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"position": "fixed", "top": "17%", "transform": "translateY(0%)", "left": "770", "fontSize": "1.7em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`Ya se encuentra registrado?, Ingrese`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"position": "fixed", "top": "25%", "transform": "translateY(50%)", "left": "800", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`NOMBRE `}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesAvatar css={{"position": "fixed", "top": "30.5%", "transform": "translateY(0%)", "left": "760", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"}} size={`2`}/>
  <RadixThemesTextField.Input css={{"position": "fixed", "top": "30%", "transform": "translateY(0%)", "left": "790", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px"}} placeholder={`Ingrese su nombre`}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"position": "fixed", "top": "37%", "transform": "translateY(0%)", "left": "800", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`CORREO ELECTRONICO `}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <LucideMoonIcon css={{"color": "var(--current-color)", "position": "fixed", "top": "42%", "transform": "translateY(0%)", "left": "775", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"}}/>
  <RadixThemesTextField.Input css={{"position": "fixed", "top": "40.5%", "transform": "translateY(0%)", "left": "790", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px"}} placeholder={`Ingrese su correo electrónico`}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"position": "fixed", "top": "48%", "transform": "translateY(0%)", "left": "800", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`CONTRASEÑA `}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <ViewOffIcon sx={{"position": "fixed", "top": "53%", "transform": "translateY(0%)", "left": "775", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"}}/>
  <RadixThemesTextField.Input css={{"position": "fixed", "top": "52%", "transform": "translateY(0%)", "left": "790", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px"}} placeholder={`Ingrese su contraseña`} type={`password`}/>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"position": "fixed", "top": "57%", "transform": "translateY(50%)", "left": "800", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "100%"}}>
  {`FECHA DE NACIMIENTO `}
</RadixThemesText>
  <RadixThemesFlex align={`start`} css={{"position": "fixed", "top": "57%", "transform": "translateY(100%)", "left": "800", "fontSize": "1.5em", "marginBottom": "20px", "border": "2px solid lightgray", "align": "start", "width": "350px", "height": "50px"}} direction={`column`} gap={`2`}>
  <div dangerouslySetInnerHTML={{"__html": "<input type='date' name='fecha' id='fecha', placeholder='Seleccione su fecha de nacimiento'>"}}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesLink asChild={true} css={{"fontSize": "1.5em", "position": "fixed", "top": "70%", "left": "900", "width": "170px", "height": "50px", "margin-top": "100px", "color": "white", "background-color": "black", "border": "none", "border-radius": "20px", "cursor": "pointer", "text-align": "center"}}>
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
