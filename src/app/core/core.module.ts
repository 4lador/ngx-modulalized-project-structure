import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        CoreRoutingModule,
        RouterModule,
    ],
    providers: [],
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
        }
    }
}
