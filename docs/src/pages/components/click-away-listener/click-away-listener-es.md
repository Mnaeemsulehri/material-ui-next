---
title: Detect click outside React component
components: ClickAwayListener
githubLabel: 'component: ClickAwayListener'
---

# Click Away Listener

<p class="description">Detecta si ocurri贸 un evento de clic fuera de un elemento. Escucha los clics que se producen en alg煤n lugar del documento.</p>

- 馃摝 [1.5 kB comprimido](/size-snapshot).
- 鈿涳笍 Support portals

[La funci贸n de estilo de la paleta](/system/palette/).

## Ejemplo

Por ejemplo, si necesita ocultar un men煤 desplegable cuando las personas hacen clic en cualquier otro lugar de su p谩gina:

{{"demo": "pages/components/click-away-listener/ClickAway.js"}}

Ten en cuenta que el componente s贸lo acepta un elemento child. Puedes encontrar una demostraci贸n m谩s avanzada en la [secci贸n de documentaci贸n del Men煤](/components/menus/#menulist-composition).

## Portal

La siguiente demostraci贸n utiliza [`Portal`](/components/portal/) para renderizar el desplegable en un nuevo "sub谩rbol" fuera de la jerarqu铆a del DOM actual.

{{"demo": "pages/components/click-away-listener/PortalClickAway.js"}}

## Eventos

Por defecto, el componente responde a los eventos clic y de toque final (click + touch end). Sin embargo, puedes configurarlo para que responda a los eventos de rat贸n presionado y toque inicial (mouse down + touch start).

{{"demo": "pages/components/click-away-listener/LeadingClickAway.js"}}

> 鈿狅笍 En este modo, s贸lo se ignoran las interacciones con la barra de desplazamiento del documento.
