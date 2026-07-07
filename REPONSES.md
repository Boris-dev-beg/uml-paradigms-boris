# UML & Appoche orientée Objet / Paradigmes de Programmation
## Partie 1
1. Une **Classe** est la representation d'un objet de la realite, alors qu'un **Objet** est une instance d'une classe. Exemple: la classe *Member* qui a les attributs name, email et l'object *M1* de name *Ali* et d'email *ali@gmail.com*
2. l'**Encapsulation** est une technique de protection des donnees qui determine le niveau d'acces a une donnee; sur la classe *Loan*, elle s'appliquera sur ses attributs.
3. Difference:
* une **Association** est un lien d'egale a egale entre deux classe;
* une **Agregation** est une relation *maitre/esclave* entre deux classe où la destruction du maitre n'entraine pas forcement celle de ses esclaves;
* un **Composition** est une relation *maitre/esclave* entre deux classe où la destruction du maitre entraine celle de ses esclaves;
4. l'**Heritage** est une relation *parent/enfant* entre deux classes dans laquelle l'*enfant* herite de toute les proprietées publique de son parent; Oui il y'a un cas d'heritage dans ce systeme, car la classe *Member* possede les memes attributs de base que la classe *Librarian* et pour eviter de creer les memes attributs plusieurs fois il faut creer une classe parente dont ses enfants *Member et Librarian* heriterait de ses attributs de base.
5. le **Polymorphisme** est la capacite pour une meme methode de s'executer en fonction du contexte de la sous-classe dans laquelle elle se trouve; Exemple : Une methode de la classe *Person* calculerSalaire() qui s'excecutera d'une façon different selon le member ou le librarian.
6. Difference:
* Le **Diagramme de cas d'utilisation** montre les differentes sequences d'action qu'utilisateur sera emmener a faire lors de l'utilisation de l'application;
* Le **Diagramme de sequence** momtre comment une sequence d'action specifique ce deroule;
7. Difference:
* Une relation **include** entre une classe A et une classe B, signifie que pendant l'execution de A, B s'execute egalement; Exemple: La relation entre les cas << Emprunter un livre >> et << Valider un emprunt >> est *Include*,
* Une relation **extend** entre une classe A et une classe B, signifie que pendant l'execution de A, B peut egalement s'execute ; Exemple: La relation entre les cas << Emprunter un livre >> et << Suspendre un membre >> est *extend*.
8. Un **Diagramme d'etat-transition** sert a modeliser les differents etats d'un seul objet. Il resoud le probleme de savoir a quel moment un objet quitte d'un etat a un autre.
9. La **Multiplicité** dans un diagramme de classe represente le nombre de fois qu'une instance d'une classe peut participer a une relation avec une autre classe. Celle entre *Menbre* et *Loan* est de 3, car une membre peut contracter au plus 3 emprunts simultannées.
10. L'**approche orientee object** permet de representée de façons visuel un systeme dans sa globalitée en ce basant sur le concept d'objet, alors que l'**approche procedural** se concentre plutôt sur les fonctions du systemes.

## Partie 2
1. Le **Paradigme imperatif** determine comment instructions doivent s'executer alors que le **Paradigme declaratif** determine uniquement se que l'on veut sans se soucier de comment les instructions doivent s'executées.
2. Une **Fonction pure** est celle qui ne modifie aucune variable exterieure et retourne pour les memes valeurs le meme resultat. Nous evitons les effect de bords pour rendre le code plus maintenable, lisible et reutilisable.
3. L'avantage de l'approche *Oriente Objet* est la reutilisabilitees, la maintenabilite et l'organisation du code
4. Langages:
    * **Imperatif**: le langage C;
    * **Oriente Objet**: le langage JAVA;
    * **Fonctionnel**: le langage JavaScript;
    * **Declaratif**: le langage SQL;
5. Le language *JavaScript* n'est pas rattacher a un seul paradigme, car il permet de faire l'ensemble de ces paradigmes.
6. L'approche **Fonctionnelle** est utiliser lorsqu'il faut manipuler un grand nombre de donnee fixe, et celle **Oriente objet** est utiliser lorsqu'il faut constemment manipuler les donnees. Exemple: pour la realisatoin d'un jeu video l'Approche Orientée Objet est la plus adaptée.
7. *Les diagrammes UML* definissent des object et comment ils iteragissent avec le systeme et le *Paradigme Oriente Objet* utilise ces definitions pour implementer les objets.
8. **Django** repose principalement sur le paradigme orientée objet et fonctionnelle, exemple de QuerySet: *articles = Article.objects.filter(title="Chaussure")*.