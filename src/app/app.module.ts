import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

// Material Components
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
// Router
import {RouterModule, Routes} from '@angular/router';
// Custom Components
import {SiteComponent} from './screens/site/site.component';
import {PostsComponent} from './screens/posts/posts.component';
import {NavigationComponent} from './navigation/navigation.component';
import {PagesComponent} from './screens/pages/pages.component';
import {TagsComponent} from './screens/tags/tags.component';
import {StaffComponent} from './screens/staff/staff.component';
import {CreatePostComponent} from './screens/create-post/create-post.component';


const appRoutes: Routes = [
  {path: '', component: SiteComponent},
  {path: 'site', component: SiteComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'tags', component: TagsComponent},
  {path: 'staff', component: StaffComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    PostsComponent,
    NavigationComponent,
    PagesComponent,
    TagsComponent,
    StaffComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
