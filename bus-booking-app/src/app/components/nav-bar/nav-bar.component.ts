import { Component, OnInit } from '@angular/core';
import { Pages } from 'src/app/shared/constants/pages.constant';
import { Page } from 'src/app/shared/models/nav-bar.model';
import { translate, TranslocoService } from '@ngneat/transloco';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  pages: Page[] = Pages;
  currentLanguage: string = 'es';
  
  constructor(
    private titleService: Title,
    private translocoService: TranslocoService
  ) { }
 
  ngOnInit(): void {
  }

  changeLanguage(language: string){
    this.translocoService.setActiveLang(language)
    this.currentLanguage = language;
  }

  setTitle(title: string): void {
    this.titleService.setTitle(translate(title));
  }

}
