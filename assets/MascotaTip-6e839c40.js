import{r,a as t,j as l}from"./index-90995241.js";const p=({mascota:a,contenido:i})=>{const[e,c]=r.useState(!1);return t("div",{className:"contenedor-tip",children:l("div",{className:e?"mascota-tip active":"mascota-tip",children:[t("img",{src:a,alt:a,className:e?"active":""}),t("div",{className:e?"contenido active":"contenido",children:i}),t("button",{className:"ver-tip",onClick:o=>{c(!e);let s=o.target.offsetParent;e?s.style.overflow="hidden":s.style.overflow="visible"},children:e?"cerrar tip":"ver tip"})]})})};export{p as M};