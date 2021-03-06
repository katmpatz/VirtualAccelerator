# VirtualAccelerator

## Περιγραφή
Η εφαρμογή αφορά τη δημιουργία ενός virtual accelerator, στον οποίο θα εντάσσονται επιχειρηματικές ομάδες προκειμένου να αναπτύξουν την ιδέα τους, υπό την καθοδήγηση κάποιου ειδικού (coach). Οι χρήστες συνδέονται στο σύστημα, με τους κωδικούς που τους έχει δώσει ο διαχειριστής του συστήματος. Κάθε μέλος της ομάδας  μπορεί να κατεβάσει το template του παραδοτέου και να ανεβάσει το τελικό παραδοτέο σε μορφή pdf. O coach ενημερώνεται για την πρόοδο των ομάδων, αν δηλαδή έχουν παραδώσει ή έχει περάσει το deadline παράδοσης χωρίς να παραδώσουν, και μεταβαίνοντας στη σελίδα του παραδοτέου της ομάδας μπορεί να κατεβάσει το αρχείο που παρέδωσε η ομάδα καθώς και να κάνει σχόλια σε αυτό. Επίσης μπορεί να κάνει αναζήτηση με βάση το όνομα μιας ομάδας, να προσθέσει και να διαγράψει μια ομάδα, να αναθέσει παραδοτέα σε αυτήν και να επεξεργαστεί τα στοιχεία των μελών της. Όσον αφορά τη δημιουργία των παραδοτέων ο coach μπορεί να δημιουργήσει ένα παραδοτέο, ανεβάζοντας ένα αρχείο ως template, καθώς και να το διαγράψει. Τέλος κάθε χρήστης μπορεί να επεξεργαστεί τις προσωπικές του πληροφορίες στο προφίλ του.

Η εφαρμογή είναι διαθέσιμη στον παρακάτω σύνδεσμο, προτείνεται να χρησιμοποιηθεί ως browser το Google Chrome: [Virtual Accelerator](https://snf-843482.vm.okeanos.grnet.gr/users "Accelerator")

#### Είσοδος στην Εφαρμογή:
Όπως προαναφέρθηκε και στην περιγραφή, οι χρήστες δημιουργούνται μόνο από τον διαχειριστή του συστήματος, καθώς δεν πρέπει να είναι δυνατόν ο οποιοσδήποτε να χρησιμοποιήσει την εφαρμογή.

##### Ενδεικτικοί κωδικοί για είσοδο στην εφαρμογή:
Είσοδος ως coach:
* username: mgalani, password: 12345678vap
* username: akaragiannaki. password:12345678vap

Είσοδος ως μέλος ομάδας:
* username: tanogeianaki, password: 12345678vap
* username: jbatas, password: 12345678vap

##### Σημείωση
Τα αρχεία pdf που ανεβάζουν οι χρήστες του συστήματος προτείνεται να είναι μικρού μεγέθους.


## Εγκατάσταση
#### Βήμα 1:
Προκειμένου να εγκαταστήσουμε την εφαρμογή και να την τρέξουμε τοπικά θα πρέπει αρχικά να την κατεβάσουμε. Αυτό γίνεται τρέχοντας την παρακάτω εντολή:

```
$ git clone https://github.com/katmpatz/VirtualAccelerator.git
```
#### Βήμα 2:
Στην περίπτωση που δεν έχουμε εγκατεστημένο τον MySQL server, θα πρέπει να τον κατεβάσουμε προκειμένου να προχωρήσουμε στην εγκατάσταση.
Μεταβαίνουμε στον φάκελο VirtualAccelerator/server και για να συνδεθούμε με την MySQL δίνουμε:

```
$ mysql -u root -p
```

Για να δημιουργήσουμε τη βάση πρέπει να δώσουμε τα παρακάτω στη MySQL:

```
CREATE DATABASE vap CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE USER 'vap_user'@'localhost' IDENTIFIED BY 'V@p2018V@p2018';

GRANT ALL PRIVILEGES ON vap.* TO 'vap_user'@'localhost';

```
Για τη δημιουργία των πινάκων της βάσης δίνουμε:

```
$ python manage.py migrate
```

Επίσης για να δημιουργηθεί ο διαχειρηστής του django δίνουμε:

```
$ python manage.py createsuperuser
```

Στο αποθετήριο υπάρχει ένα αρχείο backup.json το οποίο περιέχει κάποια δοκιμαστικά δεδομένα για την εφαρμογή μας. Για να φορτώσουμε τα δεδομένα στη βάση δίνουμε την εντολή:

```
$ python manage.py loaddata backup.json
```

Για να ξεκινήσει η εφαρμογή δίνουμε την εντολή:

```
$ python manage.py runserver
```

#### Βήμα 3:
Πρέπει να κατεβάσουμε επίσης κάποιες βιβλιοθήκες. Δίνουμε τις εντολές:

```
$ pip install djangorestframework
```

```
$ pip install httpie
```

```
$ pip install djangorestframework-simplejwt
```

```
$ pip install PyPDF2
```

```
$ pip install Pillow
```

#### Βήμα 4:
Για να ξεκινήσει to backend της εφαρμογής μας δίνουμε την εντολή:

```
$ python manage.py runserver
```

#### Βήμα 5:
Για να μπορέσουμε να τρέξουμε την angular θα πρέπει να εγκαταστήσουμε πρώτα το [npm](https://www.npmjs.com/get-npm "NPM") και στη συνέχεια το εργαλείο γραμμής εντολών του Angular, Angular CLI δίνοντας την παρακάτω εντολή:

```
$ npm install -g @angular/cli
```
Τέλος για να ξεκινήσουμε την εφαρμογή δίνουμε:

```
$ ng serve --open
```
Αν στο login ζητηθούν κωδικοί δίνουμε τα username και password που περιλαμβάνονται στην περιγραφή.
