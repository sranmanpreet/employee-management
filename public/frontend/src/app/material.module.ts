
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    exports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule
    ]
})

export class MaterialModule { }
