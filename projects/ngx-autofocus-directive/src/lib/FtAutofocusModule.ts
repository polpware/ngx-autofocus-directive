import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './directives/AutofocusDirective';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        AutofocusDirective,
    ],
    exports: [
        AutofocusDirective,
    ]
})
export class FtAutofocusModule { }

export { AutofocusDirective };
