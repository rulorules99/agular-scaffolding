import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// MATERIAL MODULE
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
  ],
  declarations: [ ],
  entryComponents: [ ],
  providers: []
})
export class SharedModule {
  private path = '/assets/img/';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer ) {
    this.matIconRegistry.addSvgIcon (
      'example', this.addTrustUrl(`${this.path}path/to/resource.svg`)
    );
  }

  private addTrustUrl(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
