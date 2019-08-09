# Scrap app

Frontend aplikacji, którą stworzyłem w wolnym czasie. Można powiedzieć, że jest to rozbudowana lista zadań z możliwością prezentowania wprowadzonych danych. Projekt pozwolił mi postawić swoje pierwsze kroki z Reactem. Scrap app jest ściśle związany z [Backendem](https://github.com/floreq/backend).

## Wprowadzenie

Aplikacja wykorzystuje do działania bibliotekę React.js. 

### Przed uruchomieniem

Należy posiadać, np. menadżer plików Node.js do uruchomienia aplikacji. Poniższe polecenia są wykonywane w terminalu:

- Ubuntu 18.04
```
sudo apt update
sudo apt install nodejs
nodejs --version
```

### Uruchomienie aplikacji

W folderze z frontend należy wykonać poniższe instrukcje.

Pierwsze uruchomienie, inicjalizacja.

```
npm install
npm start
```

Po pierwszym uruchomieniu wystarczy już samo polecenie:

```
npm start
```

## Jak dodać kolejną podstronę Sklep... (Workplace)

1. Dodać w komponencie [Navbar](https://github.com/floreq/frontend/blob/72cff2a86c5d744cdb3255fdb358ec6d96ee93ba/src/components/Navbar.jsx#L23-L28) dodatkową podstronę.
2. Dodać w komponencie [Summary](https://github.com/floreq/frontend/blob/72cff2a86c5d744cdb3255fdb358ec6d96ee93ba/src/containers/Summary.jsx#L13-L30) dodatkową ostatnią aktywność nowej podstrony.
3. W [Backend](https://github.com/floreq/backend) należy zmodyfikować zmienną [possibleOrigin](https://github.com/floreq/backend/blob/119793467d06285aa6d16e8b336db49038d50a5b/server.js#L82) w funkcji ```isValidInsert()```.
4. Dalej w [Backend](https://github.com/floreq/backend) należy dodać do [Promise.all](https://github.com/floreq/backend/blob/119793467d06285aa6d16e8b336db49038d50a5b/server.js#L399w) w zapytaniu ```"/workplaces/"``` kolejne odniesienie się do podstrony.

## Wygląd aplikacji

Tak wygląda aplikacja z przykładowo wprowadzonymi danymi.

### Podsumowanie (Summary)
![Summary](/documentation/images/summary.png)

---
### Dziennik aktywności (TaskLog)
![TaskLog](/documentation/images/tasklog.png)

---
### Sklep 1... (Workplace)
![Workplace](/documentation/images/workplace.png)

---

## Wykorzystane

- [Create React App](https://github.com/facebook/create-react-app) - Stworzenie szablonu aplikacji
- [React.js](https://reactjs.org/) - Główna biblioteka 
- [Chart.js](https://www.chartjs.org/) - Silnik wykresów

## Autorzy

- **Piotr Florczak** - *większość pracy* - [Floreq](https://github.com/floreq)

Zobacz również współpracowników, którzy uczestniczyli w projekcie:
- [Aqum](https://github.com/aqum),
- [TheXenonis](https://github.com/TheXenonis).

## Licencje

Znajdują się w folderze [licenses](/documentation/licenses/).

## Zobacz również

Powiązane repozytorium [Backend](https://github.com/floreq/backend).


