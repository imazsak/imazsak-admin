import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {filter, map, shareReplay} from 'rxjs/operators';
import {NavigationStart, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isLogin = false;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.isLogin = e.url === '/login';
      }
    });
  }
}
