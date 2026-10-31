# Homepage V3 HTML study

Source: Figma file `p25LXoR2of557jiB5ZhRt4`, Homepage v3 frame `23:804` (1600 × 10809).

Open `index.html`, or serve the parent `kcglassinc.com` directory. There is no build step. V1, V2, and V3 all use the same sibling `assets` directory.

## Layout mapping

| Figma nodes | HTML section |
| --- | --- |
| `23:810`, `23:816`, `23:817`, `23:1271`, `23:902`, `23:1303` | Photographic hero, centered logo, blue phone blocks, navigation, left hero copy, right lead form |
| `23:1359` | Four vertically arranged credentials with blue icons |
| `23:1426` | Rounded introduction photograph attached to the left browser edge |
| `23:990`, `23:1489` | Split introduction and three arched service-image cards |
| `23:998`, `23:1493` | Full-width photographic CTA |
| `23:1539` | Window-film copy with rounded photograph attached to the right browser edge |
| `23:1674` | Partially clipped customer-review strip with blue quote icons |
| `23:1720`, `23:1825` | Work heading and twelve photographs in two edge-to-edge rows |
| `23:2007`, `23:1870` | Leaf-shadow photographic background and three review cards |
| `23:2064` | Left-edge skylight photo and FAQ accordion |
| `23:2066` | Paired office/map panels with mirrored ordering |
| `23:1181`, `23:2238` | Centered brand statement, dark photo/copy panel, and blue contact form |
| `23:806`, `23:1186`, `23:907` | Construction-photo footer, logo, links, office contacts, colored icons, and black social/copyright strip |

The layout uses the original 1196px rail at 1600px, expressed proportionally so it expands with wider browsers. Edge-aligned photo slots and the gallery follow the viewport rather than a capped container. Outfit remains the display family; body copy uses Inter at 18px/30px on desktop for readability. Tablet and mobile layouts reflow without horizontal page scrolling.

All photographs, logos, and SVG icons come from the V3 Figma frame. Original source files are retained, including watermarks; source images extend beyond their clipped slots so Depositphotos preview footer bars are hidden. Both five-point and four-point review-star styles are kept in their original sections.

Navigation, phone/email/map links, FAQ expand/collapse, and local form validation work. The two forms display a non-transmitting confirmation; no form backend or deployment is configured. Placeholder copy from the mockup is retained.
