const header = {
    language:{
        setLanguage: 'deCH',
        deCH:{
            headerTitleHome: "Portfolio von Rolf Karlen",
            headerTitleExamples: 'Beispiele-Website',
            headerTitleMenuApp: 'menuApp',
            headerTitleMulti: 'Multiplication Table', 
            displayModeLightTitle: "Wechseln zu Dark Theme",
            displayModeDarkTitle: "Wechseln zu Basic Theme"
        },
        enUS:{
            headerTitleHome: "Portfolio by Rolf Karlen",
            headerTitleExamples: 'Example Website',
            headerTitleMenuApp: 'menuApp',
            headerTitleMulti: 'Multiplication Table', 
            displayModeLightTitle: "Change to Dark Theme",
            displayModeDarkTitle: "Change to Basic Theme"
        }
    },
    url:{
        modeHrefBasic: './components/css/basic.css',
        modeHrefDark: './components/css/dark.css',
        photoSrcBasic: './components/images/ich_balmkirchli_adjusted.jpg',
        photoSrcDark: './components/images/balmkirchli_adjusted.jpg'
    },
    themeMode:{
        displayModeLight: "light_mode",
        displayModeDark: "dark_mode"
    },
    class:{
        heading: "heading",
        headingDiv: "heading-div",
        imageLinkMenu: "image-link-menu",
        themeMode: "mode",
        materialIcons: "material-icons",
        menu: "menu",
        firstItem: "first-item"
    },
    id:{

    }
}
//headerJson = JSON.stringify(header);
export default header;
