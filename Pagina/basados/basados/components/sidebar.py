"""Sidebar component for the app."""

from basados import styles

import reflex as rx


def sidebar_header() -> rx.Component:
    """Sidebar header.

    Returns:
        The sidebar header component.
    """
    return rx.hstack(
        # The logo.
        rx.image(
            src="/logo.png",
            style = {"position": "fixed", 
                     "top": "2%",
                     "left": "20px",
                     "right": "10px",}
        ),
        
    )

def sidebar() -> rx.Component:
    # Get all the decorated pages and add them to the sidebar.
    from reflex.page import get_decorated_pages

    return rx.box(
        rx.vstack(
            sidebar_header(),
            
            rx.spacer(),
            #sidebar_footer(),
            height="100dvh",
        ),
        position="fixed",
    )
