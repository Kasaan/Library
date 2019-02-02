import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfComponent } from './shelf/shelf.component';
import { WishComponent } from './wish/wish.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ShelfComponent,
        WishComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        ShelfComponent,
        WishComponent,
    ]
})
export class ComponentsModule {}
