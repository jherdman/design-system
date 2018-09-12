## Typeface
### IBM Plex Sans
[https://www.ibm.com/plex/](https://www.ibm.com/plex/)

## Sizes
Sticking to a typographic scale makes our applications more predictable and scannable for our users.

```type
{
  "font": "'IBM Plex Sans', sans-serif",
  "headings": [
    { "label": "", "value": 28 },
    { "label": "", "value": 24 },
    { "label": "", "value": 20 },
    { "label": "", "value": 16 },
    { "label": "", "value": 14 },
    { "label": "", "value": 12 }
  ]
}
```

## Usage
```table
span: 4
rows:
  - Token: font.size.smaller
    CSS: .font-size--smaller
    px: 12
    rem: 0.75
  - Token: font.size.small
    CSS: .font-size--small
    px: 14
    rem: 0.875
  - Token: font.size.medium
    CSS: .font-size--medium
    px: 16
    rem: 1
  - Token: font.size.large
    CSS: .font-size--large
    px: 20
    rem: 1.25
  - Token: font.size.larger
    CSS: .font-size--larger
    px: 24
    rem: 1.5
  - Token: font.size.largest
    CSS: .font-size--largest
    px: 28
    rem: 1.75
  - Token: font.size.pageTitle
    CSS: .font-size--page-title
    px: 28
    rem: 1.75
  - Token: font.size.sectionTitle
    CSS: .font-size--section-title
    px: 24
    rem: 1.5
  - Token: font.size.subsectionTitle
    CSS: .font-size--subsection-title
    px: 20
    rem: 1.25
```