# Merge intervals Ergebnisse

## Bearbeitungszeit
ca. 8h

## Laufzeit
gemessen: 7ms

## Komplexität

- Sortierung
  - Arrays <= 10: InsertionSort `O(n^2)`
  - Arrays > 10: QuickSort `O(n log(n))`
- Merge mit Array.reduce() `O(n)`

## Robustheit
- Nur JSON-konforme Eingaben werden akzeptiert
- Intervalle, welche keine Zahlen-Tupel sind, werden ignoriert

## Speicherverbrauch
Durch die verwendeten Algorithmen, analog zur Komplexität.
- Beispiel-Intervalle: 3,72 MB
- Bei größerem Array: 3,49 MB
  > `"[[25,30], [2,19], [14,23], [4,8], [34,39], [26,29], [24,31], [40,50], [1,2], [2,3], [3,4]]"`
