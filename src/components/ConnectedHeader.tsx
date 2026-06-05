"use client";

import Header from "./Header";
import { useLang } from "./LangProvider";

export default function ConnectedHeader() {
  const { lang, setLang } = useLang();
  return <Header lang={lang} onLangChange={setLang} />;
}
