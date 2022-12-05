class LanguagePreference {
    constructor() {
        // There are all the languages.
        this.languages = {
            "hu": {
                WelcomeText: "Üdv a honlapon",
                WelcomeParagraph: "Köszönöm, hogy meglátogattad a honlapomat!"
            },
            "en": {
                WelcomeText: "Welcome on the website!",
                WelcomeParagraph: "Thank you for visiting my website!"
            }
        }
        // We need to know what language the user wants to see.
        // First we run a check, to determine if this is the first time the user sees our website.
        // First of first, we check if this user is a returning user or a first time user.
        if(!localStorage.getItem('alreadyFirstTime')){
            // He is a first time user.
            // When this is the first time, we save a localStorage varriable.
            localStorage.setItem("alreadyFirstTime", true);
            // Now we will know if we should set a new language for the user or not.
            // So now, we set a language by his browser's default language
            localStorage.setItem("preferedLanguage", navigator.language.includes("-") ? navigator.language.split("-")[0] : navigator.language);
            // We make a queryable parameter, to check what the current language is.
            this.currentLanguage = navigator.language.includes("-") ? navigator.language.split("-")[0] : navigator.language;
        } else {
            this.currentLanguage = localStorage.getItem("preferedLanguage");
        }
        this.reloadAllLanguageResources();
    }
    // Reload all langauge resources
    reloadAllLanguageResources = () => {
        let selectedLanguage = localStorage.getItem('preferedLanguage') ? localStorage.getItem('preferedLanguage') : "en";
        let all_language_elements = document.querySelectorAll("[data-languagePartIdentifier]");
        let i = 0;
        while(i < all_language_elements.length){
            all_language_elements[i].innerHTML = this.languages[selectedLanguage][all_language_elements[i].getAttribute("data-languagePartIdentifier")];
            i++;
        }
    }

    // Change language method
    // Change language method
    ChangeClientFrontEndLanguagePreference = (languageTo) => {
        // Here we check if the selected language exists or not.
        if(this.languages[languageTo]){
            // Language exists, so we change the preference to that language.
            localStorage.setItem("preferedLanguage", languageTo);
            this.reloadAllLanguageResources();
            this.currentLanguage = languageTo;
        } else {
            // The selected language does not exist in the languages list.
            // We now just output an error message to the user.
            window.alert("The selected language is not supported");
        }
    }
}

let languagePreferencesSystem = new LanguagePreference();
