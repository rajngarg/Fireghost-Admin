import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// Material Components
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

// Custom Components
import { SiteComponent } from './admin/screens/site/site.component';
import { PostsComponent } from './admin/screens/posts/posts.component';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { PagesComponent } from './admin/screens/pages/pages.component';
import { TagsComponent } from './admin/screens/tags/tags.component';
import { StaffComponent } from './admin/screens/staff/staff.component';
import { CreatePostComponent } from './admin/screens/create-post/create-post.component';
import { FormsModule } from '@angular/forms';

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
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
