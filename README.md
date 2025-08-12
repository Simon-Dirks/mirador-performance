# Mirador + Text Overlay Angular Performance Test

I noticed (minor) performance issues when using [Mirador](https://github.com/ProjectMirador/mirador) with the [mirador-textoverlay](https://github.com/dbmdz/mirador-textoverlay) plugin in another Angular project. This repository was created as a minimal sample environment to debug these issues.

```json
"mirador": "^3.4.3",
"mirador-textoverlay": "^0.3.8",
"react": "^16.14.0"
```

## Demo
Video below showing zoom performance with OCR layer turned on and off in vanilla JS [demo](https://github.com/Simon-Dirks/mirador-performance/blob/main/vanilla-js-vite/src/main.js).

https://github.com/user-attachments/assets/720e27e3-3745-4e2b-9ed5-47ef8a1cad03

## Findings so far:

1. Performance issues do not seem to be Angular-related, noticed the same in a vanilla JS project.
2. Performance issues do not seem to be related to the JS logic of the mirador-textoverlay plugin. When I stop rendering the SVG parent container (`display: none`), the performance issues disappear. I'd say the issues are thus related to the rapid transform updates of the text overlay svg containers.
