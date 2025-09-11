/*
import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('ecom-front');

  ngAfterViewInit() {
      // Modifier le texte avec jQuery
      $('#titre').text('jQuery fonctionne !');

      // Test clic
      $('#btnTest').click(() => {
        alert('Bouton cliqué avec jQuery !');
      });
    }
}
*/

import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MonSite</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link active" href="#">Accueil</a></li>
            <li class="nav-item"><a class="nav-link" href="#">À propos</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <h1 id="titre">Test jQuery</h1>
      <button id="btnTest" class="btn btn-primary">Clique-moi</button>
    </div>
  `
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Modifier le texte
    $('#titre').text('jQuery fonctionne !');

    // Bouton clic
    $('#btnTest').click(() => {
      alert('Bouton cliqué avec jQuery !');
    });

    // Pour debug
    console.log('jQuery chargé:', $);
    window.$ = $;
    window.jQuery = $;
  }
}
