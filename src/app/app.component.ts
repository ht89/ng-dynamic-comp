import { Component, Inject, ViewContainerRef, ViewChild } from '@angular/core';
import { DynamicService } from './dynamic/dynamic.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    @ViewChild('dynamic', {
        read: ViewContainerRef
    }) viewContainerRef: ViewContainerRef;

    constructor( @Inject(DynamicService) private dynamicService, /*@Inject(ViewContainerRef) private viewContainerRef */) {
        // add dynamic comp as a sibling
        // dynamicService.setRootViewContainerRef(viewContainerRef);
        // dynamicService.addDynamicComponent();
    }

    ngOnInit() {
        this.dynamicService.setRootViewContainerRef(this.viewContainerRef);
        this.dynamicService.addDynamicComponent();
    }
}
