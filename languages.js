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
            // So now, we set a language by his browser's default language in case of that can be found in the supported languages.
            if(Object.keys(this.languages).includes(navigator.language.split("-")[0])) localStorage.setItem("preferedLanguage", navigator.language.includes("-") ? navigator.language.split("-")[0] : navigator.language);
            else localStorage.setItem("preferedLanguage", "en");
            // We make a queryable parameter, to check what the current language is.
            this.currentLanguage = localStorage.getItem("preferedLanguage");
        } else {
            this.currentLanguage = localStorage.getItem("preferedLanguage");
        }
        this.reloadAllLanguageResources();
    }
    // Reload all langauge resources
    reloadAllLanguageResources = () => {
        let selectedLanguage = localStorage.getItem('preferedLanguage') ? localStorage.getItem('preferedLanguage') : "en";
        // For all language material rawly called from the website
        let all_language_elements = document.querySelectorAll("[data-languagePartIdentifier]");
        let i = 0;
        while(i < all_language_elements.length){
            // We need to check if current element from all_language_elements contains data-toggle="tooltip" attribute, because if it contains we don't want to change the text
            if(all_language_elements[i].getAttribute("data-toggle") != "tooltip"){
                // It does not contain, so we can apply the required text
                all_language_elements[i].textContent = this.languages[selectedLanguage][all_language_elements[i].getAttribute("data-languagePartIdentifier")];
            }
            i++;
        }
        // For bootstrap 5 tooltips
        let all_tooltips = document.querySelectorAll("[data-toggle='tooltip']");
        let j = 0;
        while(j < all_tooltips.length){
            all_tooltips[j].setAttribute("title", this.languages[selectedLanguage][all_tooltips[j].getAttribute("data-languagePartIdentifier")]);
            j++;
        }

        // For bulma.io tooltips
        let all_tooltips_bulma = document.querySelectorAll("[data-tool-languagePartIdentifier]");
        let bulTooltip = 0;
        while(bulTooltip < all_tooltips_bulma.length){
            all_tooltips_bulma[bulTooltip].setAttribute("data-tooltip", this.languages[selectedLanguage][all_tooltips_bulma[bulTooltip].getAttribute("data-tool-languagePartIdentifier")]);
            bulTooltip++;
        }
        
        // For all the placeholder requirements, where we want multiple language support on a placeholder.
        let allPlaceHolders = document.querySelectorAll("[data-placeholder]");
        let p = 0;
        while(p < allPlaceHolders.length){
            allPlaceHolders[p].setAttribute("placeholder", this.languages[selectedLanguage][allPlaceHolders[p].getAttribute("data-placeholder")]);
            p++;
        }

        // For all website tour requirements, (requires TourGuideJS)
        // Find all elements with both data-tr-languagepartidentifier and data-tg-order attributes
        let allWebsiteTourElements = document.querySelectorAll("[data-tr-languagepartidentifier][data-tg-order]");
        let tourElementsIndex = 0;
        while(tourElementsIndex < allWebsiteTourElements.length){
            // Set the value of the data-tg-tour attribute to the languageIdentifier
            allWebsiteTourElements[tourElementsIndex].setAttribute("data-tg-tour", this.languages[selectedLanguage][allWebsiteTourElements[tourElementsIndex].getAttribute("data-tr-languagepartidentifier")]);
            tourElementsIndex++;
        }
    }

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
document.addEventListener('DOMContentLoaded', () => {
    languagePreferencesSystem.reloadAllLanguageResources();
});