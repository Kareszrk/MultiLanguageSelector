# MultiLanguageSelector - Native/Vanilla JavaScript (Client only)
My very simple method on how to change the website's language without even a single page refresh. Client friendly. No useless javascript running code.

## This code supports the following:
- You can apply your own language: WelcomeText to whatever element you want. E.g. headers, paragraphs, anchors, buttons, etc...

Usage as attribute on HTML element: **data-languagePartIdentifier="WelcomeText"**

- You can apply your own language: WelcomeText on any placeholder

Usage as attribute on HTML element: **data-placeholder="WelcomeText"**

- You can apply your own language WelcomeText on any tooltip (This implementation requires bootstrap 5 to be loaded)

Usage as attribute on HTML element: **data-toggle="tooltip" data-placement="top" data-languagePartIdentifier="WelcomeText"**

- You can apply your own language WelcomeText on any tooltip (This implementation requires bulma.io to be loaded)

Usage as attribute on HTML element: **data-tool-languagePartIdentifier="WelcomeText"**

#### Live Preview
[Live Preview](https://kareszrk.github.io/MultiLanguageSelector/ "Live Preview")

#### In Production enviorement
[Production Live Preview](https://iranyaszallas.hu/ "Production Live Preview")

##### [Official bootstrap 5 tooltip documentation](https://getbootstrap.com/docs/5.0/components/tooltips/ "Bootstrap 5 tooltip documentation")
##### [Bulma.io tooltip documentation](https://wikiki.github.io/elements/tooltip/ "Bulma.io tooltip documentation")
