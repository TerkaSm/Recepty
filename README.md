# Recepty

Aplikace pro správu receptů

## Zadání

1. Nejprve si rozmyslete jaká data bude vaše aplikace potřebovat. Jak mohou vypadat informace o receptu se můžete inspirovat třeba na webu Rohlik.cz. Výhoda tohoto webu je, že mají i hezké obrázky, které si můžete pro účely tohoto cvičení vypůjčit. Rozmyslete si, jaké informace budete potřebovat pro seznam receptů a jaké pro detail jednoho receptu. S bohatostí informací to zároveň nepřehánějte, abyste nestrávili většinu času hledáním obrázků a psaním textů.
2. Jakmile máte rozmyšlenou datovou strukturu, založte si API backend pomocí jsonhost. Založte na backendu kolekci s recepty a naplně ji několika recepty, které budeme později zobrazovat na hlavní stránce.
3. Založte si Vite/JSX projekt pro frontend aplikace. Na hlavní stránce stáhněte z API seznam receptů a zobrazte je na stránce.
4. Vytvořte komponentu RecipeCard, která bude zobrazovat jednu kartu s receptem. V této komponentě zobrazte název receptu, obrázek a popis. Vytvořte si pro tuto komponentu nějaké rozumné CSS styly.
5. Do stránky přidejte fromulář, do kterého uživatel může zadat nový recept. Formulář osaďte spoluchačem události submit a pomocí požadavku POST odešlete nový recept na server. Po úspěšném přidání receptu proveďte refresh stránky.
6. Na kartu receptu přidejte tlačítko pro smazání receptu. Tlačítko osaďte posluchačem události click a pomocí požadavku DELETE odešlete požadavek na server. Po úspěšném smazání receptu proveďte refresh stránky.
7. Na karty receptu přidejte odkaz pro přechod na detail receptu. Vytvořte stránku pro detail receptu a pomocí search parametrů jí předejte id receptu, který má zobrazit. Zobrazte recept na stránce.
8. Na stránce s detaily receptu přidejte odkaz pro návrat na hlavní stránku, aby se uživatel mohl vrátit zpět na seznam receptů.