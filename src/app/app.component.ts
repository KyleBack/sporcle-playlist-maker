import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sporcle-playlist-maker'
  home_tab_selected: boolean = true

  constructor(private router: Router) { }

  public redirect(page: string) {
    this.router.navigate(['./' + page])
  }

  public clickHome() {
    if (!this.home_tab_selected) {
      this.home_tab_selected = true
      this.redirect('home')
    }
  }

  public clickAbout() {
    if (this.home_tab_selected) {
      this.home_tab_selected = false
      this.redirect('about')
    }
  }
}
