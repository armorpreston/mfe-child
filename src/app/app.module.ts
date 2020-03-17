import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { ChildComponent } from './child/child.component';
import { ChildPageComponent } from './child-page/child-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildPageComponent
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
    const ngCustomElement = createCustomElement(ChildComponent, { injector });
    // define in browser registry
    customElements.define('mfe-child', ngCustomElement);

    const ngCustomElement2 = createCustomElement(ChildPageComponent, { injector });
    // define in browser registry
    customElements.define('mfe-child-page', ngCustomElement2);
  }
}
