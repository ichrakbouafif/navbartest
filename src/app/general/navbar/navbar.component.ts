import { Component, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showSearchBar = false;

  searchTerm:string ="";

  @Output()
  searchTermChanged: EventEmitter<string>=new EventEmitter<string>();
  constructor(private route:ActivatedRoute, private router :Router ){

  }


  toggleSearch() {
    this.showSearchBar = !this.showSearchBar;
  }

  goToSearch() {
    this.router.navigate(['/search']);
  }

  onSearchTermChanged(){
    this.searchTermChanged.emit(this.searchTerm);
  }



  search(): void {
    if (this.searchTerm) {
      this.router.navigateByUrl('/search?name=' + this.searchTerm);
    }
  }

}
