import { NgModule } from '@Angular/core'
import {MatToolbarModule, MatCardModule, MatIconModule, MatRadioModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatButtonModule, MatSnackBarModule, MatMenuModule} from '@angular/material'
@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatButtonModule,
        MatSnackBarModule,
        MatMenuModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatButtonModule,
        MatSnackBarModule,
        MatMenuModule
    ]
})
export class MaterialModule { }