import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
  storedRoutes = new Map<string | undefined, DetachedRouteHandle | null>();
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.data['shouldReuse'] || false;
  }
  store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null
  ): void {
    this.storedRoutes.set(route.routeConfig?.path, handle);
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.storedRoutes.has(route.routeConfig?.path);
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.storedRoutes.get(route.routeConfig?.path) || null;
  }
  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig == curr.routeConfig;
  }
}
