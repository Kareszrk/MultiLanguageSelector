# Technical Overview

### The main core
#### The following gets executed first

```mermaid
flowchart TD
  A["User loads website"] --> B{"First time visitor?"}
  B -- Yes --> C["Set localStorage.alreadyFirstTime = true"]
  C --> D{"Browser language supported?"}
  D -- Yes --> E["Set localStorage.preferedLanguage = browser language"]
  D -- No --> F["Set localStorage.preferedLanguage = 'en'"]
  E --> G["Set this.currentLanguage from localStorage"]
  F --> G
  B -- No --> H["Get preferedLanguage from localStorage"]
  H --> G
  G --> I["Call reloadAllLanguageResources()"]
```
### How each component works?
#### ➡️ General elements
```mermaid
flowchart TD
  A["On reloadAllLanguageResources()"] --> B["selectedLanguage = localStorage.preferedLanguage || 'en'"]
  B --> C["Query: all elements with [data-languagePartIdentifier]"]
  C --> D{"For each element"}
  D --> E{"attribute 'data-toggle' != 'tooltip' ?"}
  E -- "Yes" --> F["Set textContent = languages[selectedLanguage][ element.getAttribute('data-languagePartIdentifier') ]"]
  E -- "No" --> G["Skip (tooltips handled separately)"]
  F --> H["Next element"]
  G --> H
```
#### ➡️ Placeholders
```mermaid
flowchart TD
  A["On reloadAllLanguageResources()"] --> B["selectedLanguage = localStorage.preferedLanguage || 'en'"]
  B --> C["Query: all elements with [data-placeholder]"]
  C --> D{"For each element"}
  D --> E["Set attribute 'placeholder' = languages[selectedLanguage][ element.getAttribute('data-placeholder') ]"]
  E --> F["Next element"]
```
#### ➡️ Tooltips
```mermaid
flowchart TD
  A["On reloadAllLanguageResources()"] --> B["selectedLanguage = localStorage.preferedLanguage || 'en'"]

  %% Bootstrap 5 branch
  B --> C["Query (Bootstrap): all elements with [data-toggle='tooltip']"]
  C --> D{"For each Bootstrap tooltip"}
  D --> E["Set attribute 'title' = languages[selectedLanguage][ element.getAttribute('data-languagePartIdentifier') ]"]
  E --> F["Next Bootstrap tooltip"]

  %% Bulma branch
  B --> G["Query (Bulma): all elements with [data-tool-languagePartIdentifier]"]
  G --> H{"For each Bulma tooltip"}
  H --> I["Set attribute 'data-tooltip' = languages[selectedLanguage][ element.getAttribute('data-tool-languagePartIdentifier') ]"]
  I --> J["Next Bulma tooltip"]
```
#### ➡️ TourGuide JS
```mermaid
flowchart TD
  A["On reloadAllLanguageResources()"] --> B["selectedLanguage = localStorage.preferedLanguage || 'en'"]
  B --> C["Query: all elements with both [data-tr-languagepartidentifier] and [data-tg-order]"]
  C --> D{"For each element"}
  D --> E["Set attribute 'data-tg-tour' = languages[selectedLanguage][ element.getAttribute('data-tr-languagepartidentifier') ]"]
  E --> F["Next element"]
```
