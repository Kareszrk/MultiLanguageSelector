# MultiLanguageSelector - Native/Vanilla JavaScript (Client-Side)

This repository presents a simple and effective method for changing the language of a website without needing to refresh the page. It prioritizes client-friendly operations and minimizes unnecessary JavaScript code execution.

## Features

With this code, you can associate your custom language strings with various elements on your website. Here are a few examples:

- **General Elements**: Apply your language strings to any HTML element, such as headers, paragraphs, anchors, buttons, and more.

  Use the attribute on an HTML element: `data-languagePartIdentifier="WelcomeText"`

- **Placeholders**: Assign your language strings to any placeholder.

  Use the attribute on an HTML element: `data-placeholder="WelcomeText"`

- **Tooltips**: Add your language strings to any tooltip. Note that these implementations require either Bootstrap 5 or Bulma.io to be loaded.

  For Bootstrap 5, use the attributes on an HTML element: 

  `data-toggle="tooltip" data-placement="top" data-languagePartIdentifier="WelcomeText"`
  
  For Bulma.io, use the attribute on an HTML element: 
  
  `data-tool-languagePartIdentifier="WelcomeText"`

- **TourGuide JS Support**: If you use TourGuide JS, this code is compatible with it as well!

  Use the following two attributes to apply the language you want:

  `data-tr-languagepartidentifier="WelcomeText" data-tg-order="0"`

## Live Previews

- [Demo Site](https://kareszrk.github.io/MultiLanguageSelector/ "Demo Site")
- [Production Example](https://iranyaszallas.hu/ "Production Example")

## Additional Resources

- [Bootstrap 5 Tooltip Documentation](https://getbootstrap.com/docs/5.0/components/tooltips/ "Bootstrap 5 Tooltip Documentation")
- [Bulma.io Tooltip Documentation](https://wikiki.github.io/elements/tooltip/ "Bulma.io Tooltip Documentation")

Feel free to explore and utilize this code to suit your multilingual website needs.
