# HTML-JS-interaction

## Données de départ

Utilisez le fichier HTML fourni pour réaliser les exercices suivants.



## 1 - Exploration du DOM dans la console

Ouvrez la console du navigateur avec **F12 → Console**.

Utilisez les méthodes suivantes pour sélectionner et observer les éléments de la page :

```javascript
document.getElementsByTagName('div');

document.getElementById('list');

document.querySelector('p');

document.querySelectorAll('li');
```

Observez les résultats retournés par chaque commande.

---

## 2 - Modifier le texte des `<li>`

Sélectionnez tous les éléments `<li>`.

Utilisez `forEach` pour **ajouter** le texte `" - Hello World"` à la fin du texte de chaque ville.


### Indice

Utilisez :

```javascript
.textContent
```

---

## 3 - Modifier le style du paragraphe

Sélectionnez le paragraphe `<p>` et modifiez son style avec JavaScript.

Le paragraphe doit avoir :

* une couleur bleue ;
* une taille de `20px` ;
* un texte en gras.

### Indice

Utilisez :

```javascript
.style
```

---

## 4 - Modifier la taille de l'image

Sélectionnez l'image avec JavaScript.

Réduisez sa hauteur de `400px` à `300px`.

La modification doit être réalisée **uniquement avec JavaScript**.

### Indice

Utilisez :

```javascript
.style.height
```

---

## 5 - Modifier dynamiquement la liste

On dispose du tableau suivant :

```javascript
var cities = ['San Francisco', 'Cairo', 'Tokyo', 'Nairobi'];
```

À partir de ce tableau, **remplacez le contenu de la liste `<ul>`** par les villes contenues dans `cities`.

La liste finale doit contenir uniquement :

```text
San Francisco
Cairo
Tokyo
Nairobi
```

Vous devez créer les éléments `<li>` dynamiquement avec JavaScript.

---

## 6 - Changer l'image au clic

Lorsque l'utilisateur clique sur l'image :

* l'image doit changer ;
* au clic suivant, elle doit revenir à la première image ;
* elle doit donc alterner entre **deux images**.

Utilisez un événement `click`.

### Indices

Utilisez :

```javascript
addEventListener()
```

et modifiez :

```javascript
src
```

---

## 7 - Changer automatiquement l'image

À présent, ajoutez un changement automatique des images.

Utilisez `setInterval` pour alterner entre les deux images **toutes les 3 secondes**.

L'image doit continuer à alterner automatiquement sans que l'utilisateur ait besoin de cliquer.

### Indice

Utilisez :

```javascript
setInterval()
```

---

## 8 - Créer un mini formulaire

Ajoutez dynamiquement au début du `<body>` :

* un `<input>` permettant de saisir une ville ;
* un bouton `"Add City"`.

Lorsque l'utilisateur clique sur le bouton :

1. récupérez la valeur de l'input ;
2. créez un nouvel élément `<li>` ;
3. ajoutez la ville dans le `<li>` ;
4. ajoutez le `<li>` à la liste `<ul>` ;
5. videz l'input après l'ajout.

### Indices

Vous pouvez utiliser :

```javascript
.value
```

```javascript
document.createElement()
```

```javascript
appendChild()
```

---

## 9 - Supprimer une ville

Lorsqu'un utilisateur clique sur une ville, le `<li>` correspondant doit être supprimé de la liste.

La suppression doit également fonctionner pour les villes **ajoutées dynamiquement** avec le formulaire.


---

## 10 - Validation du formulaire

Modifiez le formulaire afin d'empêcher l'ajout d'une ville lorsque l'input est vide.

Si l'utilisateur clique sur **Add City** sans saisir de ville :

* aucun `<li>` ne doit être ajouté ;
* un message d'erreur doit être affiché sous le formulaire.

Exemple :

```text
Please enter a city.
```

Si l'utilisateur saisit correctement une ville :

* la ville est ajoutée à la liste ;
* l'input est vidé ;
* le message d'erreur disparaît.
