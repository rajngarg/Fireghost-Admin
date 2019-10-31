import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {SiteComponent} from './screens/site/site.component';
import {PostsComponent} from './screens/posts/posts.component';
import {PagesComponent} from './screens/pages/pages.component';
import {TagsComponent} from './screens/tags/tags.component';
import {StaffComponent} from './screens/staff/staff.component';
import {CreatePostComponent} from './screens/create-post/create-post.component';


const routes: Routes = [
  {
    path: '', component: NavigationComponent,
    children: [
      {path: 'site', component: SiteComponent, outlet: 'drawer'},
      {path: 'posts', component: PostsComponent, outlet: 'drawer'},
      {path: 'pages', component: PagesComponent, outlet: 'drawer'},
      {path: 'tags', component: TagsComponent, outlet: 'drawer'},
      {path: 'staff', component: StaffComponent, outlet: 'drawer'},
    ]
  },
  {path: 'write', component: CreatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
