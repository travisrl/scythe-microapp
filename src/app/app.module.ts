import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

import { Injector } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})

export class AppModule {
  constructor(private injector: Injector) {
    if (!customElements.get('scythe-microapp')) {
      const scytheMicroAppElement = createCustomElement(AppComponent, {injector});
      customElements.define('scythe-microapp', scytheMicroAppElement);
    }
  }
  ngDoBootstrap(){}
}
