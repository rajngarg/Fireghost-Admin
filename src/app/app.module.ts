import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DrawerComponent} from './drawer/drawer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule, Routes} from '@angular/router';
import {SiteComponent} from './site/site.component';
import {PostsComponent} from './posts/posts.component';
import {NavigationComponent} from './navigation/navigation.component';
import {PagesComponent} from './pages/pages.component';
import {TagsComponent} from './tags/tags.component';
import {StaffComponent} from './staff/staff.component';


const appRoutes: Routes = [
  {path: '', component: NavigationComponent},
  {path: 'site', component: SiteComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'tags', component: TagsComponent},
  {path: 'staff', component: StaffComponent},
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: {title: 'Heroes List'}
  // },
  // {
  //   path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    SiteComponent,
    PostsComponent,
    NavigationComponent,
    PagesComponent,
    TagsComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
