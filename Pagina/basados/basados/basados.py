"""Welcome to Reflex!."""
from basados.templates import template
from basados import styles
import reflex as rx
# Import all the pages.
from basados.pages import *

class State(rx.State):
    """Define empty state to allow access to rx.State.router."""

@template(route="/menu", title="Menu Principal")
def menu() -> rx.Component:

    #def redirect_to_help():
        # Redirige al usuario a la dirección http://localhost:4000/
        #rx.window.location.href = "http://localhost:4000/"

    return  rx.vstack(
        rx.hstack(
            rx.chakra.button_group(
                rx.link("INICIO", font_size="0.7em", color = "black", href="http://localhost:3000/"),
                rx.link("MARCAS",font_size="0.7em", color = "black"),
                rx.link("ACCESORIOS",font_size="0.7em", color = "black"),
                rx.link("CATEGORIAS",font_size="0.7em", color = "black"),
		        rx.link("MIS COMPRAS",font_size="0.7em", color = "black"),
		        rx.link("AYUDA/PQR",font_size="0.7em", color = "black",href="http://localhost:4000/",),
                spacing=8,
		        variant="link",
            ),style={"position": "fixed", 
                      "top": "8%", 
                      "right": "350px", 
                      "transform": "translateY(-50%)", 
                      "widht": "100%", 
                      "fontSize": "2em"},
        ),rx.hstack(
         	rx.chakra.icon(tag="check_circle", 
                style ={"position": "fixed", 
                "top": "7.7%", 
                "transform": "translateY(-50%)", 
                "right": "160",  
                "marginBottom": "10px",
                "fontSize": "2em", 
                "align": "start"}),
            rx.avatar(
                style = {"position": "fixed", 
                "top": "6.2%", 
                "right": "200px",  
                "marginBottom": "10px",},
                size="2"),
	    ),rx.hstack(
            rx.input(placeholder="Buscar", 
                    height="30px", 
                    width="15%", 
                    bg="#B8BBBE",
                    style = {"position": "fixed",
                        "top":"6%", 
                        "left":"300px"}),
                    
        ),rx.hstack(
            rx.chakra.icon(tag="search", 
                    style={"position": "fixed", 
                        "top": "7.8%", 
                        "left": "600", 
                        "transform": "translateY(-40%)",
                        "widht": "100%"}),
        ),rx.vstack(
            rx.box(height="5px", 
            width="93%", 
            bg="#B8BBBE",
            style = {"position": "fixed",
                     "top":"13%", 
                     "right":"50px"}),
	    ),rx.hstack(
		rx.vstack(rx.text("XIAOMI")),
		rx.vstack(rx.text("SAMSUNG")),
		rx.vstack(rx.text("APPLE")),
		rx.vstack(rx.text("PIXEL")),
		rx.vstack(rx.text("HUAWEI")),
		rx.vstack(rx.text("OPPO")),
		rx.vstack(rx.text("MOTOROLA")),
		spacing="9",
        style={"position":"fixed", 
               "top":"17%", 
               "right":"250px",  
               "transform":"translateY(-50%)", 
               "widht":"100%", 
               "fontSize":"2em"},
	),rx.chakra.responsive_grid(
        rx.box(rx.image(src="/xiaomi mi 12t.jpg", style = {"width": "150px","height": "150px"})), 
        rx.box(rx.image(src="/samsung-galaxy-s23-ultra-2-min.png", style = {"width": "150px","height": "150px"})), 
        rx.box(rx.image(src="/iphone 15 pro max sisisisis.png", style = {"width": "150px","height": "150px"})), 
        rx.box(rx.image(src="/GOOGLE PIXEL 4A.png", style = {"width": "150px","height": "150px"})), 
        rx.box(rx.image(src="/hUAWETY P40 PRO.png", style = {"width": "150px","height": "150px"})), 
        rx.box(rx.image(src="/oppo reno 8.png", style = {"width": "150px","height": "150px"})), 
        rx.box(rx.image(src="/razr 5g plegable.png", style = {"width": "150px","height": "150px"})), 
        columns=[7],
        spacing="8",
        style = {"position": "fixed", 
                 "top": "20%", 
                 "right": "235px",
                 "width": "auto", 
                 "height": "auto",
                 "z-index": "2"}
    ),rx.vstack(
                rx.box(height="150px", 
                       width="1320px", 
                       bg="#B8BBBE",
                       style={"position": "fixed", 
                              "top": "20%", 
                              "right": "190px",
                              "width": "auto", 
                              "height": "auto",
                              "z-index": "1"}),       
    ),rx.hstack(
		rx.divider(border_color="black"),
		rx.divider(border_color="black"),
		rx.vstack(rx.text("ADAPTADOR")),
		rx.vstack(rx.text("CARGADOR")),
		rx.vstack(rx.text("INALAMBRICO")),
		rx.vstack(rx.text("PROTECTOR")),
		rx.vstack(rx.text("CASE")),
		rx.vstack(rx.text("ACCESORIOS")),
		rx.vstack(rx.text("VIDRIO")),
		spacing="6",
        style={"position": "fixed", 
          "bottom": "35%", 
          "right": "200px",  
          "transform": "translateY(-50%)", 
          "widht": "100%", 
          "fontSize": "2em"},
    ),rx.vstack(
        rx.chakra.responsive_grid(
        rx.box(rx.image(src="/adaptadores.png", style = {"width": "150px","height": "150px"})), 
        rx.box(rx.image(src="/caragdor.png", style = {"width": "150px","height": "150px"})), 
        rx.box(rx.image(src="/cargador_inalambrico.png", style = {"width": "150px","height": "150px"})), 
        rx.box(rx.image(src="/funda1.png", style = {"width": "150px","height": "150px"})), 
        rx.box(rx.image(src="/funda2.png", style = {"width": "150px","height": "150px"})), 
        rx.box(rx.image(src="/usb.png", style = {"width": "150px","height": "150px"})), 
        rx.box(rx.image(src="/vidrio templado.jpg", style = {"width": "150px","height": "150px", "border_width":"thick",})),
        columns=[7],
        spacing="10",
        style = {"position": "fixed", 
                 "bottom": "20%", 
                 "right": "200",
                 "width": "auto", 
                 "height": "auto", 
                 "z-index": "2"}
    ),
    ),rx.vstack(
                rx.box(height="150px", 
                       width="1320px", 
                       bg="#B8BBBE",
                       style={"position": "fixed", 
                              "bottom": "20%", 
                              "right": "190px",
                              "width": "auto", 
                              "height": "auto",
                              "z-index": "1"}),
            ),
    )
app = rx.App()
app.add_page(menu)
app.compile()

# Create the app.
#app = rx.App(style=styles.base_style)
