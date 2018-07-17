import { Injectable, Inject, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Injectable()
export class DynamicService {
    rootViewContainerRef: ViewContainerRef;

    constructor(@Inject(ComponentFactoryResolver) private factoryResolver) { 
    }

    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainerRef = viewContainerRef;
    }

    addDynamicComponent() {
        const factory = this.factoryResolver.resolveComponentFactory(DynamicComponent);
        const component = factory.create(this.rootViewContainerRef.parentInjector);

        this.rootViewContainerRef.insert(component.hostView);
    }
}
