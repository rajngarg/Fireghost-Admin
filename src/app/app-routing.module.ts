import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { SiteComponent } from './admin/screens/site/site.component';
import { PostsComponent } from './admin/screens/posts/posts.component';
import { PagesComponent } from './admin/screens/pages/pages.component';
import { TagsComponent } from './admin/screens/tags/tags.component';
import { StaffComponent } from './admin/screens/staff/staff.component';
import { CreatePostComponent } from './admin/screens/create-post/create-post.component';


const routes: Routes = [
  {
    path: 'admin',
    component: NavigationComponent,
    children: [
      { path: 'site', component: SiteComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'tags', component: TagsComponent },
      { path: 'staff', component: StaffComponent },
    ]
  },
  { path: 'editor/:type', component: CreatePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
