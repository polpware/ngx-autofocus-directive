import { Directive, AfterViewInit, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
    selector: '[autofocus],[attr.autofocus]'
})
export class AutofocusDirective implements AfterViewInit, OnDestroy {

    /**
     * Set to null to disable
     */
    @Input()
    autofocus: any;

    private _timerId: number;

    constructor(
        private _el: ElementRef,
    ) { }

    ngAfterViewInit() {
        const htmlEl: HTMLElement = this._el.nativeElement;
        if (this.autofocus || htmlEl.hasAttribute('autofocus')) {
            if (!htmlEl.focus) {
                throw new Error(`Cannot focus element. focus() method not found.`);
            }

            this._timerId = window.setTimeout(() => htmlEl.focus(), 50);
        }
    }

    ngOnDestroy() {
        if (this._timerId) {
            window.clearTimeout(this._timerId);
        }
    }
}
