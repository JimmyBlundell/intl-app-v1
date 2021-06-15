import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Spanish from "../i18n/es-MX.json";
import English from "../i18n/en-US.json";

const emptyContext: any = [null, () => {}];

export const Context = React.createContext(emptyContext);
const local = navigator.language;

let lang: any;
if (local === "en-US") {
    lang = English;
} else {
    lang = Spanish;
}

const Wrapper = (props: any) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    function selectLang (e: { target: { value: any; }; }) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "es-MX") {
            setMessages(Spanish);
        } else {
            setMessages(English);
        }
    }

 return (
     <>
         <Context.Provider value={{locale, selectLang}}>
             <IntlProvider locale={locale} messages={messages} >
                 {props.children}
             </IntlProvider>
         </Context.Provider>
     </>
 );
}

export default Wrapper;