import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { NestComponent } from './nest/nest.component';

@NgModule({
  declarations: [
    AppComponent,
    NestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap(): void {
    const { injector } = this;
    // create custom elements from angular components
    const ngCustomElement = createCustomElement(AppComponent, { injector });
    // define in browser registry
    customElements.define('kid-a', ngCustomElement);
  }
}
