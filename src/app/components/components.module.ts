import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfComponent } from './shelf/shelf.component';
import { WishComponent } from './wish/wish.component';

@NgModule({
    declarations: [
        ShelfComponent,
        WishComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
    ]
})
export class ComponentsModule {}
