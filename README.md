# DSChromeograph
## Installation:
- Chrome öffnen
- chrome://extensions/ öffnen
- Entwicklermodus aktivieren
- "Entpackte Erweiterung laden..."
- Diesen Ordner auswählen
- Fertig

## Nutzung:
- Vom Versammlungsplatz aus auf Angreifen klicken (Nicht direkt auf der Karte angreifen)
- Zeit eintragen (Mit oder ohne millisekunden. Muss durch ":" getrennt sein, funktioniert nur für angriffe am selben Tag)
- Start klicken
- Warten bis angegriffen wurde

- Nicht erwischt werden

## Source:
### manifest.json
Informationen für Chrome

### background.js
Wird von Chrome aufgerufen und fügt das Javascript in setupPage.js auf den entsprechenden Seiten hinzu.

### setupPage.js
Wird auf der Seite ausgeführt.
Der größte Teil fügt das HTML zur Seite hinzu, welches dafür zuständig ist, dass das Zusätzliche Textfeld etc. angezeigt werden.

MutationObserver achtet auf änderungen im html. In dem Moment in dem auf den "Start" button gedrückt wird, fängt der MutationObserver an, auf Änderungen zu achten.
Gibt es eine Änderung (Die "Ankunft" Sekunde ändert sich), dann wird die sending Funktion aufgerufen. Gilt (Aktuelle Zielzeit) == (Gewünschte Zielzeit) wird das Formular abgeschickt. Sind millisekunden angegeben, dann wird entsprechend der Millisekunden gewartet. Sind keine Millisekunden angegeben ist der delay = 0.
