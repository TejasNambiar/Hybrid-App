import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

const materialComponents =[
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule
] 

@NgModule({
  imports: [materialComponents],
  exports:[materialComponents]
})
export class MaterialModule { }
