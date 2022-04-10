import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
],
exports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
]
})
export class MaterialModule {}