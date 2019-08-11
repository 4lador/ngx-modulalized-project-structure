import { NgModule } from '@angular/core';

import { MapperComponent } from './pages/mapper.component';
import { MapperRoutingModule } from './mapper-routing.module';

@NgModule({
    imports: [
        MapperRoutingModule
    ],
    exports: [],
    declarations: [MapperComponent],
    providers: [],
})
export class MapperModule { }
