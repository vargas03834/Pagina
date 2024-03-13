/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Flex as RadixThemesFlex, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { ButtonGroup, SimpleGrid } from "@chakra-ui/react"
import NextLink from "next/link"
import { CheckCircleIcon, SearchIcon } from "@chakra-ui/icons"
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
  <RadixThemesFlex align={`start`} css={{"position": "fixed", "top": "8%", "right": "350px", "transform": "translateY(-50%)", "widht": "100%", "fontSize": "2em"}} direction={`row`} gap={`2`}>
  <ButtonGroup spacing={8} variant={`link`}>
  <RadixThemesLink asChild={true} css={{"fontSize": "0.7em", "color": "black"}}>
  <NextLink href={`http://localhost:3000/`} passHref={true}>
  {`INICIO`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink css={{"fontSize": "0.7em", "color": "black"}}>
  {`MARCAS`}
</RadixThemesLink>
  <RadixThemesLink css={{"fontSize": "0.7em", "color": "black"}}>
  {`ACCESORIOS`}
</RadixThemesLink>
  <RadixThemesLink css={{"fontSize": "0.7em", "color": "black"}}>
  {`CATEGORIAS`}
</RadixThemesLink>
  <RadixThemesLink css={{"fontSize": "0.7em", "color": "black"}}>
  {`MIS COMPRAS`}
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"fontSize": "0.7em", "color": "black"}}>
  <NextLink href={`http://localhost:4000/`} passHref={true}>
  {`AYUDA/PQR`}
</NextLink>
</RadixThemesLink>
</ButtonGroup>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <CheckCircleIcon sx={{"position": "fixed", "top": "7.7%", "transform": "translateY(-50%)", "right": "160", "marginBottom": "10px", "fontSize": "2em", "align": "start"}}/>
  <RadixThemesAvatar css={{"position": "fixed", "top": "6.2%", "right": "200px", "marginBottom": "10px"}} size={`2`}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesTextField.Input css={{"position": "fixed", "top": "6%", "left": "300px", "height": "30px", "width": "15%", "background": "#B8BBBE"}} placeholder={`Buscar`}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <SearchIcon sx={{"position": "fixed", "top": "7.8%", "left": "600", "transform": "translateY(-40%)", "widht": "100%"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesBox css={{"position": "fixed", "top": "13%", "right": "50px", "height": "5px", "width": "93%", "background": "#B8BBBE"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"position": "fixed", "top": "17%", "right": "250px", "transform": "translateY(-50%)", "widht": "100%", "fontSize": "2em"}} direction={`row`} gap={`9`}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`XIAOMI`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`SAMSUNG`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`APPLE`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`PIXEL`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`HUAWEI`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`OPPO`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`MOTOROLA`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <SimpleGrid columns={[7]} spacing={`8`} sx={{"position": "fixed", "top": "20%", "right": "235px", "width": "auto", "height": "auto", "z-index": "2"}}>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/xiaomi mi 12t.jpg`}/>
</RadixThemesBox>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/samsung-galaxy-s23-ultra-2-min.png`}/>
</RadixThemesBox>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/iphone 15 pro max sisisisis.png`}/>
</RadixThemesBox>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/GOOGLE PIXEL 4A.png`}/>
</RadixThemesBox>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/hUAWETY P40 PRO.png`}/>
</RadixThemesBox>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/oppo reno 8.png`}/>
</RadixThemesBox>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/razr 5g plegable.png`}/>
</RadixThemesBox>
</SimpleGrid>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesBox css={{"position": "fixed", "top": "20%", "right": "190px", "width": "1320px", "height": "150px", "z-index": "1", "background": "#B8BBBE"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"position": "fixed", "bottom": "35%", "right": "200px", "transform": "translateY(-50%)", "widht": "100%", "fontSize": "2em"}} direction={`row`} gap={`6`}>
  <RadixThemesSeparator css={{"borderColor": "black"}} size={`4`}/>
  <RadixThemesSeparator css={{"borderColor": "black"}} size={`4`}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`ADAPTADOR`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`CARGADOR`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`INALAMBRICO`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`PROTECTOR`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`CASE`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`ACCESORIOS`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`VIDRIO`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <SimpleGrid columns={[7]} spacing={`10`} sx={{"position": "fixed", "bottom": "20%", "right": "200", "width": "auto", "height": "auto", "z-index": "2"}}>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/adaptadores.png`}/>
</RadixThemesBox>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/caragdor.png`}/>
</RadixThemesBox>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/cargador_inalambrico.png`}/>
</RadixThemesBox>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/funda1.png`}/>
</RadixThemesBox>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/funda2.png`}/>
</RadixThemesBox>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px"}} src={`/usb.png`}/>
</RadixThemesBox>
  <RadixThemesBox>
  <img css={{"width": "150px", "height": "150px", "borderWidth": "thick"}} src={`/vidrio templado.jpg`}/>
</RadixThemesBox>
</SimpleGrid>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesBox css={{"position": "fixed", "bottom": "20%", "right": "190px", "width": "1320px", "height": "150px", "z-index": "1", "background": "#B8BBBE"}}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
