# Aplikacja SPA - Wdrożenie w środowisku chmurowym

## Cel ćwiczenia

Celem tego laboratorium było:

1. Zaprojektowanie i wdrożenie aplikacji typu SPA przy użyciu języków HTML, CSS oraz JavaScript.
2. Zrozumienie działania mechanizmów asynchronicznego ładowania zawartości bez przeładowywania strony.
3. Opanowanie podstaw zarządzania historią przeglądarki w aplikacjach SPA.
4. Publikacja aplikacji w środowisku chmurowym (GitHub Pages / Azure Static Web Apps).

## Opis wykonanych kroków

### 1. Przygotowanie projektu

Stworzono strukturę projektu z plikami:

- `index.html`
- `style.css`
- `router.js`

### 2. Struktura HTML

W projekcie utworzono sekcje nawigacji oraz dynamiczną sekcję główną `main`. Podłączono pliki CSS oraz JavaScript, aby strona była funkcjonalna i estetyczna.

### 3. Stylizacja CSS

Zastosowano podstawowe style dla elementów strony:

- Nagłówek
- Nawigacja
- Sekcja główna

### 4. Obsługa dynamicznych podstron w `router.js`

Zaimplementowano funkcje do dynamicznego ładowania treści na stronach, takie jak:

- `RenderAboutPage`
- `RenderContactPage`

### 5. Dodatkowe funkcje

- **Ciemny/jasny motyw:** Dodano możliwość przełączania motywu aplikacji.
- **Formularz kontaktowy:** Implementacja walidacji formularza z poprawnym i błędnym wypełnieniem danych.

### 6. Wdrożenie aplikacji

Projekt został opublikowany w środowisku chmurowym, zarówno na **GitHub Pages**, jak i na **Azure Static Web Apps**.

**Adres URL aplikacji online:** [https://yzavydovska.github.io/?about](https://yzavydovska.github.io/?about)

## Rezultaty

Aplikacja działa zgodnie z założeniami:

- Płynna nawigacja między podstronami.
- Formularz kontaktowy waliduje dane poprawnie i wyświetla powiadomienie po przesłaniu.
- Galeria zdjęć obsługuje lazy loading oraz modalne wyświetlanie zdjęć.
- Projekt został pomyślnie wdrożony i jest dostępny publicznie.

## Testy funkcjonalności

1. **Nawigacja między podstronami:** Testowane dynamiczne ładowanie zawartości sekcji `main` w pliku JavaScript.
   
2. **Lazy loading i modal w galerii:** Testowane poprawne ładowanie obrazów oraz interakcje z użytkownikiem.

3. **Formularz kontaktowy:** Testy walidacji i przesyłania danych.
   - Komunikat o błędzie przy niepoprawnym wypełnieniu formularza oraz potwierdzenie przy poprawnym.

4. **Responsywność i kompatybilność:** Sprawdzenie działania aplikacji na różnych urządzeniach oraz przeglądarkach.
   - **Widok aplikacji na ekranie mobilnym:**
   - 
## Wnioski

- Aplikacja SPA umożliwia budowanie nowoczesnych, wydajnych i interaktywnych stron internetowych.
- Zastosowanie metod asynchronicznych (np. lazy loading) znacząco poprawia doświadczenie użytkownika.
- Publikacja aplikacji na GitHub Pages i Azure Static Web Apps to szybkie i łatwe rozwiązanie dla prostych projektów.

## Technologie użyte w projekcie

- **HTML**: Struktura aplikacji.
- **CSS**: Stylizacja aplikacji.
- **JavaScript**: Zarządzanie nawigacją oraz dynamicznym ładowaniem treści.
- **GitHub Pages**: Hosting aplikacji.
- **Azure Static Web Apps**: Alternatywny hosting aplikacji.
